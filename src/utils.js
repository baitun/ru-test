export function encode(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

export function decode(str) {
  return atob(escape(decodeURIComponent(str)));
}
