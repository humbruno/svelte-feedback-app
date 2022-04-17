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
      <input type="text" bind:value={todo} />
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
    padding: 8px 10px;
    font-family: "Poppins", sans-serif;
    color: #202142;
    border-radius: 8px;
    width: 80%;
  }

  .message {
    color: crimson;
    padding: 10px 0;
  }
</style>
