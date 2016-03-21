export function parseEqualList(str){
  var pos = str.indexOf('=');
  var key = str.slice(0, pos++).trim();
  var value = str.slice(pos--, str.length ).trim();
  var obj = {};
  obj[key] = value;
  return obj;
}