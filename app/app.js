import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import RestAdapter from 'todo-app/services/rest-adapter';

Ember.MODEL_FACTORY_INJECTIONS = true;

window.ENV = window.ENV || {};
window.ENV['simple-auth'] = {
   authorizer: 'simple-auth-authorizer:oauth2-bearer',
   crossOriginWhitelist: ['http://192.168.1.17:80']
};

var App = Ember.Application.extend({
  modulePrefix: 'todo-app', // TODO: loaded via config
  Resolver: Resolver,
  ApplicationAdapter: RestAdapter
});

loadInitializers(App, 'todo-app');

var inflector = Ember.Inflector.inflector;

inflector.uncountable('task');

export default App;
