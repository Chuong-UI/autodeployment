/**
 * OrganizationMembership model
 */

const Sequelize = require('sequelize');

module.exports = (function(sequelize) {
  let OrganizationMembership = sequelize.define('organizationMembership', {
    userId: {
      type: Sequelize.INTEGER
    },
    organizationId: {
      type: Sequelize.STRING
    }
  }, {
    classMethods: {
      associate: function() {
        User.hasMany(Credential, {onDelete: 'CASCADE', onUpdate: 'CASCADE', hooks: true});
      }
    }
  });

  return OrganizationMembership;
})(server.config.sequelize);
