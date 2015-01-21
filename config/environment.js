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
      'script-src': "'self' 'unsafe-eval'", // http://www.google.com/recaptcha/
      'font-src': "'self' http://fonts.gstatic.com https://fonts.gstatic.com/s/cabin/v7/82B-3YlzWJm8zbCrVEmc_nYhjbSpvc47ee6xR_80Hnw.woff2 https://fonts.gstatic.com/s/cabin/v7/4VMQLG5UaE3m5rr_emmAqaCWcynf_cDxXwCLxiixG1c.woff2", // Allow fonts to be loaded from http://fonts.gstatic.com
      'connect-src': "'self' https://realfeelz-server.herokuapp.com/api/statements",
      'img-src': "'self'", // http://www.google.com/recaptcha/
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com http://fonts.googleapis.com/css?family=Cabin:400,500,700|Raleway:400,700,500|Open+Sans:400,700", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.host = 'http://localhost:3000';
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
