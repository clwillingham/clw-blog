/**
 * Created with JetBrains WebStorm.
 * User: chris
 * Date: 9/17/13
 * Time: 7:41 PM
 * To change this template use File | Settings | File Templates.
 */

App.PageRoute = Ember.ArrayController.extend({
    model: function(){
        return [
            {
                title: 'First Test',
                body: 'This is a blog post test'
            }
        ]
    }
});