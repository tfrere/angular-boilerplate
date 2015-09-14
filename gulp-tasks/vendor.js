var mainBowerFiles = require('main-bower-files');

module.exports = function (gulp, plugins, paths) {
  return function () {
    gulp.src(mainBowerFiles())
      .pipe(plugins.filter('**/*.js'))
      .pipe(plugins.concat(paths.vendor.name))
      .pipe(plugins.jsmin())
      .pipe(gulp.dest(paths.vendor.dest));
  };
};