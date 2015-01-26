import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$("#content-1").mCustomScrollbar({
        theme: "minimal"
      });
    });
  }
});
