import OAuthAuthenticator from 'todo-app/services/oauth-authenticator';

export default {
   name: 'simple-auth-config',
   before: 'simple-auth',
   initialize: function(container) {
      container.register('authenticator:custom-oauth', OAuthAuthenticator);
      window.ENV = window.ENV || {};
      window.ENV['simple-auth-oauth2'] = {
         serverTokenEndpoint: "http://10.20.1.2/todo/oauth/token",
         refreshAccessTokens: true
      };
   }
};