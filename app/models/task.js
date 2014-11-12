import DS from 'ember-data';

var Task = DS.Model.extend({
   description: DS.attr('string'),
   complete: DS.attr('boolean')
});

export default Task;