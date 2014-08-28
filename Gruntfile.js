/* ========================================================================
 * Sir Mobile Emulator: Grunfile
 * http://sirideas.github.io/sir.mobile.emulator/
 * ========================================================================
 * Copyright 2014-2015 Sir Ideas, C. A.
 * Licensed under MIT (https://github.com/SirIdeas/sir.mobile.emulator/blob/master/LICENSE)
 * ========================================================================
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    app: {
      root: 'src',
      distRoot: 'docs/dist/dist',
      dist: '<%= app.distRoot %>/<%= pkg.version %>'
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: ['<%= app.dist %>']
        }]
      }
    },

    imagemin: {
      all:{
        files: [{
          expand: true,
          cwd: '<%= app.root %>',
          src: 'images/**/*.{png,jpg,jpeg,gif}',
          dest: '<%= app.dist %>'
        }]
      }
    },

    cssmin: {
      all:{
        files: {
          '<%= app.dist %>/styles/sme.min.css': ['<%= app.root %>/styles/**/*.css']
        }
      }
    },

    uglify: {
      all:{
        files: {
          '<%= app.dist %>/scripts/sme.min.js': ['<%= app.root %>/scripts/**/*.js']
        }
      }
    },

    compress: {
      all:{
        options: {
          archive: '<%= app.distRoot %>/<%= pkg.name %>-<%= pkg.version %>.dist.zip',
          mode: 'zip'
        },
        expand: true,
        cwd: '<%= app.dist %>',
        src: ['**/*']
      }
    },

    copy: {
      all:{
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= app.root %>',
          dest: '<%= app.dist %>',
          src: [
            'fonts/*'
          ]
        },
        {
          expand: true,
          dot: true,
          dest: '<%= app.dist %>',
          src: [
            'LICENSE'
          ]
        }]
      },
      dist:{
        files:[{
          expand: true,
          dot: true,
          dest: 'docs/dist',
          src: [
            'LICENSE'
          ]
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', [
    'clean:dist',
    'imagemin',
    'cssmin',
    'uglify',
    'copy:all',
    'compress',
    'copy:dist'
  ]);

};