import { writable } from "svelte/store";

export const todos = writable([
  "Learn Svelte",
  "Create a global Store",
  "Style the project",
]);
