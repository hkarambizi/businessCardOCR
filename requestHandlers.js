var getContactInfo = (req, res) => {
  var document = req.query.doc;
  console.log('doc: ', document);
  var splitDoc = document.toLowerCase().split(/\r?\n/);
  var phone = undefined;
  var name = undefined;
  var nameChars = '';
  var nameReg = ''
  var phoneReg = /(\d*)(.*\d+)(.*\d+){3}(.*\d+){4}/;
  var emailReg = /(\w+)@(\w+).(\w+)/g
  var email = document.match(emailReg)[0] || undefined;

  if (email) {
    nameChars = email.toLowerCase().split('@')[0].replace(/\W/g, '');
    nameChars.split('').forEach((char, i) => {
      nameReg += '(' + char + ').*';
    });
    nameReg = new RegExp(nameReg);
  }

  splitDoc.forEach((line, i) => {
    if (line.match(phoneReg)!== null && !line.includes('f')){
      phone = line.match(phoneReg)[0].replace(/\D/g,'');
    }
    if (line.match(nameReg) !== null && !line.includes('@')) {
      name = line.match(nameReg)[0];
      name = name.replace(/\b\w/g,(char) => {return char.toUpperCase();}).trim();
    }
  });

  res.send({Name: name, Phone: phone, Email: email});
};

var getName = (req, res) => {
  var document = req.query.doc;
  var contactInfo = getContactInfo({req: {query: {doc: document}}});
  res.send(contactInfo.Name);
};

var getPhoneNumber = (req, res) => {
  var document = req.query.doc;
  var contactInfo = getContactInfo({req: {query: {doc: document}}});
  res.send(contactInfo.Phone);
};

var getEmailAddress = (req, res) => {
  var document = req.query.doc;
  var contactInfo = getContactInfo({req: {query: {doc: document}}});
  res.send(contactInfo.Email);
};

module.exports = {
  getContactInfo: getContactInfo,
  getName: getName,
  getPhoneNumber: getPhoneNumber,
  getEmailAddress: getEmailAddress
}

