const path = require('path');
const wsdl = require('fs').readFileSync(path.join(__dirname, '../soap/icd14.wsdl'), 'utf-8');

module.exports = wsdl;
