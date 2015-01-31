/* jshint expr:true */
import Ember from 'ember';
import FilterableMixin from 'realfeelz-ui/mixins/filterable';

describe('FilterableMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    var FilterableObject = Ember.Object.extend(FilterableMixin);
    var subject = FilterableObject.create();
    expect(subject).to.be.ok;
  });
});
