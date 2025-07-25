
const JoinNowButton = () => {
  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
  return (
    <button
      className={`
        group relative inline-flex items-center justify-center overflow-hidden 
        rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 
        px-8 py-3 text-base font-bold text-white shadow-lg
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-2xl focus:outline-none 
        focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800
      `}
    >
      {/* The shine element is an absolutely positioned span. */}
      {/* On hover, it translates from off-screen left to off-screen right, creating a sweep effect. */}
      <span
        className={`
          absolute left-0 top-0 h-full w-full
          -translate-x-full transform bg-white opacity-20
          transition-transform duration-500 ease-in-out 
          group-hover:translate-x-full group-hover:skew-x-[-15deg]
        `}
      />
      {/* The content is relative to ensure it appears above the shine element. */}
      <span className="relative flex items-center gap-2">
        Join Now
        <ArrowIcon />
      </span>
    </button>
  );
};

export default JoinNowButton;