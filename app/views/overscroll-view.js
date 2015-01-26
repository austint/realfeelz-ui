import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$('.parallax-content').on('touchmove', function(e) {
        if (!Ember.$('.grid-content').has(Ember.$(e.target)).length) e.preventDefault();
      });
    });
  }
});
