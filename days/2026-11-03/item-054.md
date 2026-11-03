# Keep the Persian span inline at 768px

At 768px the Persian span stays inline with the English sentence.

Forcing it to display block at that width created a second column of text with its own right edge, and the type task failed in the opening view.

The span wraps only when the remaining space on the line is shorter than the Persian words.