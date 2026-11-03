# Stop the Persian span breaking inside a word

The Persian span uses keep-all, normal overflow wrap, and no hyphens.

At phone width an ordinary break opportunity would slice a Persian word, and the inline span would look damaged next to the English sentence.

At 320px the span wraps only between words, and the longest Persian word stays intact.