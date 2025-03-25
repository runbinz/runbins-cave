'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState(1);
  const characterRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const lastMouseXRef = useRef(0);

  const lerp = (start: number, end: number, t: number) => {
    return start * (1 - t) + end * t;
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (event.clientX > lastMouseXRef.current) {
        setDirection(1); 
      } else if (event.clientX < lastMouseXRef.current) {
        setDirection(-1);
      }

      lastMouseXRef.current = event.clientX;
      setMousePosition({ 
        x: event.clientX, 
        y: event.clientY 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const currentPos = characterRef.current;
      const speed = 0.01;
      
      currentPos.x = lerp(currentPos.x, mousePosition.x, speed);
      currentPos.y = lerp(currentPos.y, mousePosition.y, speed);

      const character = document.getElementById('follower');
      if (character) {
        character.style.transform = `translate(${currentPos.x}px, ${currentPos.y}px) translate(-50%, -50%)`;

        const gif = character.querySelector('img');
        if (gif) {
          gif.style.transform = `scaleX(${direction})`;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition, direction]);

  return (
    <div 
      id="follower"
      style={{
        position: 'fixed', 
        left: 0,
        top: 0,
        zIndex: 1000,
        pointerEvents: 'none',
        width: '10px',
        height: '10px',
      }}
    >
        <Image
            src="/penguin_walking.gif"
            alt="penguin walking animation"
            width={125}
            height={125}
            style={{
                objectFit: 'contain',
                background: 'transparent',
                transform: 'scaleX(${direction})',
                transition: 'transform 0.5s ease',
            }}
        /> 
    </div>
  );
}