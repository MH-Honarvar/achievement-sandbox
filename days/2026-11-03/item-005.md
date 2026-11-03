# Fill the date from the browser clock

The paragraph with id today shows the date the browser already knows.

The markup leaves that paragraph empty, so a hard-coded string would drift from the machine clock and the page would claim a day the reader is not on.

Opening the file on 2026-11-03 writes that calendar day into #today and nowhere else.