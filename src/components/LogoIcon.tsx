import React from 'react';

interface LogoIconProps {
  className?: string;
  size?: number | string;
  color?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = ({
  className = "w-8 h-8",
  size,
  color = "currentColor",
}) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label="Логотип Скульптура Тату"
    >
      {/* Outer 'C' Serif Arc */}
      <path
        d="M 64 12
           C 65 12 65.5 16 65.5 18
           C 65.5 20.5 62 21.5 58 21.5
           C 38 21.5 24 33 24 50
           C 24 67 38 78.5 58 78.5
           C 62 78.5 65.5 79.5 65.5 82
           C 65.5 84 65 88 64 88
           C 32 88 12 70 12 50
           C 12 30 32 12 64 12 Z"
        fill={color}
      />

      {/* Top serif cap on 'C' */}
      <path
        d="M 52 12 L 64 12 L 64 22 L 57 21.5 Z"
        fill={color}
      />

      {/* Bottom serif cap on 'C' */}
      <path
        d="M 52 88 L 64 88 L 64 78 L 57 78.5 Z"
        fill={color}
      />

      {/* Inner 'S' Serif Letter */}
      <path
        d="M 58 28
           C 48 28 41 33 41 40
           C 41 46 46 49.5 53 52
           L 56 53
           C 62 55 67 58.5 67 64
           C 67 70.5 60 75 51 75
           C 44 75 39 72 35 68
           L 33 74
           C 38 78 45 80 52 80
           C 65 80 74 73 74 63.5
           C 74 55.5 67 52 59 49
           L 56 48
           C 50 45.5 47 43.5 47 39.5
           C 47 35 52 32.5 58.5 32.5
           C 64 32.5 68.5 35 71.5 38.5
           L 73.5 32.5
           C 69 29.5 64 28 58 28 Z"
        fill={color}
      />

      {/* Center Vertical Tattoo Needle / Cartridge */}
      {/* Top Plunger Cap */}
      <rect x="48.5" y="16" width="3" height="6" rx="0.5" fill={color} />
      {/* Connector Collar */}
      <path d="M 47.5 22 L 52.5 22 L 51.5 25 L 48.5 25 Z" fill={color} />
      {/* Needle Grip Handle (Sculpted) */}
      <path
        d="M 48.5 25
           C 46.5 30 46.5 38 48 45
           L 52 45
           C 53.5 38 53.5 30 51.5 25
           Z"
        fill={color}
      />
      {/* Straight Shaft */}
      <rect x="49.2" y="45" width="1.6" height="42" fill={color} />
      {/* Fine Needle Point */}
      <path d="M 49 87 L 51 87 L 50 96 Z" fill={color} />
    </svg>
  );
};
