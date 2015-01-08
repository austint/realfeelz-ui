import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      (function($, Hammer, dataAttr) {
        function hammerify(el, options) {
          var $el = Ember.$(el);
          if (!$el.data(dataAttr)) {
            $el.data(dataAttr, new Hammer($el[0], options));
          }
        }

        Ember.$.fn.hammer = function(options) {
          return this.each(function() {
            hammerify(this, options);
          });
        };
      });
    });
  }
});
