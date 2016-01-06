/*global module*/

module.exports = function (grunt, tasks) {
    // Load our node module required for this task.
    grunt.loadNpmTasks('grunt-contrib-watch');

    // The configuration for a specific task.
    tasks.watch = {
        // The files that we want to check.
        watch: {
            files: [
                    grunt.uriSrc + '*.css',
                    grunt.uriSrc + '*.js',
                    grunt.uriSrc + '*.html'
            ],
            tasks: ['default']

        }
    };

    return tasks;
};