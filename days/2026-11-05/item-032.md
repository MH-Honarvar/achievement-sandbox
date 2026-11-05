# Restore each box from the saved map on load

On load, each checkbox is set from the parsed storage object before the listener is attached.

Otherwise a returning reader sees empty boxes for a moment and a change event can clobber the map. The assignment is box.checked = Boolean(saved[id]).
