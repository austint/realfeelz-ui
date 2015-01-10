import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$('.flickerplate').flickerplate({
        auto_flick: true,
        flick_animation: 'transform-slide',
        dot_navigation: false
      });
    });
  }
});


// data-dot-navigation="false" data-block-text="false" data-auto-flick-delay="6"
//