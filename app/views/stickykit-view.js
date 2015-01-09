import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$("#sticky_item").stick_in_parent({
        // recalc_every: 1
        // offset_top: '-15px'
        // bottoming: false
      });
      Ember.$("#unstick").trigger("sticky_kit:detach");
    });
  }
});
      // Ember.$("p").css('color', 'red');
