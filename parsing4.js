var libxml = require('libxmljs');
var fs = require('fs');

fs.readFile('./personmodel.xml', function (err, data) {
  if (err) throw err;

  var xmlDoc = libxml.parseXml(data);
  //console.log(xmlDoc.toString());
  var allxml = xmlDoc.root();  //store all nodes as allxml
  console.log(allxml.toString());
  //var allNodes = xmlDoc.childNodes(); //all child nodes to array
  //console.log("--222222---"+allNodes.toString());
  var elem = xmlDoc.root();
 // var newChild = libxml.Element(xmlDoc, 'person');
  
 //console.log(allNodes.count);

  
  //var target = xmlDoc.find("xmlns:people/person", "ns:people/person");
  var target= xmlDoc.get('//people').find('//id')  //Permite length
  //var target2= xmlDoc.get('//people').find('//id').text("1");
  console.log("CABRONES:"+xmlDoc.find('//person').length);  // Watch out Here I know how many of them for searching
  // console.log(target2.toString());
  //var da= target.nextElement();
  //console.log("Da:"+da.toString());
  console.log("TARGET-----------------------");
  console.log(target.toString());
  


  //Borrado
  console.log(target[0].text().toString());
  //delete.remove()

  //index
  if(target[0].text()==='1'){
    console.log("Gotcha!!!");
    //target[0].parent().remove();

  }

  //show
var size=xmlDoc.find('//person').length;
console.log(size);
for (var i = 0; i < size; i++) {
    console.log("Person==============="+i);
    console.log(target[i].parent().toString());
};


  //Editando valores

  var values=target[0].parent().get('//fname').text('XXX');
  console.log(values);

//*****************************************************
  newPerson('1','Mano','XXX','21/5','44','ES');

 function  newPerson(I,F,L,D,W,L) {
      var person = xmlDoc.root().node('person');  // Yhis way I'll delete allxml var
      //var person = allxml.node('person');
      var id=person.node('id',I);
      var fname=person.node('fname',F);    
      var lname=person.node('lname',L);
      var DOB=person.node('DOB',D);
      var wage=person.node('wage',W);
      var location=person.node('location',L);
      
      //console.log('Data:'+'\n'+person.toString()+'\n');
    }
    console.log("=======================================");
    console.log(xmlDoc.toString());

    beautify= libxml.parseXml(xmlDoc);
   fs.writeFile('config2.xml', beautify.toString(), function (err) {
            if(err) {throw err;}
        });

});