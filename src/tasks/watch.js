/**
 * watch task
 * Created by tphuocthai on 3/19/16.
 */

module.exports = function(grunt) {
  grunt.config.set('watch', {
    server: {
      files: ['api/*.js', 'config/*.js'],
      options: {
        livereload: true,
        debounceDelay: 500
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
};
