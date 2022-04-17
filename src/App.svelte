<script>
  import Form from "./components/Form.svelte";
  import List from "./components/List.svelte";
  import Tooltip from "./components/Tooltip.svelte";
</script>

<main>
  <div class="container">
    <h1>Svelte Todo List</h1>
    <Form />
    <List />
  </div>

  <div class="tooltip">
    <Tooltip />
  </div>
</main>
