import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$('.flickerplate').flickerplate({
        auto_flick: false,
        flick_animation: 'transform-slide',
        flick_position: 3
      });
    });
  }
});
