/* ========================================================================
 * Sir Mobile Emulator: Grunfile
 * http://sirideas.github.io/sir.mobile.emulator/
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
      dist: 'dist/<%= pkg.version %>',
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: ['<%= app.dist %>']
        }]
      },
      scripts: {
        files: [{
          dot: true,
          src: ['<%= app.dist %>/scripts']
        }]
      },
      styles: {
        files: [{
          dot: true,
          src: ['<%= app.dist %>/styles']
        }]
      },
      images: {
        files: [{
          dot: true,
          src: ['<%= app.dist %>/images']
        }]
      },
      fonts: {
        files: [{
          dot: true,
          src: ['<%= app.dist %>/fonts']
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
          archive: 'dist/<%= pkg.name %>-<%= pkg.version %>.dist-<%= grunt.template.today("yyyymmdd") %>.zip',
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
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build:images', [
    'clean:images',
    'imagemin',
  ]);

  grunt.registerTask('build:code', [
    'clean:styles',
    'clean:scripts',
    'cssmin',
    'uglify',
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'build:images',
    'build:code',
    'copy',
    'compress'
  ]);

};