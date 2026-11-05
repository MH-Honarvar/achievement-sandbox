# Toggle the done class on the parent li

Checking a box toggles the class done on the enclosing li.

The strike styles target .tasks li.done span, so the class has to land on the list item, not the input. paint uses box.closest("li").
