import { axes } from '../data/axes';
import type { AxisVector } from '../types';

interface RadarChartProps {
  userVector: AxisVector;
  comparisonVector?: AxisVector;
  comparisonLabel?: string;
  size?: number;
}

function getPoint(
  index: number,
  value: number,
  center: number,
  radius: number,
  total: number
) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / total;
  const offset = (value / 10) * radius;

  const x = center + Math.cos(angle) * offset;
  const y = center + Math.sin(angle) * offset;

  return { x, y };
}

function buildPolygon(
  vector: AxisVector,
  center: number,
  radius: number
): string {
  return axes
    .map((axis, index) => {
      const point = getPoint(index, vector[axis.id], center, radius, axes.length);
      return `${point.x},${point.y}`;
    })
    .join(' ');
}

export default function RadarChart({
  userVector,
  comparisonVector,
  comparisonLabel,
  size = 380,
}: RadarChartProps) {
  const center = size / 2;
  const radius = size * 0.32;

  const userPolygon = buildPolygon(userVector, center, radius);
  const comparisonPolygon = comparisonVector
    ? buildPolygon(comparisonVector, center, radius)
    : null;

  const circleLevels = [0.25, 0.5, 0.75, 1];

  return (
    <div className="radar-shell">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="radar-svg"
        role="img"
        aria-label="Mapa visual dos eixos políticos"
      >
        {circleLevels.map((level) => (
          <circle
            key={level}
            cx={center}
            cy={center}
            r={radius * level}
            fill="none"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="1"
          />
        ))}

        {axes.map((axis, index) => {
          const angle = -Math.PI / 2 + (index * 2 * Math.PI) / axes.length;
          const x1 = center - Math.cos(angle) * radius;
          const y1 = center - Math.sin(angle) * radius;
          const x2 = center + Math.cos(angle) * radius;
          const y2 = center + Math.sin(angle) * radius;

          const lx = center + Math.cos(angle) * (radius + 24);
          const ly = center + Math.sin(angle) * (radius + 24);

          return (
            <g key={axis.id}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
              />
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="11"
                fill="rgba(230,238,255,0.88)"
              >
                {axis.label}
              </text>
            </g>
          );
        })}

        {comparisonPolygon && (
          <polygon
            points={comparisonPolygon}
            fill="rgba(146, 88, 255, 0.16)"
            stroke="rgba(146, 88, 255, 0.9)"
            strokeWidth="2"
          />
        )}

        <polygon
          points={userPolygon}
          fill="rgba(90, 116, 255, 0.18)"
          stroke="rgba(90, 116, 255, 1)"
          strokeWidth="2.5"
        />

        <circle cx={center} cy={center} r="3.5" fill="rgba(255,255,255,0.75)" />
      </svg>

      <div className="radar-legend">
        <div className="legend-chip">
          <span className="legend-dot legend-user" />
          <span>Tu</span>
        </div>

        {comparisonVector && (
          <div className="legend-chip">
            <span className="legend-dot legend-compare" />
            <span>{comparisonLabel ?? 'Perfil de comparação'}</span>
          </div>
        )}
      </div>
    </div>
  );
}