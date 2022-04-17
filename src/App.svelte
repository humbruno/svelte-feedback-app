<script>
  import Form from "./components/Form.svelte";
  import List from "./components/List.svelte";
  import Tooltip from "./components/Tooltip.svelte";
</script>

<main>
  <div class="container">
    <h2 class="title">{"{Svelte}"}</h2>
    <h1>Todo List</h1>
    <Form />
    <List />
  </div>

  <div class="tooltip">
    <Tooltip />
  </div>
</main>

<style>
  main {
    text-align: center;
  }

  .title {
    color: #e25b88;
  }
</style>
