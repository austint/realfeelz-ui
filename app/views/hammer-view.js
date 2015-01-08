import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$(element).hammer(options).bind("pan", myPanHandler);
    });
  }
});
