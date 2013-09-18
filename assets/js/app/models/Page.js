/**
 * Created with JetBrains WebStorm.
 * User: chris
 * Date: 9/17/13
 * Time: 7:32 PM
 * To change this template use File | Settings | File Templates.
 */

App.Page = DS.Model.extend({
    title: DS.attr()
});

App.Page.FIXTURES = [
    {id: 1, title: 'test'}
];