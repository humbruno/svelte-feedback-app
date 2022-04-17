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
    <li in:scale out:fade={{ duration: 250 }}>
      {todo}

      <span on:click={() => handleDelete(todo)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          class="bi bi-trash-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
          />
        </svg>
      </span>
    </li>
  {/each}
</ul>

<style>
  ul {
    margin-top: 30px;
  }

  li {
    padding: 10px 20px;
    background-color: #dee2e6;
    color: #202142;
    margin: 10px 0;
    border-radius: 8px;

    display: flex;
    justify-content: space-between;

    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  span {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
</style>
