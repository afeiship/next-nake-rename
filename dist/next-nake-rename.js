/*!
 * name: next-nake-rename
 * url: https://github.com/afeiship/next-nake-rename
 * version: 1.0.0
 * date: 2019-07-02T15:43:01.024Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var globby = require('globby');
  var path = require('path');
  var fs = require('fs');

  nx.nakeRename = function(inPatterns, inDest, inOptions) {
    var files = globby.sync(inPatterns, inOptions);
    files.forEach(function(file) {
      var dest = path.join(inDest, '/', file);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.renameSync(file, dest);
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.nakeRename;
  }
})();

//# sourceMappingURL=next-nake-rename.js.map
