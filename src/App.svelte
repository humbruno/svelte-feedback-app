<script>
  import Form from "./components/Form.svelte";
  import List from "./components/List.svelte";
  import Tooltip from "./components/Tooltip.svelte";
</script>

<main>
  <div class="container">
    <h2 class="title">{"{ Svelte }"}</h2>
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

  h1 {
    position: relative;
    display: inline-block;
    z-index: 2;
    font-size: 2.5rem;
  }

  h1::before {
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
