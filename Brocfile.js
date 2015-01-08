/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// app.import('vendor/captcha/captcha.js');
app.import('bower_components/recaptcha-ajax/recaptcha_ajax.js');

// app.import('bower_components/foundation/js/foundation.js');
// app.import('bower_components/foundation/js/foundation/foundation.magellan.js');
// app.import('bower_components/foundation/js/foundation/foundation.topbar.js');
// app.import('bower_components/foundation/js/vendor/modernizr.js');
// app.import('bower_components/foundation/js/vendor/fastclick.js');
// app.import('bower_components/foundation/js/vendor/jquery.cookie.js');
// app.import('bower_components/foundation/js/vendor/placeholder.js')

app.import('bower_components/flickerplate/js/flickerplate.js');
app.import('bower_components/flickerplate/js/jquery-v1.10.2.js');
app.import('bower_components/flickerplate/js/modernizr-custom-v2.7.1.js');
// hammer may cause issues
// app.import('bower_components/flickerplate/js/hammer-v2.0.3.js');
app.import('bower_components/flickerplate/css/flickerplate.css');

app.import('bower_components/webplate/core/js/flickerplate.js');
app.import('bower_components/webplate/core/js/min/webplate.min.js');
app.import('bower_components/webplate/core/css/webplate.css');
app.import('bower_components/webplate/project/icon-font/icomoon/style.css');
app.import('bower_components/webplate/project/ui/stripe/style.css');
app.import('bower_components/webplate/project/ui/stripe/script.js');
app.import('bower_components/webplate/stack.js');


// app.import('bower_components/webplate/core/js/jquery.js');
// app.import('bower_components/webplate/core/js/modernizr.js');
// app.import('bower_components/webplate/core/js/hammer.js');


// app.import('bower_components/hammerjs/hammer.js');
// app.import('bower_components/jquery-hammerjs/jquery.hammer.js');

// app.import('bower_components/fullpage.js/jquery.fullPage.js');
// fullpage css incompatible with fullbackground page scrolling functionality
// app.import('bower_components/fullpage.js/jquery.fullPage.css');

// app.import('bower_components/sticky-kit/jquery.sticky-kit.js');

module.exports = app.toTree()