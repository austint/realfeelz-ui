import DS from 'ember-data';
import ENV from '../config/environment'

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: ENV.host
  ////
  // host: 'https://realfeelz-server.herokuapp.com'
});
