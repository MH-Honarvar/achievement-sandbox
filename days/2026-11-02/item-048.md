# Storage failure

If storage is blocked, the checkbox still toggles for the current visit.

The list has to work even when the browser refuses storage.

The read and the write both sit in try/catch; if setItem throws, the li still receives the done class for this visit.
