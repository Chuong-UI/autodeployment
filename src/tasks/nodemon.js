/**
 * Created by tphuocthai on 3/19/16.
 */

module.exports = function(grunt) {
  grunt.config.set('nodemon', {
    dev: {
      script: 'app.js',
      options: {
        nodeArgs: ['--debug'],
        ignore: ['node_modules/**'],
        ext: 'js,html,pug',
        watch: ['api/**/*.js', 'config/*.js', 'server.js', 'app.js']
      }
    }
  });
  grunt.loadNpmTasks('grunt-nodemon');
};
