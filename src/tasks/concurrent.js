/**
 * grunt concurrent task
 */

module.exports = function(grunt) {
  grunt.config.set('concurrent', {
    options: {
      logConcurrentOutput: true
    },
    dev: ['nodemon', 'watch'],
    debug: ['nodemon', 'watch', 'node-inspector']
  });

  grunt.loadNpmTasks('grunt-concurrent');
};
