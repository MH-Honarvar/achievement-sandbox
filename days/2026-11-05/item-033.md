# Swallow a blocked storage write

A failed localStorage.setItem is caught and ignored.

Private-mode blocking should not throw out of the change handler. The check still updates the done class for the current visit.
