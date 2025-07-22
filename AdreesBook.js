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
    isContact(name) {
        let found = false;
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].fname == name) {
                console.log("founde the name ")
                found = true;
                return i;
                // break;
            }
        }
        if (!found) {
            console.log("coundt find the name ")
            return -1;
        };

    }
    editConact(name, property, change) {
        const contactIndex = this.isContact(name);
        if (contactIndex !== -1) {
            this.contacts[contactIndex][property] = change;
            console.log(this.contacts[contactIndex].toString());
        }


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

let changename = prompt("what name to find : ")



let property = prompt(" which property do you want to change fname, lname, addres, city, state, zipcode, phoneNumber, email : ");
let changeitem = prompt(`what is the value of ${property} : `);
addressbook.editConact(changename, property, changeitem);
