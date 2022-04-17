<button>
  <slot />
</button>

<style>
  button {
    color: #fff;
    border: 0;
    border-radius: 8px;
    cursor: pointer;

    padding: 8px 20px;

    background-color: #dee2e6;
    color: #202142;
  }

  button:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }
</style>
