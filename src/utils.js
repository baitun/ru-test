export function encode(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

export function decode(str) {
  return atob(escape(decodeURIComponent(str)));
}

export function ymUserParams(params) {
  if (window.ym) {
    window.ym(69444790, "userParams", { ...params });
  }
}
