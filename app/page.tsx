import { DarkThemeToggle, Button } from "flowbite-react";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
      <h1 className="text-2xl dark:text-white">Flowbite React + Next.js</h1>
      <h1 className="text-2xl dark:text-white"> This is my project - LoylP</h1>
      <Button className="bg-red-500 hover:bg-red-600">Click me</Button>;
      <DarkThemeToggle />
    </main>
  );
}
