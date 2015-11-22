/**
 * Created by vivek on 22/11/15.
 */
var Sails = require('sails'), sails;
var should = require('should');


/**
 * Global Before Hook
 */
before(function(done) {
  Sails.lift({
      log: {
        level: 'error'
      },
    // Lifting Sails with test database
      models: {
        connection: 'test',
        migrate: 'drop'
      }
  }, function(err, server){
    sails = server;
    if(err)
      return done(err);

    done(err, sails);
  })
});

/**
 * Global After Hook
 */
after(function(done){
  console.log();
  Sails.lower(done);
});
