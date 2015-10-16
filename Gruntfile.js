/* 
A Gruntfile.js that can be used in a grunt configuration. Everytime the sass file scss/style.scss is saved,
the corresponding css/style.css gets created/updated, and then autoprefixer parses it in order to add the correct vendor prefixes.
*/

module.exports = function(grunt) {

  grunt.initConfig({

    watch: {
      css: {
        files: '_site/css/*.css',
        tasks: ['autoprefixer']
      }
    },

    autoprefixer: {
      dist: {
        files: {
          '_site/css/main.css': '_site/css/main.css'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};