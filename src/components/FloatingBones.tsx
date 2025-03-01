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

const BONE_COUNT = 0; // Increased for more constant coverage
const VIEWPORT_HEIGHT = 120; // Percentage, slightly larger than screen

const FloatingBones = () => {
  const bonesRef = useRef<Bone[]>([]);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize bones if not already done
  if (bonesRef.current.length === 0) {
    bonesRef.current = Array.from({ length: BONE_COUNT }, (_, index) => ({
      x: Math.random() * 100,
      // Distribute bones evenly across the viewport height initially
      y: (index * (VIEWPORT_HEIGHT / (BONE_COUNT / 2))) - VIEWPORT_HEIGHT,
      speed: 0.005 + Math.random() * 0.008, // Random speed between 0.005 and 0.013
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.3, // Random direction
      size: Math.random() * 20 + 6, // 6-22px, more variation
      opacity: Math.random() * 0.05 + 0.2, // Very subtle
    }));
  }

  const updateBonePosition = (bone: Bone, deltaTime: number) => {
    bone.y += bone.speed * deltaTime;
    bone.rotation += bone.rotationSpeed * deltaTime;

    // If bone goes below viewport, reset it to top with new random x position and speed
    if (bone.y > 100) {
      bone.y = -20; // Reset above viewport
      bone.x = Math.random() * 100; // New random x position
      bone.speed = 0.002 + Math.random() * 0.004; // New random speed when recycling
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
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none w-full h-full"
    >
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
