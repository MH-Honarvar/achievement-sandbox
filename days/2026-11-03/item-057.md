# Reload after midnight so the date changes

The date is taken when the page loads, so a tab left open past midnight shows the previous day until reload.

The checks are the only state that survives a reload, and the date must not, or 2026-11-03 would stick on the morning of the 4th.

After a reload on the next morning, #today shows the new day and the three boxes keep their stored checks.