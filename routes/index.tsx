import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { Button } from "../components/Button.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-4 bg-gray-400 h-screen">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center py-8">
        <h1 class="text-4xl font-bold">Welcome to your habits tracking app!</h1>
        <p class="my-4">
          I updated this message in the
          <code class="mx-2">./routes/index.tsx</code>{" "}
          file, and didn't even need to refresh because of the live reload.
        </p>
        <Counter count={count} />
      </div>
      <div class="px-4 py-4 flex flex-col items-center justify-center rounded-md">
        <Button>Add Habit</Button>
      </div>
    </div>
  );
}
