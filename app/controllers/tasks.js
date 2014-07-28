import Ember from 'ember';

export default Ember.ArrayController.extend({
   actions: {
      createTodo: function() {
         // Get the todo title set by the "New Todo" text field
         var title = this.get('newTitle');
         if (!title) { return false; }
         if (!title.trim()) { return; }

         // Create the new Todo model
         var todo = this.store.createRecord('task', {
            description: title,
            complete: false
         });

         // Clear the "New Todo" text field
         this.set('newTitle', '');

         // Save the new model
         todo.save();
      },

      clearCompleted: function() {
         var completed = this.filterBy('complete', true);
         completed.invoke('deleteRecord');
         completed.invoke('save');
      }
   },

   remaining: function() {
      return this.filterBy('complete', false).get('length');
   }.property('@each.complete'),

   inflection: function() {
      var remaining = this.get('remaining');
      return remaining === 1 ? 'todo' : 'todos';
   }.property('remaining'),

   hasCompleted: function() {
      return this.get('completed') > 0;
   }.property('completed'),

   completed: function() {
      return this.filterBy('complete', true).get('length');
   }.property('@each.complete'),

   allAreDone: function(key, value) {
      if (value === undefined) {
         return !!this.get('length') && this.isEvery('complete', true);
      } else {
         this.setEach('complete', value);
         this.invoke('save');
         return value;
      }
   }.property('@each.complete')
});
