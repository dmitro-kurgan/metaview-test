module.exports = function () {
  const imageminWebp = require('imagemin-webp');

  $.gulp.task('images', () =>
    $.gulp.src([
      `${$.dir.src}assets/images/**/*.{png,jpg,gif,svg}`,
      `!${$.dir.src}assets/images/svg/*.svg`
    ])
    .pipe($.gulp.dest(`${$.dir.build}assets/images`))
    .pipe($.plugins.size({
      showFiles: true,
      showTotal: false,
      title: 'Image size:'
    }))
  );

  $.gulp.task('images:prod', () => (
    $.gulp.src([
      `${$.dir.src}assets/images/**/*.{png,jpg,gif,svg}`,
      `!${$.dir.src}assets/images/svg/*.svg`
    ])
    .pipe($.plugins.image({
      pngquant: true,
      optipng: true,
      zopflipng: true,
      jpegRecompress: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true,
      concurrent: 10,
    }))
    .pipe($.gulp.dest(`${$.dir.build}assets/images`))
    .pipe($.plugins.size({
      showFiles: true,
      showTotal: false,
      title: 'Image size:'
    }))
  ));

  $.gulp.task('images:webp', () => (
    $.gulp.src([
      `${$.dir.build}assets/images/**/*.{png,jpg}`,
      `!${$.dir.build}assets/images/svg/*.svg`
    ])
    .pipe($.plugins.imagemin([
      imageminWebp({
        quality: 75
      })
    ]))
    .pipe($.plugins.extReplace('.webp'))
    .pipe($.gulp.dest(`${$.dir.build}assets/images`))
    .pipe($.plugins.size({
      showFiles: true,
      showTotal: false,
      title: 'Image size:'
    }))
  ));
};
