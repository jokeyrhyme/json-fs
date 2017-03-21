/*jslint es5:true, indent:2, maxlen:80, node:true*/
'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({

    jsdoc: {
      src: [
        'lib/*.js'
      ],
      options: {
        destination: 'doc/jsdoc',
        configure: 'jsdoc.json'
      }
    },

    mochacli: {
      options: {
        require: ['chai'],
        ui: 'tdd'
      },
      all: ['test/*.js']
    },

    mochacov: {
      html: {
        options: {
          reporter: 'html-cov',
          output: 'coverage.html'
        }
      },
      coveralls: {
        options: {
          coveralls: {
            serviceName: 'travis-ci'
          }
        }
      },
      options: {
        require: ['chai'],
        ui: 'tdd'
      },
      all: ['test/*.js']
    },

    watch: {
      docs: {
        files: [
          '<%= jsdoc.src %>',
        ],
        tasks: ['doc'],
        options: {
          interrupt: true
        }
      },
      scripts: {
        files: [
          '<%= jslint.all.src %>'
        ],
        tasks: ['test'],
        options: {
          interrupt: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-mocha-cov');

  grunt.registerTask('doc', 'jsdoc');
  grunt.registerTask('travis', ['mochacli', 'mochacov:coveralls']);
  grunt.registerTask('test', ['mochacli', 'mochacov:html']);

  // Default task.
  grunt.registerTask('default', ['test']);

};
