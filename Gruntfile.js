/* ========================================================================
 * Sir Mobile Emulator: Grunfile
 * http://sirideas.github.com/sir.mobile.emulator/
 * ========================================================================
 * Copyright 2014-2015 Sir Ideas, C. A.
 * Licensed under MIT (https://github.com/sirdieas/sir.mobile.emulator/LICENSE)
 * ========================================================================
 */

module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    app: {
      root: 'src',
      dist: 'dist',
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
          archive: 'versions/<%= pkg.name %>-<%= pkg.version %>.dist-<%= grunt.template.today("yyyymmdd") %>.zip',
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
            'LICENCE'
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
    'copy',
    'compress'
  ]);

};