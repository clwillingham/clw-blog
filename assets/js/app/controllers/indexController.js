/**
 * Created with JetBrains WebStorm.
 * User: chris
 * Date: 9/17/13
 * Time: 3:55 PM
 * To change this template use File | Settings | File Templates.
 */

App.ApplicationController = Ember.ArrayController.extend({
    title: "Chris's Programs and Projects",
    description: ""

});

App.ApplicationRoute = Ember.Route.extend({
    model: function(){
        return [
            {id: 'home', title: 'Home'},
            {id: 'blog', title: 'Blog'},
            {id: 'contact', title: 'Contact'}
        ];
    }
});