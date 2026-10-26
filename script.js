(function () {
  var storageKey = "honarvar-today-board";
  var boxes = document.querySelectorAll(".tasks input[type='checkbox']");
  var saved = {};

  try {
    saved = JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch (error) {
    saved = {};
  }

  function paint(box) {
    var item = box.closest("li");
    if (item) {
      item.classList.toggle("done", box.checked);
    }
  }

  Array.prototype.forEach.call(boxes, function (box) {
    var id = box.getAttribute("data-id");
    box.checked = Boolean(saved[id]);
    paint(box);
    box.addEventListener("change", function () {
      saved[id] = box.checked;
      paint(box);
      try {
        localStorage.setItem(storageKey, JSON.stringify(saved));
      } catch (error) {
        /* Storage can be blocked; the check still works for this visit. */
      }
    });
  });
})();