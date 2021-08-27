const courseModel = require('../models/course');

module.exports = function () {
    const seneca = this;
    seneca.add({ role: 'course', cmd: 'addMultiple' }, courseModel.addMultiple);
    seneca.add({ role: 'course', cmd: 'find' }, courseModel.find);
    seneca.add({ role: 'course', cmd: 'findOne' }, courseModel.findOne);
    seneca.add({ role: 'course', cmd: 'update' }, courseModel.update);
    seneca.add({ role: 'course', cmd: 'remove' }, courseModel.remove);
    seneca.add({ role: 'course', cmd: 'join' }, courseModel.join);
    seneca.add({ role: 'course', cmd: 'del' }, courseModel.del);
};