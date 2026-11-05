# Format the date with the en-GB locale

The clock text uses the en-GB locale so the day number precedes the month.

en-US put the month first and fought the British-looking heading. The call is toLocaleDateString("en-GB", ...) writing into #today.
