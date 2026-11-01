// Mark the nav link for the section currently in view.
(function () {
  var links = document.querySelectorAll('.top nav a');
  if (!('IntersectionObserver' in window) || !links.length) return;
  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var link = byId[e.target.id];
      if (!link) return;
      if (e.isIntersecting) {
        links.forEach(function (a) { a.removeAttribute('aria-current'); a.style.color = ''; });
        link.setAttribute('aria-current', 'true');
        link.style.color = 'var(--ink)';
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  Object.keys(byId).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) io.observe(el);
  });
})();
