import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$('#fullpage').fullpage({
        verticalCentered: true,
        anchors: ['firstPage', 'secondPage'],
        // sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['First page', 'Second page'],
        // responsive: 900,
        //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
        css3: true
      });
    });
  }
});
