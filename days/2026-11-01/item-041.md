# Boxes still work if storage is blocked

A blocked storage API must not break the checkboxes.

The check is still useful for the current visit when the browser refuses to persist it.

Both the read and the write sit in try/catch; a thrown storage call leaves the boxes clickable and only skips the save.
