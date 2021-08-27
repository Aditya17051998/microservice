const sectionModel = require('../models/section');

module.exports = function () {
    const seneca = this;
    seneca.add({ role: 'section', cmd: 'addMultiple' }, sectionModel.addMultiple);
    seneca.add({ role: 'section', cmd: 'find' }, sectionModel.find);
    seneca.add({ role: 'section', cmd: 'findOne' }, sectionModel.findOne);
    seneca.add({ role: 'section', cmd: 'update' }, sectionModel.update);
    seneca.add({ role: 'section', cmd: 'remove' }, sectionModel.remove);
    seneca.add({ role: 'section', cmd: 'join' }, sectionModel.join);
    seneca.add({ role: 'section', cmd: 'del' }, sectionModel.del);
};