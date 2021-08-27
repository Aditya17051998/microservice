const userModel = require('../models/user');

module.exports = function () {
  const seneca = this;
  seneca.add({ role: 'user', cmd: 'find' }, userModel.find);
  seneca.add({ role: 'user', cmd: 'findOne' }, userModel.findOne);
  seneca.add({ role: 'user', cmd: 'findAll' }, userModel.findAll);
  seneca.add({ role: 'user', cmd: 'updateOne' }, userModel.updateOne);
  seneca.add({ role: 'user', cmd: 'addMultiple' }, userModel.addMultiple);

};
