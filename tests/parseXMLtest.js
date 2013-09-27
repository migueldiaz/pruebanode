
var p = require('./person.js');

var fs = require('fs'),xml2js = require('xml2js');




var parser = new xml2js.Parser();
fs.readFile(__dirname + '/personmodel.xml', function(err, data) {
 
    parser.parseString(data, function (err, result) {
        console.dir(result.root.person[0].id[0]);
        console.dir(result.root.person[1].id[0]);


        // build XMLList
		var personlist = result.root['person'];  
		console.log("Tengo: "+eval(personlist));
		// alternative syntax
		// var petList = petsXML.pet;  
		console.log("Name:"+result.root.person[0].fname[0]);
		result.root.person[0].fname[0]=="Pepe";
		console.log("Name:"+result.root.person[0].fname[0]);
		// how many pet nodes are under a given pets node?
		//var length = personlist.length();

        //.toS());
        var txt = result;
        console.log(txt);
        var obj = eval(result);
       //() var argo=new p.Person(obj)
       // console.log("Argo: "+argo);
       //console.log(obj.person.fname); 
        //console.log('Done');
    });
});