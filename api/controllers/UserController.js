/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getUsers: function(req, res, next){
      User.find()
        .then(function(users){
          return [users];
        })
        .spread(function(users){
          return res.json({users: users});
        }).
        fail(function(err){
          res.serverError({error: err});
        });
  }
};

