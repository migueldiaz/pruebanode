

module.exports = exports =function (callback){

	var libxml = require('libxmljs');
	var fs = require('fs');

	console.log("Inside people-----------------");
	fs.readFile('./personmodel.xml', function (err, data) {
  		if (err) throw err;

  		var xmlDoc = libxml.parseXml(data);
  		//var allxml = xmlDoc.root();  //store all nodes as allxml
  		//console.log(allxml.toString());
  		
  		var target= xmlDoc.get('//people').find('//id')
  		var size=xmlDoc.find('//person').length;
		console.log(size);
			//----------------

		
		//---------
		 var table="<p>eiii</p>";
		console.log(this.table);
		

		for (var i = 0; i < size; i++) {
    		console.log("Person==============="+i);
    		console.log(target[i].parent().toString());
		}

		callback(this.table);

	
		

 	});
}//End peopleIndex

//module.exports.peopleIndex = peopleIndex;
//exports.peopleIndex =peopleIndex;