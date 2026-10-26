// Loads giscus (GitHub Discussions comments) only after the visitor clicks the button.
(function () {
  const sec = document.getElementById('comments');
  const btn = document.getElementById('load-comments');
  if (!sec || !btn) return;
  btn.addEventListener('click', function () {
    const d = sec.dataset;
    const s = document.createElement('script');
    s.src = 'https://giscus.app/client.js';
    s.async = true;
    s.crossOrigin = 'anonymous';
    const attrs = {
      'data-repo': d.repo, 'data-repo-id': d.repoId, 'data-category': d.category, 'data-category-id': d.categoryId,
      'data-mapping': 'specific', 'data-term': d.term, 'data-strict': '1', 'data-reactions-enabled': '1',
      'data-emit-metadata': '0', 'data-input-position': 'top', 'data-theme': 'dark', 'data-lang': d.lang,
    };
    Object.keys(attrs).forEach(function (k) { s.setAttribute(k, attrs[k]); });
    btn.replaceWith(s);
  });
})();
