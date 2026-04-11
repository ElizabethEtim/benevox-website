export function AfricanPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="african-pattern"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {/* Geometric triangular pattern inspired by African textiles */}
          <path
            d="M 0 0 L 25 50 L 0 100 Z"
            fill="currentColor"
            opacity="0.3"
          />
          <path
            d="M 50 0 L 75 50 L 50 100 Z"
            fill="currentColor"
            opacity="0.2"
          />
          <path
            d="M 25 50 L 50 0 L 75 50 Z"
            fill="currentColor"
            opacity="0.4"
          />
          <path
            d="M 25 50 L 50 100 L 75 50 Z"
            fill="currentColor"
            opacity="0.3"
          />
          <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#african-pattern)" />
    </svg>
  );
}
