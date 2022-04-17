<script>
  import TodoForm from "./Components/TodoForm.svelte";
  import TodoList from "./Components/TodoList.svelte";
  import Tooltip from "./Components/Tooltip.svelte";
</script>

<main>
  <div class="container">
    <h1>Svelte Todo List</h1>
    <TodoForm />
    <TodoList />
  </div>

  <div class="tooltip">
    <Tooltip />
  </div>
</main>
