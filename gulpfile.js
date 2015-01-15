// Adapted from https://github.com/shakyShane/jekyll-gulp-sass-browser-sync

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');

// Optimize
var minifyCSS   = require('gulp-minify-css');
var rename      = require('gulp-rename');
var uglify      = require('gulp-uglify');
var imagemin    = require('gulp-imagemin');
var pngquant    = require('imagemin-pngquant');

// Test
var csslint     = require('gulp-csslint');
var jshint      = require('gulp-jshint');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for sass, jekyll-build, coffee then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build', 'coffee'], function() {
    browserSync({
        host: '0.0.0.0',    // For Cloud9 IDE Previews. Remove for localhost
        port: '8080',       // For Cloud9 IDE Previews. Remove for browserSync default
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Wait for jekyll-build to process liquid markup in JS, then coffee
 */
gulp.task('coffee', ['jekyll-build'], function() {
  return gulp.src('_site/coffee/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest('js'))
    .pipe(gulp.dest('_site/js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('_site/js'))
});

/**
 * Compile files from _sass into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('_sass/main.scss')
        .pipe(sass({
            includePaths: ['scss'],
            style: 'expanded',              // Human readable CSS
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/css'))
        .pipe(gulp.dest('css'))
        // Create using https://github.com/CSSLint/csslint/wiki/Rules-by-ID
        // Get defaults from https://github.com/twbs/bootstrap/blob/master/less/.csslintrc
        .pipe(csslint('.csslintrc'))
        .pipe(csslint.reporter())
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});

gulp.task('images', function () {
    return gulp.src(['_images/*', '_images/*/*'])
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant({ quality: '65-80', speed: 4 })]
        }))
        .pipe(gulp.dest('img'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('coffee/*.js', ['jekyll-build', 'coffee']);
    gulp.watch('_sass/*.scss', ['sass']);
    gulp.watch(['index.html', '_layouts/*.html', '_includes/*.html', '_posts/*', '_posts/*/*', '_data/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
gulp.task('img', ['images']);