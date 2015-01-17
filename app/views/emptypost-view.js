import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      Ember.$('#form-id').submit(function() {
        Ember.$('textarea[name,value=""]').attr('name', '');
      });
    });
  }
});
