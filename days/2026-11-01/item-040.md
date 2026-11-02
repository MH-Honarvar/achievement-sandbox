# Checks survive a reload

Saved checks survive a reload.

Comparing the first screen and the type takes more than one load of the file.

On load, each box is set from the saved object before its listener is attached, so a stored check paints the row immediately.
