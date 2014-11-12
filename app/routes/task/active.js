import Ember from 'ember';

export default Ember.Route.extend({
   model: function() {
      return this.store.filter('task', function(task) {
         return !task.get('complete');
      });
   },

   renderTemplate: function(controller) {
      this.render('task/index', {controller: controller});
   }
});
