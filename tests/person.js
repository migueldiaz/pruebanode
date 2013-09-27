// Here we define the Object Person and methods for CRUD
//Constructor
function Person(data){
	person=data.person;
	this.id=person.id;
	this.fname=person.fname;
	this.lname=person.lname;
	this.DOB=person.DOB;
	this.wage=person.wage;
	this.location=person.location;
	return this;

};

Person.prototype.toS =function(){
  console.log(this);
};

exports.Person=Person;
