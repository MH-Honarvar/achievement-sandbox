# Run the phone pass at 360 CSS pixels

The phone-width check includes a 360px CSS viewport, not only 390px.

At 360px the first task sentence wraps to three lines, and the row becomes the tallest block in the opening view.

The failure to fix was the third task's sentence overflowing by about 12px before the padding held it.