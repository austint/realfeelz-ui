import Ember from 'ember';

var Captcha = {
  pubKey: '6Ld0jv0SAAAAAFU12E2rtRlu76Pe1uCRR0msmVsX',
  url: 'https://www.google.com/recaptcha/api/verify'
};

Captcha.show = function() {
  return new Ember.RSVP.Promise(function(resolve, reject) {
    Recaptcha.create(Captcha.pubKey, 'recaptcha', {
      theme: 'clean',
      callback: function() {
        Recaptcha.focus_response_field();
        resolve();
      }
    });
  });
};

Captcha.verify = function() {
  return new Ember.RSVP.Promise(function(resolve, reject) {
    var data = {
      challenge: Recaptcha.get_challenge(),
      response: Recaptcha.get_response()
    };

    Ember.$.ajax('/api/captcha/verify', {
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data)
    })
    .then(function(response) {
      resolve(response.result);
    }, reject);
  });
};

Captcha.destroy = function() {
  Recaptcha.destroy();
};

export default Captcha;