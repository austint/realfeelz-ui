import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
        Ember.$('#fullpage').fullpage({
          // anchors: ['firstPage', 'second'],
          // sectionsColor: ['#4A6FB1'],
          autoScrolling: false,
          css3: true,
          responsive: 900
        });
      });
  }
});
