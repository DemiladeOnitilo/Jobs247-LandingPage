export const DotGrid = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10"
    style={{
      backgroundImage: "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
      backgroundSize: "26px 26px",
      WebkitMaskImage: "radial-gradient(75% 75% at 50% 40%, #000, transparent)",
      maskImage: "radial-gradient(75% 75% at 50% 40%, #000, transparent)",
    }}
  />
);


export const AbstractFlow = ({ className = "" }) => (
  <svg
    viewBox="0 0 1200 500"
    preserveAspectRatio="xMidYMid slice"
    className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    aria-hidden="true"
  >
    <g
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      opacity="0.12"
    >
      <path d="M-100 400C150 100 350 550 600 250S1000 50 1300 300" />
      <path d="M-100 430C150 130 350 580 600 280S1000 80 1300 330" />
      <path d="M-100 460C150 160 350 610 600 310S1000 110 1300 360" />
      <path d="M-100 490C150 190 350 640 600 340S1000 140 1300 390" />
      <path d="M-100 520C150 220 350 670 600 370S1000 170 1300 420" />
    </g>
  </svg>
);

export const GeometricPattern = ({ className = "" }) => (
  <svg
    viewBox="0 0 800 600"
    preserveAspectRatio="xMidYMid slice"
    className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    aria-hidden="true"
  >
    <g
      fill="none"
      stroke="#0B4A9E"
      strokeWidth="1.5"
      opacity="0.12"
    >
      <circle cx="100" cy="100" r="45" />
      <circle cx="100" cy="100" r="65" />
      <rect x="330" y="60" width="90" height="90" rx="12" transform="rotate(25 375 105)" />
      <path d="M570 50L640 170L500 170Z" />
      <path d="M80 340L150 270L220 340L150 410Z" />
      <circle cx="440" cy="370" r="55" />
      <circle cx="440" cy="370" r="80" />
      <rect x="650" y="350" width="90" height="90" rx="18" transform="rotate(35 695 395)" />
      <path d="M300 480L350 390L400 480Z" />
    </g>
  </svg>
);
