module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'realfeelz-ui',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'report-uri': "http://localhost:4200",
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' http://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js",
      'font-src': "'self' http://fonts.gstatic.com https://fonts.gstatic.com",
        'connect-src': "'self' https://realfeelz-server.herokuapp.com/api/statements http://realfeelz-server.herokuapp.com/api/statements https://realfeelz-server.herokuapp.com http://realfeelz-server.herokuapp.com",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com http://fonts.googleapis.com",
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
