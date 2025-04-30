import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

function ThreeDModel() {
  return (
    <Canvas style={{ height: 300 }}>
      <ambientLight intensity={0.5} />
      <Box>
        <meshStandardMaterial color="skyblue" />
      </Box>
      <OrbitControls />
    </Canvas>
  );
}

export default ThreeDModel;