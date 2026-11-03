# Let the English sentence use the column measure

The English sentence is a normal paragraph inside main, so its measure is the 36rem column minus padding.

A nested max-width on that paragraph alone would make the Persian span, which lives in the same p, wrap earlier than the heading.

The heading and the sentence end at the same right edge at 1280px.