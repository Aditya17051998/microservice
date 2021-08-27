const userProfileModel = require('../models/userProfile');

module.exports = function () {
  const seneca = this;
  seneca.add({ role: 'userProfile', cmd: 'addMultiple' }, userProfileModel.addMultiple);
  seneca.add({ role: 'userProfile', cmd: 'find' }, userProfileModel.find);
  seneca.add({ role: 'userProfile', cmd: 'findAll' }, userProfileModel.findAll);
  seneca.add({ role: 'userProfile', cmd: 'findOne' }, userProfileModel.findOne);
  seneca.add({ role: 'userProfile', cmd: 'update' }, userProfileModel.update);
  seneca.add({ role: 'userProfile', cmd: 'join' }, userProfileModel.join);
  seneca.add({ role: 'userProfile', cmd: 'remove' }, userProfileModel.remove);
};
