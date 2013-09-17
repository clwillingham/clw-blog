/**
 * Post
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {
      title: 'string',
      body: 'string',
      author_id: 'string',
      author: function(){
          var obj = this.toObject();
          User.findOne(obj.author_id);
      }
  }

};
