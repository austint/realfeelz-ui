import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('willamette');
  this.route('flickerplate');
  this.route('stripe');
});

export default Router;
