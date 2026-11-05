# Store checks under honarvar-today-board

Checkbox state is saved under the key honarvar-today-board.

A generic key such as tasks would collide with another page on the same origin. localStorage.getItem and setItem both use that string.
