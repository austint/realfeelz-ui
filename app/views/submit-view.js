import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      // Ember.$("textarea").submit(function(event) {
      //   if (Ember.$("input:first").val() !== "") {
      //     Ember.$("span").text("Validated...").show();
      //     return;
      //   }

      //   Ember.$("span").text("Not valid!").show().fadeOut(1000);
      //   event.preventDefault();
      // });
    });
  }
});
