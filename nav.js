document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  var overlay = document.querySelector('.nav-overlay');
  if (!toggle || !nav) return;

  function open() {
    nav.classList.add('open');
    if (overlay) overlay.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }
  function close() {
    nav.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  toggle.addEventListener('click', function () {
    if (nav.classList.contains('open')) close(); else open();
  });
  if (overlay) overlay.addEventListener('click', close);
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
});
