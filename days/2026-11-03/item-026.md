# Do not write the date into storage

The date is read from the browser when the page loads and is not stored with the checks.

Saving the date string would freeze 2026-11-03 in local storage and show it again on the next day even though the clock had moved.

Clearing site data removes the three checks and does not need to clear a date, because none was saved.