<button>
  <slot />
</button>

<style>
  button {
    position: relative;

    font-size: 1rem;
    border-radius: 4px;
    padding: 10px 15px;
    cursor: pointer;

    background-color: #e25b88;
    color: #fff;

    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;

    transition: all 150ms ease-in-out;
  }

  button:hover {
    filter: brightness(1.2);
    transform: translateY(-2px);
  }

  button:active {
    transform: translateY(2px);
  }
</style>
