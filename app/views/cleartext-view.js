import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$('#clearButton').click(function() {
        // Ember.$('#textbox')[0].reset();
        Ember.$('#textbox').val('');
      });
    });
  }
});

// $(".reset").bind("click", function() {
//   $("input[type=text], textarea").val("");
// });
// $(".reset").click(function() {
//     $(this).closest('form').find("input[type=text], textarea").val("");
// });
