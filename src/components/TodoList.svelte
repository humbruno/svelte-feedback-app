<script>
  import { todos } from "../TodoStore";
  import { fade, scale } from "svelte/transition";

  const handleDelete = (todo) => {
    todos.update((existingTodos) => {
      return existingTodos.filter((item) => item !== todo);
    });
  };
</script>

<ul>
  {#each $todos as todo (todo)}
    <li
      on:click={() => handleDelete(todo)}
      in:scale
      out:fade={{ duration: 250 }}
    >
      {todo}
    </li>
  {/each}
</ul>

<style>
  li {
    padding: 10px;
    background-color: #dee2e6;
    color: #202142;
    margin: 10px 0;
    border-radius: 8px;
  }
</style>
