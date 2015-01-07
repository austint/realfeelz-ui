import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$('#slideme-test').slideme ({
        arrows: true,
        // pagination: "numbers",
        // // nativeTouchScroll: true
        resizable: {
          width: 320,
          height: 250
        },
        autoslide: true
      });
    });
  }
});
