"use client";

export default function PerfectSmoothTab() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="relative w-100 h-70 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-900 via-purple-900 to-slate-900 opacity-90" />
        <div className="absolute bottom-0 left-0 w-37.5 h-15">
          <svg
            className="absolute inset-0 w-full h-full text-white"
            viewBox="0 0 150 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* inverted radius for top-left and bottom-right */}
            <path
              d="
                M 0 0 
                Q 0 20 20 20 
                L 110 20 
                Q 130 20 130 40 
                Q 130 60 150 60 
                L 0 60 
                Z
              "
              fill="currentColor"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center pt-5 pr-4">
            <span className="text-slate-900 font-bold tracking-[0.2em] text-sm">
              FEATURED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}