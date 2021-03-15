module.exports = function reverse (n) {
    var reve = n.toString();
var rev = "";
for (var i = reve.length-1; i >=0; i--) rev+=reve[i];
return parseInt(rev);
}
