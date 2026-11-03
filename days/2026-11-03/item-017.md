# Add the phone padding rule only under 40rem

Side padding switches to the safe-area form only when the viewport is 40rem or narrower.

Above that width the fixed 1.35rem padding is enough, and the safe-area rule would change nothing on a desktop window.

At 390px the left padding is the larger of 1.35rem and the device's left safe-area inset.