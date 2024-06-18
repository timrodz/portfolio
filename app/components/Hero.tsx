import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  AnimatePresence,
  cubicBezier,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTime,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { degreesToRadians, mix, progress } from "popmotion";
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Socials } from "./Socials";

const StarMesh = ({ p, color }: { p: number; color: THREE.Color | string }) => {
  const ref = useRef<THREE.Object3D>(null);

  useEffect(() => {
    const distance = mix(6, 13.5, Math.random());
    const yAngle = mix(
      degreesToRadians(80),
      degreesToRadians(100),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
  }, [p]);

  return (
    // @ts-expect-error it simply works
    <mesh ref={ref}>
      <boxGeometry args={[0.05, 0.05, 0.05]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

const Scene = ({ numStars = 100 }) => {
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [degreesToRadians(45), degreesToRadians(180)],
    { ease: cubicBezier(0.17, 0.67, 0.83, 0.67) }
  );
  const distance = useTransform(scrollYProgress, [0, 1], [10, 5]);
  const time = useTime();

  const color = "#adf3ea";

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0002
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(
      <StarMesh key={`star-${i}`} p={progress(0, numStars, i)} color={color} />
    );
  }

  return (
    <Fragment>
      <mesh rotation-x={0.2}>
        <icosahedronGeometry args={[5]} />
        <meshBasicMaterial wireframe color={color} />
      </mesh>
      {stars}
    </Fragment>
  );
};

export const Hero = () => {
  const [showDrag, showDragSet] = useState(true);
  const heroDrag = useMotionValue(0);
  const backgroundColor = useTransform(
    heroDrag,
    [-300, 0, 300],
    ["#85eed9", "#85eee2", "#85eaee"]
  );
  const heroTextColor = useTransform(
    heroDrag,
    [-200, 0, 200],
    ["#0c6e64", "#0c6e66", "#0c5e6e"]
  );
  const heroTextColorLight = useTransform(
    heroDrag,
    [-300, 0, 300],
    ["#0d917d", "#0d9186", "#0d8291"]
  );

  return (
    <div id="hero-wrapper-parallax">
      <motion.div id="hero-bg-wrapper" style={{ backgroundColor }}>
        <motion.div
          id="hero-content"
          style={{
            color: heroTextColor,
          }}
        >
          <p className="text-teal-700 ml-4 font-medium">Hi, I&apos;m</p>
          <motion.h1
            id="hero-title"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            whileHover={{ scale: 1.05 }}
            style={{ x: heroDrag }}
            onDragStart={() => showDragSet(false)}
            onDragEnd={() => showDragSet(true)}
          >
            Juan Alejandro{" "}
            <span className="relative">
              <AnimatePresence>
                {showDrag && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="-z-10 w-[74px] absolute top-0 right-0 -rotate-[10deg] lg:translate-y-1/3 translate-x-[120%] text-xs font-normal p-2 bg-teal-100 rounded-md"
                  >
                    <span className="font-mono">←</span> drag me
                  </motion.span>
                )}
              </AnimatePresence>
              Morais
            </span>
          </motion.h1>
          <motion.p id="hero-headline" style={{ color: heroTextColorLight }}>
            {'creative_dev(["web", "3D"])'}
          </motion.p>
          <Socials />
        </motion.div>
        <div
          id="hero-cta-container"
          className="absolute bottom-8 right-1/2 translate-y-1/2 translate-x-[50%]"
        >
          <p id="hero-cta" className="animate-bounce">
            scroll to continue <span className="font-mono">↓</span>
          </p>
        </div>
      </motion.div>
      <Canvas
        id="canvas-container"
        gl={{ antialias: false, toneMapping: THREE.NoToneMapping }}
        linear
        // Keep the DPI low so the canvas emulates a pixel art look
        // Normally this would't be needed but seems like iOS devices change the DPR to 1 when scrolling
        dpr={[0.25, 0.35]}
      >
        <Scene />
      </Canvas>
    </div>
  );
};
