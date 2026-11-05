# Keep at least 1.35rem when the inset is smaller

Side padding on a narrow window is the larger of 1.35rem and the safe-area inset.

A notch inset of a few pixels would otherwise shrink the gutter below the desktop 1.35rem. The expression is max(1.35rem, env(safe-area-inset-left, 0px)) and the matching right inset.
