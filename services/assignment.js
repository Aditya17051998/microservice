const assignmentModel = require('../models/assignment');

module.exports = function () {
    const seneca = this;
    seneca.add({ role: 'assignment', cmd: 'addMultiple' }, assignmentModel.addMultiple);
    seneca.add({ role: 'assignment', cmd: 'find' }, assignmentModel.find);
    seneca.add({ role: 'assignment', cmd: 'findOne' }, assignmentModel.findOne);
    seneca.add({ role: 'assignment', cmd: 'update' }, assignmentModel.update);
    seneca.add({ role: 'assignment', cmd: 'remove' }, assignmentModel.remove);
    seneca.add({ role: 'assignment', cmd: 'join' }, assignmentModel.join);
    seneca.add({ role: 'assignment', cmd: 'del' }, assignmentModel.del);
};