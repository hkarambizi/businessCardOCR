module.exports = (doc) => {
  var splitDoc = doc.toLowerCase().split(/\r?\n/);
  var phone = undefined;
  var name = undefined;
  var nameChars = '';
  var nameReg = '';
  var phoneReg = /(\d*)(.*\d+)(.*\d+){3}(.*\d+){4}/g;
  var emailReg = /(\w+)@(\w+).(\w+)/g;
  var email = doc.match(emailReg)[0] || undefined;

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

  return {
    Name: name,
    Phone: phone,
    Email: email
  };
};