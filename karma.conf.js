//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'components/**/*.js',
      'view*/**/*.js'
    ],
    preprocessors: {
	  '{view1,view2,components}/**/*.js' : ['coverage']
    },
    autoWatch: true,

    frameworks: ['jasmine'],
    reporters: ['progress','junit','coverage'],
    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-coverage'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    
    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'html', subdir: 'report-html'},
        { type: 'cobertura', subdir: '.', file: 'cobertura.xml' }
      ]
    }

  });
};
