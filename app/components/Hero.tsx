import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  cubicBezier,
  motion,
  useMotionValue,
  useScroll,
  useTime,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { degreesToRadians, mix, progress } from "popmotion";
import { Fragment, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import { Socials } from "./Socials";

const StarMesh = ({ p, color }: { p: number; color: THREE.Color | string }) => {
  const ref = useRef<THREE.Object3D>(null);

  useLayoutEffect(() => {
    const distance = mix(6, 13.5, Math.random());
    const yAngle = mix(
      degreesToRadians(80),
      degreesToRadians(100),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  return (
    // @ts-expect-error it simply works
    <mesh ref={ref}>
      <boxGeometry args={[0.05, 0.05, 0.05]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
};

const Scene = ({ numStars = 100 }) => {
  const gl = useThree((state) => state.gl);

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

  useLayoutEffect(() => gl.setPixelRatio(0.3));

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
  const heroDrag = useMotionValue(0);
  const backgroundColor = useTransform(
    heroDrag,
    [-100, 0, 100],
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
          <motion.h1
            id="hero-title"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            whileHover={{ scale: 1.05 }}
            style={{ x: heroDrag }}
          >
            Juan Alejandro Morais
          </motion.h1>
          <motion.p id="hero-headline" style={{ color: heroTextColorLight }}>
            {'creative_dev(["web", "3D"])'}
          </motion.p>
          <Socials />
          {/* <pre className="text-[0.5rem] mb-4">
            Psst! Try dragging my name around...
          </pre> */}
          <Link href="#projects">
            <button id="hero-cta">
              See my work below <span className="font-mono">↓</span>
            </button>
          </Link>
        </motion.div>
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
