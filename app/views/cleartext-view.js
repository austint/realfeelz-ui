import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$('#clearButton').click(function() {
        Ember.$('#textbox').val('');
      });
      // Ember.$(function() {
      //   // Wire up your event (in this case we will handle this for all text inputs)
      //   Ember.$("button[type='submit']").click(function() {
      //     // When this is clicked, clear its value
      //     Ember.$("textarea").val('');
      //   });
      // });

    });
  }
});
