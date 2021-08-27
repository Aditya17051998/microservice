const lectureModel = require('../models/lecture');

module.exports = function () {
    const seneca = this;
    seneca.add({ role: 'lecture', cmd: 'addMultiple' }, lectureModel.addMultiple);
    seneca.add({ role: 'lecture', cmd: 'find' }, lectureModel.find);
    seneca.add({ role: 'lecture', cmd: 'findOne' }, lectureModel.findOne);
    seneca.add({ role: 'lecture', cmd: 'update' }, lectureModel.update);
    seneca.add({ role: 'lecture', cmd: 'remove' }, lectureModel.remove);
    seneca.add({ role: 'lecture', cmd: 'join' }, lectureModel.join);
    seneca.add({ role: 'lecture', cmd: 'del' }, lectureModel.del);
};