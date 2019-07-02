(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var globby = require('globby');

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
