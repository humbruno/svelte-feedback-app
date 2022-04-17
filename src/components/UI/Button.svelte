<button>
  <slot />
</button>

<style>
  button {
    border-radius: 8px;
    cursor: pointer;
    font-weight: 700;

    padding: 8px 20px;

    background-color: #202142;
    color: #dee2e6;
  }

  button:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }
</style>
