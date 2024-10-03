const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagemin = require("gulp-imagemin");

function converteLib(){
    return gulp.src("./lib/*")
        .pipe(gulp.dest("./build/lib"));
}

function comprimeImagens(){
    return gulp.src("./source/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./build/images"))
}

function comprimeJs(){
    return gulp.src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("./build/scripts"));

}

function compilaSass(){
    return gulp.src("./source/styles/config/*.scss")
        .pipe(gulp.src("./source/styles/*.scss"))
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest("./build/styles"))
}

exports.default = function(){
    gulp.watch("./source/styles/*.scss",{ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch("./source/scripts/*.js",{ignoreInitial: false}, gulp.series(comprimeJs));
    gulp.watch("./source/images/*",{ignoreInitial: false}, gulp.series(comprimeImagens));
    gulp.watch("./lib/*",{ignoreInitial: false}, gulp.series(converteLib));
}
