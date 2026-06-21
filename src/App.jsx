import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 font-sans text-zinc-100 overflow-hidden bg-zinc-950">
      
      {/* Ambient Mesh Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-violet-700/15 blur-[120px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-700/15 blur-[120px]"></div>
        <div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-fuchsia-700/15 blur-[120px]"></div>
        
        {/* Subtle dot pattern grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      </div>

      <div className="relative z-10 bg-zinc-900/40 backdrop-blur-3xl border border-white/10 shadow-2xl rounded-[2.5rem] p-10 w-full max-w-sm flex flex-col items-center transform transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.03)]">
        
        <div className="flex items-center gap-3 mb-10">
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse"></div>
          <h1 className="text-xs font-medium tracking-[0.2em] text-zinc-400 uppercase">
            Counter
          </h1>
        </div>
        
        <div className="relative mb-14 w-full flex justify-center items-center">
          <div className="absolute inset-0 bg-white/5 blur-[50px] rounded-full w-32 h-32 m-auto"></div>
          <span className="relative text-8xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 tabular-nums drop-shadow-md py-2">
            {count}
          </span>
        </div>

        <div className="flex flex-col w-full gap-4">
          <div className="flex justify-center gap-4 w-full">
            <button 
              onClick={decrement}
              disabled={count === 0}
              className={`flex-1 border font-light py-4 px-6 rounded-2xl transition-all duration-300 flex justify-center items-center text-4xl
                ${count === 0 
                  ? 'bg-transparent border-white/5 text-zinc-700 cursor-not-allowed' 
                  : 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/10 text-zinc-300 active:scale-[0.96]'
                }`}
              aria-label="Decrement"
            >
              -
            </button>
            <button 
              onClick={increment}
              className="flex-1 bg-white hover:bg-zinc-200 text-zinc-950 font-medium py-4 px-6 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 active:scale-[0.96] flex justify-center items-center text-4xl"
              aria-label="Increment"
            >
              +
            </button>
          </div>
          
          <button 
            onClick={reset}
            className="w-full mt-3 bg-transparent hover:bg-white/5 text-zinc-500 hover:text-zinc-300 font-medium py-3 px-6 rounded-xl transition-all duration-300 active:scale-[0.98] text-sm uppercase tracking-wider"
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;