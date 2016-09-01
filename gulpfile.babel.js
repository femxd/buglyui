import path from 'path';
import pkg from './package.json';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import buildConfig from './webpack.build';
import docsConfig from './webpack.docs';

const prod = process.env.NODE_ENV === 'development';
const $ = loadPlugins();
const paths = {
  src: {
    docs: {
      js: 'docs/app.js',
      i: 'docs/assets/i/*',
      less: 'docs/docs.less'
    },
    build: 'src/index.js'
  },
  dist: {
    docs: prod ? './www/react' : './www',
    build: './dist',
    lib: './lib'
  }
};

const buildDate = $.util.date(Date.now(), 'isoDateTime');
const banner = [
  '/*! <%= pkg.title %> v<%= pkg.version %>',
  'by Amaze UI Team',
  '(c) ' + $.util.date(Date.now(), 'UTC:yyyy') + ' AllMobilize, Inc.',
  'Licensed under <%= pkg.license %>',
  buildDate + ' */\n'
].join(' | ');

gulp.task('build:pack', () => {
  return gulp.src(paths.src.build)
    .pipe(webpackStream(buildConfig))
    .pipe($.replace('__VERSION__', pkg.version))
    .pipe($.header(banner, { pkg: pkg }))
    .pipe(gulp.dest(paths.dist.build))
    .pipe($.uglify())
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.header(banner, { pkg: pkg }))
    .pipe(gulp.dest(paths.dist.build))
    .pipe($.size({ showFiles: true, title: 'minified' }))
    .pipe($.size({ showFiles: true, gzip: true, title: 'gzipped' }));
});

gulp.task('build:docs', () => {
  return gulp.src('docs/app.js')
    .pipe(webpackStream(docsConfig))
    .pipe($.replace('__VERSION__', pkg.version, { skipBinary: true }))
    .pipe(gulp.dest(paths.dist.docs))
    .pipe($.size({
      showFiles: true,
      title: 'Docs bundle'
    }))
    .pipe($.size({
      showFiles: true,
      gzip: true,
      title: 'Docs bundle gzipped'
    }));
});

gulp.task('build:jsx', () => {
  return gulp.src(['src/**/*.js', '!src/__tests__/*.js'])
    .pipe($.if((file) => {
      return file.path.indexOf('AMUIReact.js') > -1;
    }, $.replace('__VERSION__', pkg.version)))
    .pipe($.babel())
    .pipe(gulp.dest(paths.dist.lib));
});


var config = {
  path: {
    less: [
      './less/amazeui.less',
      './less/themes/flat/amazeui.flat.less'
    ],
    fonts: './fonts/*',
  },
  dist: {
    css: './dist/css',
    fonts: './dist/fonts'
  },
  AUTOPREFIXER_BROWSERS: [
    'ie >= 8',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 2.3',
    'bb >= 10'
  ],
}


// Build to dist dir.
gulp.task('build:less', function () {
  console.log("start build less file")
  gulp.src(config.path.less)
    .pipe($.header(banner, { pkg: pkg, ver: '' }))
    .pipe($.plumber({
      errorHandler: function (err) {
        // 处理编译less错误提示  防止错误之后gulp任务直接中断
        // $.notify.onError({
        //           title:    "编译错误",
        //           message:  "错误信息: <%= error.message %>",
        //           sound:    "Bottle"
        //       })(err);
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe($.less({
      paths: [
        path.join(__dirname, 'less'),
        path.join(__dirname, 'widget/*/src')]
    }))
    .pipe($.rename(function (path) {
      if (path.basename === 'amui') {
        path.basename = pkg.name + '.basic';
      }
    }))
    .pipe($.autoprefixer({ browsers: config.AUTOPREFIXER_BROWSERS }))
    .pipe($.replace('//dn-amui.qbox.me/font-awesome/4.6.3/', '../'))
    .pipe(gulp.dest(config.dist.css))
    .pipe($.size({ showFiles: true, title: 'source' }))
    // Disable advanced optimizations - selector & property merging, etc.
    // for Issue #19 https://github.com/allmobilize/amazeui/issues/19
    .pipe($.minifyCss({ noAdvanced: true }))
    .pipe($.rename({
      suffix: '.min',
      extname: '.css'
    }))
    .pipe(gulp.dest(config.dist.css))
    .pipe($.size({ showFiles: true, title: 'minified' }))
    .pipe($.size({ showFiles: true, gzip: true, title: 'gzipped' }));
});

gulp.task('build:fonts', function () {
  gulp.src(config.path.fonts)
    .pipe(gulp.dest(config.dist.fonts));
});

gulp.task('clean', () => {
  return del([
    paths.dist.lib,
    paths.dist.build,
    paths.dist.docs,
  ]);
});

gulp.task('build', (cb) => {
  runSequence(
    'clean',
    ['build:pack', 'build:docs', 'build:fonts', 'build:less', 'build:jsx',],
    cb);
});

// upload docs assets to Qiniu
gulp.task('publish:cdn', () => {
  gulp.src(['www/**/*', '!www/**/*.html'])
    .pipe($.qndn.upload({
      prefix: 'assets/react',
      qn: {
        accessKey: process.env.qnAK,
        secretKey: process.env.qnSK,
        bucket: process.env.qnBucketUIS,
        domain: process.env.qnDomainUIS
      }
    }));
});

gulp.task('publish:npm', (done) => {
  require('child_process')
    .spawn('npm', ['publish'], { stdio: 'inherit' })
    .on('close', done);
});

gulp.task('publish:tag', (done) => {
  var v = 'v' + pkg.version;
  var message = 'Release ' + v;

  $.git.tag(v, message, (err) => {
    if (err) {
      throw err;
    }

    $.git.push('origin', 'master', (error) => {
      if (error) {
        throw error;
      }
      done();
    });
  });
});

// TODO: complete publish tasks.
gulp.task('publish', (cb) => {
  runSequence(
    'build',
    [
      // to be
    ], cb
  );
});

gulp.task('dev', () => {
  const bundler = webpack(docsConfig);
  const bs = browserSync.create();

  bs.init({
    logPrefix: 'AMR',
    ui: {
    port: 3008
   },
    server: {
      baseDir: ['www', 'dist'],
      middleware: [
        // @see https://github.com/BrowserSync/browser-sync/issues/204
        /*function(req, res, next) {
          var match = req.url.match(/\/[css|fonts|i].+\..+|\/app\.js|\/app\.min\.js/g);
          req.url = match ? match[0] : '/index.html';

          return next();
        },*/
        webpackDevMiddleware(bundler, {
          // IMPORTANT: dev middleware can't access config, so we should
          // provide publicPath by ourselves
          publicPath: docsConfig.output.publicPath,

          // pretty colored output
          stats: 'normal'

          // for other settings see
          // http://webpack.github.io/docs/webpack-dev-middleware.html
        }),

        // bundler should be the same as above
        webpackHotMiddleware(bundler)
      ]
    },
  });
});

gulp.task('default', ['dev']);
