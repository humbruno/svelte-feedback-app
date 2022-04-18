<script>
  import { todos } from "../TodoStore";
  import Button from "./UI/Button.svelte";

  let todo = "";
  let message = "";

  const createTodo = (e) => {
    e.preventDefault();

    if (todo.trim().length < 1) {
      return (message = "You cannot submit an empty task!");
    } else {
      todos.update((todos) => {
        return [todo, ...todos];
      });

      message = null;
      todo = "";
    }
  };
</script>

<section>
  <form on:submit={createTodo}>
    <label>
      What would you like to do?
      <input
        type="text"
        placeholder="Example: Give a bath to my cat"
        bind:value={todo}
      />
      <Button>Add Task</Button>
    </label>

    {#if message}
      <div class="message">
        {message}
      </div>
    {/if}
  </form>
</section>

<style>
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  input {
    padding: 10px 10px;
    font-size: 1rem;
    color: #202142;
    background-color: #dee2e6;
    border-radius: 8px;
    border: 2px solid #dee2e6;
    width: 80%;
  }

  input:focus,
  input:active {
    border: 2px solid #202142;
    outline: none;
  }

  .message {
    color: crimson;
    padding: 10px 0;
  }
</style>
