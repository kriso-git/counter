"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-9xl font-bold tabular-nums tracking-tight">
        {count}
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setCount((c) => c - 1)}
          className="rounded-xl bg-neutral-800 px-6 py-3 text-2xl font-semibold text-white transition hover:bg-neutral-700 active:scale-95"
          aria-label="Decrement"
        >
          −1
        </button>
        <button
          onClick={() => setCount(0)}
          className="rounded-xl bg-neutral-200 px-6 py-3 text-2xl font-semibold text-neutral-900 transition hover:bg-neutral-300 active:scale-95 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600"
          aria-label="Reset"
        >
          Reset
        </button>
        <button
          onClick={() => setCount((c) => c + 1)}
          className="rounded-xl bg-emerald-500 px-6 py-3 text-2xl font-semibold text-white transition hover:bg-emerald-400 active:scale-95"
          aria-label="Increment"
        >
          +1
        </button>
      </div>
    </div>
  );
}
