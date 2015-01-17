import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$('#clearButton').click(function() {
        Ember.$('#textbox').val('');
      });
    });
  }
});
