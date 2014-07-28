import Ember from 'ember';

export default Ember.ObjectController.extend({
   isCompleted: function(key, value){
      var model = this.get('model');

      if (value === undefined) {
         // property being used as a getter
         return model.get('complete');
      } else {
         // property being used as a setter
         model.set('complete', value);
         model.save();
         return value;
      }
   }.property('model.complete'),

   isEditing: false,

   actions: {
      editTodo: function() {
         this.set('isEditing', true);
      },
      acceptChanges: function() {
         this.set('isEditing', false);

         if (Ember.isEmpty(this.get('model.description'))) {
            this.send('removeTodo');
         } else {
            this.get('model').save();
         }
      },
      removeTodo: function () {
         var todo = this.get('model');
         todo.deleteRecord();
         todo.save();
      }
   }
});