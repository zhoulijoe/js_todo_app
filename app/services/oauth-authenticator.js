import Ember from 'ember';
import OAuth2 from 'simple-auth-oauth2/authenticators/oauth2';

var OAuthAuthenticator = OAuth2.extend({
   makeRequest: function(url, data) {
      var authHash = btoa('todo-client' + ':' + 'secret');
      Ember.Logger.warn('authHash: ' + authHash);

      data['scope'] = 'read';
      return Ember.$.ajax({
         url:         url,
         type:        'POST',
         data:        data,
         dataType:    'json',
         contentType: 'application/x-www-form-urlencoded',
         headers: {
            Authorization: 'Basic ' + authHash
         }
      });
   }
});

export default OAuthAuthenticator;