import Svg, { Circle, Ellipse, Path, Polygon } from 'react-native-svg';

interface BirdProps {
  size?: number;
}

export default function BirdIllustration({ size = 120 }: BirdProps) {
  const scale = size / 120;

  return (
    <Svg width={size} height={size} viewBox="0 0 120 120">
      {/* Body */}
      <Ellipse cx="60" cy="72" rx="28" ry="22" fill="#4FC3F7" />
      {/* Head */}
      <Circle cx="60" cy="48" r="20" fill="#4FC3F7" />
      {/* White belly */}
      <Ellipse cx="60" cy="76" rx="16" ry="14" fill="#E3F2FD" />
      {/* Wing */}
      <Path d="M80 65 Q100 50 95 72 Q85 78 75 72 Z" fill="#0288D1" />
      {/* Eye */}
      <Circle cx="65" cy="44" r="4" fill="#fff" />
      <Circle cx="66" cy="44" r="2" fill="#1a1a1a" />
      {/* Beak */}
      <Polygon points="72,50 82,47 72,54" fill="#FFA726" />
      {/* Feet */}
      <Path d="M50 93 L46 102 M50 93 L50 102 M50 93 L54 102" stroke="#FFA726" strokeWidth="2.5" strokeLinecap="round" />
      <Path d="M66 93 L62 102 M66 93 L66 102 M66 93 L70 102" stroke="#FFA726" strokeWidth="2.5" strokeLinecap="round" />
      {/* Legs */}
      <Path d="M50 88 L50 93" stroke="#FFA726" strokeWidth="3" strokeLinecap="round" />
      <Path d="M66 88 L66 93" stroke="#FFA726" strokeWidth="3" strokeLinecap="round" />
    </Svg>
  );
}
