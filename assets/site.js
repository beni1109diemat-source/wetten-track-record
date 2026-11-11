/* Kleines Menue: schliesst nach Klick auf einen Link oder mit Escape. */
(function () {
  var m = document.querySelector('.sh-menu');
  if (!m) return;
  m.addEventListener('click', function (e) { if (e.target.closest('a')) m.removeAttribute('open'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') m.removeAttribute('open'); });
})();
