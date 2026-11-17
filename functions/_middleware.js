/**
 * Cloudflare Pages Function — rulează înaintea fișierelor statice din `out/`.
 * Redirect 301 www → domeniul fără www, pe orice cale, cu query string-ul păstrat.
 * (Cloudflare Pages nu suportă redirect-uri pe domeniu în `_redirects`.)
 */
const WWW_HOST = "www.servicegrigorescu.ro";
const CANONICAL_HOST = "servicegrigorescu.ro";

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === WWW_HOST) {
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
