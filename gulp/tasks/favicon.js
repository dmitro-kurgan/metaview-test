const FAVICON_DATA_FILE = 'faviconData.json';

module.exports = function () {
  $.gulp.task('favicon', function (done) {
    $.plugins.realFavicon.generateFavicon({
      masterPicture: `${$.dir.src}assets/images/logo-icon.png`,
      dest: `${$.dir.build}`,
      iconsPath: './',
      design: {
        ios: {
          pictureAspect: 'backgroundAndMargin',
          backgroundColor: '#ffffff',
          margin: '14%',
          assets: {
            ios6AndPriorIcons: false,
            ios7AndLaterIcons: false,
            precomposedIcons: false,
            declareOnlyDefaultIcon: true
          }
        },
        desktopBrowser: {},
        windows: {
          pictureAspect: 'noChange',
          backgroundColor: '#ffffff',
          onConflict: 'override',
          assets: {
            windows80Ie10Tile: false,
            windows10Ie11EdgeTiles: {
              small: false,
              medium: true,
              big: false,
              rectangle: false
            }
          }
        },
        androidChrome: {
          pictureAspect: 'noChange',
          themeColor: '#ffffff',
          manifest: {
            display: 'standalone',
            orientation: 'notSet',
            onConflict: 'override',
            declared: true
          },
          assets: {
            legacyIcon: false,
            lowResolutionIcons: false
          }
        },
        safariPinnedTab: {
          pictureAspect: 'silhouette',
          themeColor: '#3cc3f0'
        }
      },
      settings: {
        scalingAlgorithm: 'Mitchell',
        errorOnImageTooSmall: false,
        readmeFile: false,
        htmlCodeFile: false,
        usePathAsIs: false
      },
      markupFile: FAVICON_DATA_FILE
    }, function () {
      done();
    });
  });

  $.gulp.task('check-for-favicon-update', function (done) {
    const currentVersion = JSON.parse($.fs.readFileSync(FAVICON_DATA_FILE)).version;
    $.plugins.realFavicon.checkForUpdates(currentVersion, function (err) {
      if (err) {
        throw err;
      }
    });
  });
};
