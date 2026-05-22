import Counter from "./components/counter";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-8 dark:bg-neutral-950 dark:text-white">
      <Counter />
    </main>
  );
}
