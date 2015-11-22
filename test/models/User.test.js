/**
 * Created by vivek on 22/11/15.
 */

describe('User', function(){
  it('should be empty', function(done){
    User.find().then(function(users) {
      users.length.should.be.eql(0);

      done();
    }).catch(done);
  });
  it('name is vivek', function(done){
      User.create({name:'vivek'})
        .then(function(user){
            user.name.should.be.equal('vivek');

          done();
        })
        .catch(done);
  });
  it('count is one', function(done){
    User.find().then(function(users) {
      users.length.should.be.eql(1);

      done();
    }).catch(done);
  });
});
