var libxmljs = require("libxmljs");
var fs = require('fs');




fs.readFile('./personmodel.xml', function (err, data) {
  if (err) throw err;
  //console.log(data);
  var xml = (data.toString())
  console.log(xml);
  var xmlDoc = libxmljs.parseXmlString([xml]);
 
  console.log("EOF READING ------------------------------");
  
	var people= new libxmljs.Element(xmlDoc, "people")

  console.log(people.text());
  

  //console.log(xmlDoc.root().people[1]);

  var children = xmlDoc.root().childNodes()[0];
  console.log(children);
  var child = xmlDoc.child(0);
  console.log("Children displayed ------------------------------");
 
 //child.node('person').node('fname').text('Roberto') 
 xmlDoc.root().childNodes()[1].get("fname").text('Roberto');
  console.log("Child------------------->>>>>"+child);


//--------------------------------------
	var count=xmlDoc.root().childNodes().length;
	console.log("**************"+ count);

//--------Este si cuenta la gente que hay

	var number=xmlDoc.find('*').length; 
console.log("**************"+ number);
console.log("Child???----"+children[0]);
//----------------------------------------
   fs.writeFile('config2.xml', xmlDoc.toString(), function (err) {
            if(err) {throw err;}
        });




});
