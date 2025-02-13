import { FaBone } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

interface Bone {
  x: number;
  y: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  opacity: number;
}

const BONE_COUNT = 12;
const VIEWPORT_HEIGHT = 120; // Percentage, slightly larger than screen

const FloatingBones = () => {
  const bonesRef = useRef<Bone[]>([]);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  // Initialize bones if not already done
  if (bonesRef.current.length === 0) {
    bonesRef.current = Array.from({ length: BONE_COUNT }, () => ({
      x: Math.random() * 100,
      y: Math.random() * VIEWPORT_HEIGHT - VIEWPORT_HEIGHT, // Start above viewport
      speed: Math.random() * 0.002 + 0.008, // Very slow fall
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.3, // Random direction
      size: Math.random() * 12 + 8, // 8-20px
      opacity: Math.random() * 0.05 + 0.1, // Very subtle
    }));
  }

  const updateBonePosition = (bone: Bone, deltaTime: number) => {
    bone.y += bone.speed * deltaTime;
    bone.rotation += bone.rotationSpeed * deltaTime;

    // If bone goes below viewport, reset it to top with new random x position
    if (bone.y > 100) {
      bone.y = -20; // Reset above viewport
      bone.x = Math.random() * 100; // New random x position
      // Keep other properties (speed, size, etc.) for consistency
    }

    return bone;
  };

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      
      // Update each bone's position
      bonesRef.current = bonesRef.current.map(bone => updateBonePosition({ ...bone }, deltaTime));
      
      // Force re-render
      const boneElements = document.querySelectorAll('.floating-bone');
      boneElements.forEach((element, index) => {
        const bone = bonesRef.current[index];
        if (element instanceof HTMLElement) {
          element.style.transform = `translate(${bone.x}vw, ${bone.y}vh) rotate(${bone.rotation}deg)`;
        }
      });
    }

    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []); // Empty deps array since we're using refs

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {bonesRef.current.map((bone, index) => (
        <div
          key={index}
          className="floating-bone absolute left-0 top-0 will-change-transform"
          style={{
            transform: `translate(${bone.x}vw, ${bone.y}vh) rotate(${bone.rotation}deg)`,
          }}
        >
          <FaBone
            className="text-blue-200"
            style={{
              fontSize: `${bone.size}px`,
              opacity: bone.opacity,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingBones;
