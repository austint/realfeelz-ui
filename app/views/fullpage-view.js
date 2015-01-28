import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$('#fullpage').fullpage({
        // verticalCentered: true,
        anchors: ['home', 'truths'],
        navigation: true,
        navigationPosition: 'right',
        css3: false
        // responsive: 900
      });
    });
  }
});
