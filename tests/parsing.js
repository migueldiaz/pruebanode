var fs = require('fs');
var xmldoc = require('xmldoc');


fs.readFile('./personmodel.xml', function (err, data) {
  if (err) throw err;
  //console.log(data);
  var xml = (data.toString())
  console.log(xml);
  var document = new xmldoc.XmlDocument(data);
  console.log("Here---"+document.children);
   fs.writeFile('config.xml', data.toString(), function (err) {
            if(err) {throw err;}
        });




});
