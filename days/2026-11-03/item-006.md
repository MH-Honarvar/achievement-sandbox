# Re-check the layout at 390px

The phone pass is a real 390px-wide viewport, not a resized desktop window guessed by eye.

At that width the column padding is still 1.35rem on each side, so the text measure is about 348px, and the Persian span is the line that wraps first.

The failure at 390px was the Persian span splitting away from the English sentence and sitting alone under it.