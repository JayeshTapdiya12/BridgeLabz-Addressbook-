const prompt = require('prompt-sync')();


console.log("Welcome to Address Book Program in AddressBookMain");




class Contact {



    constructor(fname, lname, address, city, state, zipcode, phoneNumber, email) {

        this.fname = fname;
        this.lname = lname;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.phoneNumber = phoneNumber;
        this.email = email;

    }
    toString() {
        return `${this.fname} ${this.lname}, ${this.address}, ${this.city}, ${this.state}, ${this.zipcode}, ${this.phoneNumber}, ${this.email}`;
    }


}



class AddressBook {

    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
        console.log(contact.toString());
    }

}

const addressbook = new AddressBook();



let fname = prompt("enter the fname : ");
let lname = prompt("enter the lname : ");
let addres = prompt("enter the address : ");
let city = prompt("enter the city : ");
let state = prompt("enter the state : ");
let zipcode = prompt("enter the zipcode : ");
let phoneNumber = prompt("enter the phoneNumber : ");
let email = prompt("enter the email : ");


let contact = new Contact(fname, lname, addres, city, state, zipcode, phoneNumber, email)


addressbook.addContact(contact);