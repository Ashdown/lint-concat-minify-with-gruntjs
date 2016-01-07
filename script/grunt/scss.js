/*global module*/

module.exports = function (grunt, tasks) {
    // Load our node module required for this task.
    grunt.loadNpmTasks('grunt-contrib-sass');

    // The configuration for a specific task.
    tasks.sass = {
        dist: {
            files: [
                {
                    expand: true,
                    src: ["./static/src/*.scss"],
                    dest: './',
                    ext: '.css'
                }
            ]
        }
    };

    return tasks;
};