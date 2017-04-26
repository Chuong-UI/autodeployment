const glob = require('glob');
const _ = require('lodash');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {}
  });

  let tasks = glob.sync('./tasks/*.js');
  _.forEach(tasks, function(task) {
    require(task)(grunt);
  });

  grunt.registerTask('default', ['concurrent:dev']);
  grunt.registerTask('debug', ['concurrent:debug']);
};
