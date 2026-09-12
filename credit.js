/* Bento Lab credit badge — 1行貼るだけで右下に「Made with Bento Lab」が出る（商用利用の条件） */
(function(){
  if(document.getElementById('bento-lab-credit'))return;
  var a=document.createElement('a');a.id='bento-lab-credit';a.href='https://yukitchy.github.io/bento-lab/';a.target='_blank';a.rel='noopener';a.textContent='Made with Bento Lab';
  a.style.cssText='position:fixed;right:14px;bottom:14px;z-index:2147483647;background:#fff;color:#1c1c1e;font:700 12px/1 "Zen Kaku Gothic New","Hiragino Sans",sans-serif;padding:10px 16px;border-radius:999px;box-shadow:0 2px 12px rgba(0,0,0,.14);text-decoration:none;border:1px solid #e3e0dc';
  (document.body||document.documentElement).appendChild(a);
})();
