import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-2 py-1 border-violet-500 border-2 rounded-lg bg-violet-400 hover:bg-violet-300 transition-colors font-mono text-gray-900 text-lg font-bold"
    />
  );
}
