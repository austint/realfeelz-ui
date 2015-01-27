import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$(".content").mCustomScrollbar({
        theme: "minimal",
        scrollInertia: 700,
        autoDraggerLength: false
      });
    });
  }
});
