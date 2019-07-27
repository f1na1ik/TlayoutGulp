var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename');

 gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        //перенос строки. compressed - все в одну строку (для min.js)
        //expanded - дефолтный перенос (как все пишут обычный код)
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))

        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

 gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function () {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('js',function () {
    return gulp.src(['node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .pipe(browserSync.reload({stream: true}))
}) ;
 
//плагин для наблюдения. Если изменяется какой-то файл sass/scss, то
//автоматом срабатывает команда sass
gulp.task('watch', function () {
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('html'));
    gulp.watch('app/js/*.js', gulp.parallel('script'))
});
//-------------------------------------------------------------------

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});

//что будем выполнять при написании gulp
gulp.task('default', gulp.parallel('sass','js','browser-sync', 'watch'));
