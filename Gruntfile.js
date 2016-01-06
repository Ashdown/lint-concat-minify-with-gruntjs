/* global module, require */

module.exports = function(grunt) {
    //URI paths for our tasks to use
    grunt.uri = './';
    grunt.uriStatic = grunt.uri + 'static/';
    grunt.uriDist = grunt.uriStatic + 'dist/';
    grunt.uriSrc = grunt.uriStatic + 'src/';
    grunt.uriTask = grunt.uri + 'script/grunt/';

    //Our task object where we'll store our configuration.

    var tasks = {};
    tasks.concat = {};

    //Lint tasks
    tasks = require(grunt.uriTask + 'css-lint.js')(grunt, tasks);
    tasks = require(grunt.uriTask + 'html-lint.js')(grunt, tasks);
    tasks = require(grunt.uriTask + 'js-lint.js')(grunt, tasks);

    //Concatenation tasks
    tasks = require(grunt.uriTask + 'css-concat.js')(grunt, tasks);
    tasks = require(grunt.uriTask + 'js-concat.js')(grunt, tasks);

    //Minify tasks
    tasks = require(grunt.uriTask + 'css-minify.js')(grunt, tasks);
    tasks = require(grunt.uriTask + 'html-minify.js')(grunt, tasks);
    tasks = require(grunt.uriTask + 'js-minify.js')(grunt, tasks);

    //watch task
    tasks = require(grunt.uriTask + 'watch.js')(grunt, tasks);

    //Register the tasks
    grunt.registerTask('lint', ['csslint', 'jshint', 'htmllint']);
    grunt.registerTask('minify', ['cssmin', 'htmlmin', 'uglify']);
    grunt.registerTask('default', ['lint', 'concat', 'minify']);

    //initialise the Grunt configuration

    grunt.initConfig(tasks);
}