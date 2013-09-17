/**
 * Created with JetBrains WebStorm.
 * User: chris
 * Date: 9/17/13
 * Time: 3:52 PM
 * To change this template use File | Settings | File Templates.
 */

App = Ember.Application.create();

App.Router.map(function(){
   this.resource('home', {path: '/'})
});