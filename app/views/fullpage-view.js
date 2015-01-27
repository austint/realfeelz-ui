import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$('#fullpage').fullpage({
        verticalCentered: true,
        anchors: ['home', 'truths'],
        navigation: true,
        navigationPosition: 'center',
        // navigationTooltips: ['home', 'truths'],
        // responsive: 900,
        //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
        css3: true
      });
    });
  }
});
