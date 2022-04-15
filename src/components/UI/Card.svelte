<div class="card">
  <slot />
  <!-- slot is a placeholder for whatever will be used between each <Card> tag in a different component - it is similar to {props.children} in React -->
</div>

<style>
  .card {
    background-color: #fff;
    color: #333;
    border-radius: 15px;
    padding: 40px 50px;
    margin: 20px 0;
    position: relative;
  }
</style>
