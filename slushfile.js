var gulp = require('gulp');
var gutil = require('gulp-util');
var install = require('gulp-install');
var conflict = require('gulp-conflict');
var template = require('gulp-template');
var rename = require('gulp-rename');
var inquirer = require('inquirer');
var _ = require('underscore.string');

gulp.task('default', function(done) {
    inquirer.prompt([
            {
                type: 'input',
                name: 'widgetName',
                message: 'What do you want to name your widget?'
            },
            {
                type: 'input',
                name: 'version',
                message: 'Widget version?',
                default: '1.0.0'
            },
            {
                type: 'input',
                name: 'authorName',
                message: 'Author name?'
            },
            {
                type: 'input',
                name: 'authorEmail',
                message: 'Author email?'
            },
            {
                type: 'input',
                name: "description",
                message: "Widget description?",
                default: '模块描述'
            }
        ],
        function(answers) {

            answers.createDate = gutil.date(new Date(), 'yyyy.mm.dd');
            var widgetName = answers.widgetName.toLowerCase();
            answers.nameCapitalized = _.capitalize(widgetName);
            var files = [__dirname + '/templates/**'];
            return gulp.src(files)
                .pipe(template(answers))
                .pipe(rename(function(file) {
                    //file.dirname = './widget/' + widgetName + '/' + file.dirname;
                    if (file.extname === '.json' || file.extname === '.md') {
                        // keep file name
                    } else if (file.basename === 'theme.default') {
                        file.basename = 'theme.default'.replace('theme', widgetName);
                    } else if (file.extname.length) {
                        file.basename = widgetName;
                    }
                }))
                .pipe(conflict('./widget/' + widgetName))
                .pipe(gulp.dest('./widget/' + widgetName))
                //.pipe(install())
                .on('end', function() {
                    done();
                });
        });
});