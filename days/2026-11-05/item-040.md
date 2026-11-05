# Load script.js after the date paragraph

script.js is the last element in the body.

Running it from the head would call getElementById("today") before the date paragraph exists. The script tag follows </main>.
