'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
   // uri: 'mongodb://localhost/bbcworkspace-dev'
     uri: 'mongodb://bbc:bbc@ds129733.mlab.com:29733/memberslist'
  },
  sequelize: {
    uri: 'sqlite://',
    options: {
      logging: false,
      storage: 'dev.sqlite',
      define: {
        timestamps: false
      }
    }
  },

  seedDB: true
};
