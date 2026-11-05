# Add the safe-area padding only under 40rem

Safe-area insets are applied only when the viewport is under 40rem.

On a desktop window the inset is zero and the extra max() was noise. The rule lives in @media (max-width: 40rem) and pads main on both sides.
