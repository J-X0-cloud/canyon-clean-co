import { Fragment } from "react";
import { coverageMapPins } from "@/lib/data/areas";

/** Hand-drawn SVG map of crew bases and coverage along the 101 and 134. */
export function CoverageMap() {
  return (
    <div className="map-card" aria-hidden="true">
      <svg viewBox="0 0 520 420">
        <defs>
          <pattern id="map-grid" width="26" height="26" patternUnits="userSpaceOnUse">
            <path d="M26 0H0V26" fill="none" stroke="#d6e6f4" strokeWidth={1} />
          </pattern>
        </defs>
        <rect width="520" height="420" rx="24" fill="#f7fbfe" />
        <rect width="520" height="420" rx="24" fill="url(#map-grid)" />
        <path d="M0 330 C90 300 150 318 230 290 C320 258 380 300 520 262 V420 H0z" fill="#e5f0f9" />
        <path
          d="M0 360 C120 340 200 356 300 334 C390 314 450 336 520 318 V420 H0z"
          fill="#d2e5f5"
        />
        {/* Freeways: the 101 across the Valley, the 134 toward Burbank */}
        <path
          d="M20 120 C140 150 260 150 380 128 C430 118 480 110 520 112"
          fill="none"
          stroke="#f3c9a8"
          strokeWidth={10}
          strokeLinecap="round"
        />
        <path
          d="M300 60 C330 140 360 200 420 250 C450 275 490 290 520 300"
          fill="none"
          stroke="#f3c9a8"
          strokeWidth={8}
          strokeLinecap="round"
        />
        <g fontFamily="Plus Jakarta Sans, sans-serif" fontSize={13} fontWeight={700} fill="#13293d">
          {coverageMapPins.map((pin) => (
            <Fragment key={`${pin.x}-${pin.y}`}>
              {pin.halo ? (
                <circle cx={pin.x} cy={pin.y} r={pin.halo} fill="#2272c3" opacity={0.12} />
              ) : null}
              <circle cx={pin.x} cy={pin.y} r={pin.r} fill={pin.halo ? "#2272c3" : "#f29a5b"} />
              {pin.label ? (
                <text x={pin.label.x} y={pin.label.y} fontSize={pin.label.size}>
                  {pin.label.text}
                </text>
              ) : null}
            </Fragment>
          ))}
        </g>
        <g transform="translate(24 24)">
          <rect width="176" height="44" rx="12" fill="#fff" stroke="#e3ebf2" />
          <circle cx="22" cy="22" r="6" fill="#2272c3" />
          <text
            x="36"
            y="27"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontSize={12.5}
            fontWeight={600}
            fill="#3b5166"
          >
            Crew bases &amp; coverage
          </text>
        </g>
      </svg>
    </div>
  );
}
