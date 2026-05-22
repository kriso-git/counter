import Counter from "./components/counter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-white p-8 dark:bg-neutral-950 dark:text-white">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
        Szeged Fekete Top Counter
      </h1>
      <Counter />
    </main>
  );
}
