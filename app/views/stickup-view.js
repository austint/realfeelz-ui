import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$(window).load(function() {
        Ember.$('#sticky_item').stickUp();
      });
    });
  }
});
