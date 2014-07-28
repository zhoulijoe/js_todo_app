import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TodoAppENV.locationType
});

Router.map(function() {
  this.route('login');
  this.resource('tasks', { path: 'tasks' }, function () {
     this.route('active');
     this.route('completed');
  });
});

export default Router;
