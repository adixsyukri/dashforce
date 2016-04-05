module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      main: {
        src: ['Angular/Main/*.js','Angular/Route/*.js'],
        dest: 'dist/main.js'
      },
      js: {
        src: ['Angular/Controller/**/*.js','Angular/Data/*.js','Angular/Directive/*.js','Angular/Service/*.js'],
        dest: 'dist/scripts.js'
      }
    },
    watch: {
      files: ['Angular/Controller/**/*.js','Angular/Data/*.js','Angular/Directive/*.js','Angular/Service/*.js'],
      tasks: ['concat']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat', 'watch']);

}
