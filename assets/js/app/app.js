/**
 * Created with JetBrains WebStorm.
 * User: chris
 * Date: 9/17/13
 * Time: 3:52 PM
 * To change this template use File | Settings | File Templates.
 */

App = Ember.Application.create();

App.store = DS.Store.create({
    revision: 4,
    adapter: 'DS.FixtureAdapter'
});

App.Router.map(function(){
    this.resource('home', {path: '/'});
    this.resource('page', {path: '/page/:page_id'})
});

