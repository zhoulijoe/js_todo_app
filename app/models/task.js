import DS from 'ember-data';

var Task = DS.Model.extend({
   description: DS.attr('string'),
   complete: DS.attr('boolean')
});

Task.reopenClass({
   FIXTURES: [
      {
         id: 1,
         description: 'Learn Ember.js',
         complete: true
      },
      {
         id: 2,
         description: 'Profit!',
         complete: false
      }
   ]
});

export default Task;