const {src, dest, watch, parallel, series} = require('gulp');
const twig = require('gulp-twig');

function compile() {
    return src('./index.twig')
        .pipe(twig())
        .pipe(dest('./'));
}

exports.default = compile;