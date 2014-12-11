var CaptchaUtil = {
  pubKey: '6LeKIP8SAAAAAIHjJyjZwlN1SAV8mNm2fMUkFn7i',
  url: 'https://www.google.com/recaptcha/api/verify'
};

CaptchaUtil.show = function() {
  return new Ember.RSVP.Promise(function(resolve, reject) {
    Recaptcha.create(CaptchaUtil.pubKey, 'recaptcha', {
      theme: 'clean',
      callback: function() {
        Recaptcha.focus_response_field();
        resolve();
      }
    });
  });
};

CaptchaUtil.verify = function() {
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

CaptchaUtil.destroy = function() {
  Recaptcha.destroy();
};

export default CaptchaUtil;
