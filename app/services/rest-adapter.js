import DS from 'ember-data';

export default DS.RESTAdapter.extend({
   host: 'http://10.20.1.2',
   namespace: 'todo'
});