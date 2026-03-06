import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';

const CameraRig = ({ children }) => {
  const { camera } = useThree();

  useEffect(() => {
    const updateCamera = () => {
      const isBreakpoint = window.innerWidth <= 1260;
      const isMobile = window.innerWidth <= 600;

      let targetPosition = [-0.4, 0, 3];  // pulled back for bigger view
      if (isBreakpoint) targetPosition = [0, 0, 3.2];
      if (isMobile) targetPosition = [0, 0.2, 3.8];  // farther on small screens

      camera.position.set(...targetPosition);
      camera.lookAt(0, 0.1, 0);  // ensure looking at center
      camera.updateProjectionMatrix();
    };

    updateCamera();  // initial
    window.addEventListener('resize', updateCamera);
    return () => window.removeEventListener('resize', updateCamera);
  }, [camera]);

  return <>{children}</>;
};

export default CameraRig;
