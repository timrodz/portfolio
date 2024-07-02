import { useScreenSize } from "@hooks/useScreenSize";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  motion,
  useMotionValue,
  useScroll,
  useTime,
  useTransform,
} from "framer-motion";
import { degreesToRadians, mix, progress } from "popmotion";
import { Fragment, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Socials } from "./Socials";

export const Hero = () => {
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
    <div className="hero-wrapper-parallax">
      <motion.div className="hero-bg-wrapper" style={{ backgroundColor }}>
        <motion.div
          className="hero-container"
          style={{
            color: heroTextColor,
          }}
        >
          <motion.h1
            className="hero-title"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            whileHover={{ scale: 1.05 }}
            style={{ x: heroDrag }}
          >
            Juan Alejandro Morais
          </motion.h1>
          <motion.p
            className="hero-headline"
            style={{ color: heroTextColorLight }}
          >
            {'creative_dev(["web", "3D"])'}
          </motion.p>
          <Socials />
        </motion.div>
        <div className="hero-cta-container absolute bottom-0 right-1/2 translate-y-1/2 translate-x-[50%] mb-48 lg:mb-12">
          <p className="cta">
            scroll to continue <span className="font-mono">↓</span>
          </p>
        </div>
      </motion.div>
      <Canvas
        gl={{ antialias: false, toneMapping: THREE.NoToneMapping }}
        linear
        // Keep the DPI low so the canvas emulates a pixel art look
        // Normally this would't be needed but seems like iOS devices change the DPR to 1 when scrolling
        dpr={[0.25, 0.35]}
        className="!h-screen"
      >
        <CanvasScene />
      </Canvas>
    </div>
  );
};

const StarMesh = ({ p, color }: { p: number; color: THREE.Color | string }) => {
  const { width } = useScreenSize();
  const ref = useRef<THREE.Object3D>(null);

  useEffect(() => {
    const distance = mix(width > 1024 ? 6 : 4, 16, Math.random());
    const yAngle = mix(
      degreesToRadians(80),
      degreesToRadians(100),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
  }, [p, width]);

  return (
    // @ts-expect-error it simply works
    <mesh ref={ref}>
      <sphereGeometry args={[0.04]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

const CanvasScene = ({ numStars = 100 }) => {
  const { width } = useScreenSize();
  const yAngleMult = useMemo(() => (width > 1024 ? 1.5 : 10), [width]);
  const icosahedronRadius = useMemo(() => (width > 1024 ? 5 : 3), [width]);

  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [degreesToRadians(45), degreesToRadians(180)]
  );
  const distance = useTransform(scrollYProgress, [0, 1], [10, 5]);
  const time = useTime();

  const color = "#adf3ea";

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get() * yAngleMult,
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
        <icosahedronGeometry args={[icosahedronRadius]} />
        <meshBasicMaterial wireframe color={color} />
      </mesh>
      {stars}
    </Fragment>
  );
};
