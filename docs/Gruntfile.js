/* ========================================================================
 * Sir Mobile Emulator Docs: Grunfile
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
      root: 'app',
      dist: 'dist',
    },

    clean: {
      tmp: {
        files: [{
          dot: true,
          src: ['.tmp']
        }]
      },
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= app.dist %>/*',
            '!<%= app.dist %>/dist',
            '!<%= app.dist %>/.git*'
          ]
        }]
      }
    },

    wiredep: {
      all:{
        src: ['<%= app.root %>/*.html']
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

    svgmin: {
      all:{
        files: [{
          expand: true,
          cwd: '<%= app.root %>',
          src: 'images/**/*.svg',
          dest: '<%= app.dist %>'
        }]
      }
    },

    useminPrepare: {
      html: '<%= app.root %>/*.html',
      options: {
        dest: '<%= app.dist %>'
      }
    },

    concat: {
    },
    
    copy: {
      all:{
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= app.root %>',
          dest: '<%= app.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            '*.zip',
            '*.xml',
            'data/**/*',
            'views/**/*.html',
            'images/**/*.{webp}',
            'fonts/*'
          ]
        }, {
          expand: true,
          cwd: 'bower_components/bootstrap/dist',
          dest: '<%= app.dist %>',
          src: 'fonts/*'
        },

        // Para Sir Mobile Emulator
        {
          expand: true,
          dot: true,
          cwd: '<%= app.root %>',
          dest: '<%= app.dist %>',
          src: [
            'samples/*',
          ]
        }]
      }
    },

    cssmin: {},
    uglify: {},

    filerev: {
      all: {
        src: [
          '<%= app.dist %>/scripts/**/*.js',
          '<%= app.dist %>/styles/**/*.css',
          '<%= app.dist %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= app.dist %>/fonts/*'
        ]
      }
    },

    usemin: {
      html: ['<%= app.dist %>/*.html', '<%= app.dist %>/views/**/*.html'],
      css: ['<%= app.dist %>/styles/**/*.css'],
      options: {
        assetsDirs: ['<%= app.dist %>', '<%= app.dist %>/images']
      }
    },

    htmlmin: {
      all: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeComments: false,  // QUITAR PARA VERSION WEB
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          src: ['<%= app.dist %>/*.html', '<%= app.dist %>/views/**/*.html']
        }]
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('build', [
    'clean:tmp',
    'clean:dist',
    // 'wiredep:all',
    'imagemin:all',
    'svgmin:all',
    'useminPrepare',
    'concat:generated',
    'copy',
    'cssmin:generated',
    'uglify:generated',
    'clean:tmp',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

};