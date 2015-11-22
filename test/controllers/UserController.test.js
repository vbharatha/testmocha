/**
 * Created by vivek on 22/11/15.
 */
var request  = require('supertest');

describe('UserController', function(){
  it('should get all users', function(done){
      request(sails.hooks.http.app)
        .get('/users')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res){
          if(err) return done(err);
          res.body.users.should.be.an.instanceOf(Array);
          res.body.users.length.should.be.eql(0);
          done();
        })
    });
});
