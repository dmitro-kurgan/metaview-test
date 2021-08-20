module.exports = function () {
  const ignoreCSS = (type, message) => !/^CSS/.test(message);

  $.gulp.task("html:validation", () => (
    $.gulp.src(`${$.dir.build}*.html`)
      .pipe($.plugins.w3cHtmlValidator({
        verifyMessage: ignoreCSS
      }))
  ));
};
