var gulp      = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug');

gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('pug', function(){
    return gulp.src('app/pug/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('app'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: { 
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync', 'sass', 'pug'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']); 
    gulp.watch('app/js/**/*.js', browserSync.reload);
    gulp.watch('app/pug/**/*.pug', browserSync.reload);
});