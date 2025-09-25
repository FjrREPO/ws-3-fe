export default function Loading() {
  return (
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-background/10 dark:bg-foreground-dark/90 backdrop-blur-[2px] w-screen h-svh flex flex-col justify-center items-center">
      <div className="loader flex my-1">
        <svg height="0" width="0" viewBox="0 0 64 64" className="absolute">
          <defs xmlns="http://www.w3.org/2000/svg">
            <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="b">
              <stop stopColor="#973BED"></stop>
              <stop stopColor="#007CFF" offset="1"></stop>
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="0" x2="0" y1="64" x1="0" id="c">
              <stop stopColor="#FFC800"></stop>
              <stop stopColor="#F0F" offset="1"></stop>
              <animateTransform
                repeatCount="indefinite"
                keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
                keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
                dur="8s"
                values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
                type="rotate"
                attributeName="gradientTransform"
              />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" y2="2" x2="0" y1="62" x1="0" id="d">
              <stop stopColor="#00E0ED"></stop>
              <stop stopColor="#00DA72" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="8"
            stroke="url(#b)"
            d="M 16,4 h 20 a 12,12 0 0 1 0,24 h -20 z m 0,24 h 20 a 12,12 0 0 1 0,24 h -20 z"
            className="dash"
            pathLength="360"
          />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="8"
            stroke="url(#c)"
            d="M 12,50 L 32,4 L 52,50 M 22,36 L 44,36"
            className="dash"
            pathLength="360"
          />
        </svg>

        <div className="w-2" />

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="8"
            stroke="url(#d)"
            d="M 48,16 c 0,-8 -8,-12 -16,-12 -8,0 -16,4 -16,12 0,8 8,12 16,12 8,0 16,4 16,12 0,8 -8,12 -16,12 -8,0 -16,-4 -16,-12"
            className="dash"
            pathLength="360"
          />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" height="64" width="64" className="inline-block">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="8"
            stroke="url(#b)"
            d="M 12,4 L 12,50 M 12,4 L 52,4 M 12,26 L 40,26 M 12,50 L 52,50"
            className="dash"
            pathLength="360"
          />
        </svg>
      </div>
    </div>
  );
}
