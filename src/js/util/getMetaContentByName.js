export function getMetaContentByName(name) {
   return document.querySelector(`meta[name='${name}']`).getAttribute('content');
}

