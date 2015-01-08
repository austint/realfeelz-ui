import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
      Ember.$(document).ready(function() {
        Ember.$('.realfeelz-flickerplate').flickerplate({
        arrows: true,
        arrows_constraint: false,
        auto_flick: true,
        auto_flick_delay: 5,
        block_text: true,
        flick_animation: 'transform-slide',
        flick_position: 1,
        theme: 'light',
        data_dot_navigation: false
      });
    });
  }
});
