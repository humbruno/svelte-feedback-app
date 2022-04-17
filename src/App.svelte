<script>
  import Form from "./components/Form.svelte";
  import List from "./components/List.svelte";
  import Tooltip from "./components/Tooltip.svelte";
</script>

<main>
  <div class="container">
    <h1>{"{ Svelte }"}</h1>
    <h2>Todo List</h2>
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

  h1 {
    color: #e25b88;
    font-size: 1.75rem;
  }

  h2 {
    position: relative;
    display: inline-block;
    z-index: 2;
    font-size: 2.5rem;
  }

  h2::before {
    content: "";
    background: rgba(226, 91, 136, 0.8);
    position: absolute;
    left: -3%;
    bottom: 16px;
    height: 8px;
    width: 106%;
    z-index: -1;
    border-radius: 35px;
  }
</style>
