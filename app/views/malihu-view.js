import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$(".content").mCustomScrollbar({
        theme: "minimal"
      });
    });
  }
});

// Ember.$("#section2").mCustomScrollbar({
