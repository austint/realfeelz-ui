// import DS from 'ember-data';
// import ENV from '../config/environment';

// export default DS.RESTAdapter.extend({
//   namespace: 'api',
//   host: ENV.host
// });

import DS from "ember-data";

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'https://realfeelz-server.herokuapp.com'
});
