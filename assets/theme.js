/* Runs before first paint so the page never flashes the wrong theme. */
(function () {
  var d = document.documentElement;
  d.classList.add('js');
  try {
    var t = localStorage.getItem('theme') ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    d.dataset.theme = t;
  } catch (e) { d.dataset.theme = 'light'; }
})();
