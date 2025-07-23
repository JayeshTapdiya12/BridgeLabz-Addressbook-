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

        const duplicate = this.contacts.find(c =>
            c.fname.toLowerCase() === contact.fname.toLowerCase() && c.lname.toLowerCase() === contact.lname.toLowerCase()
        )

        if (duplicate) {
            console.log("the name is already existed!!!!");
        } else {
            this.contacts.push(contact);
            console.log(contact.toString());
        }
    }
    isContact(name) {
        // debugs
        let found = false;
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].fname === name) {

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
            console.log("Contact updated:");
            console.log(this.contacts.toString());
        } else {
            console.log("Invalid property name.");
        }
    }

    deleteContact(name) {
        const contactIndex = this.isContact(name);
        if (contactIndex !== -1) {
            this.contacts.splice(contactIndex, 1);
            console.log("the conatct is deleteed")
            for (let i = 0; i < this.contacts.length; i++) {
                console.log(this.contacts[i].toString());
            }
        } else {
            console.log("the contact does not exists");
        }
    }

    searchByCityOrState(property, valueOfCityOrState) {
        const match = [];
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i][property] === valueOfCityOrState) {
                console.log(`the person name which live in this ${valueOfCityOrState} is ${this.contacts[i].fname} `);
                match.push(this.contacts[i].fname);
            }
        }
        return match
    }

    sortContact(value) {
        this.contacts.sort((a, b) => {
            return a[value].localeCompare(b[value]);
        })
        this.contacts.forEach(contact => console.log(contact.toString()));

    }


}


const addressBookSystem = {};

let bookname = prompt("enter the book name : ");

if (!addressBookSystem[bookname]) {

    addressBookSystem[bookname] = new AddressBook();
    console.log(`the book ${bookname} is created `);
}


// const addressbook = new AddressBook();

const selectBook = addressBookSystem[bookname];

let fname = prompt("enter the fname : ");
let lname = prompt("enter the lname : ");
let addres = prompt("enter the address : ");
let city = prompt("enter the city : ");
let state = prompt("enter the state : ");
let zipcode = prompt("enter the zipcode : ");
let phoneNumber = prompt("enter the phoneNumber : ");
let email = prompt("enter the email : ");




selectBook.addContact(new Contact(fname, lname, addres, city, state, zipcode, phoneNumber, email));
selectBook.addContact(new Contact(fname, lname, addres, city, state, zipcode, phoneNumber, email));
selectBook.addContact(new Contact(fname, lname, addres, city, state, zipcode, phoneNumber, email));


let changename = prompt("what name to find : ")



let property = prompt(" which property do you want to change fname, lname, addres, city, state, zipcode, phoneNumber, email : ");
let changeitem = prompt(`what is the value of ${property} : `);
selectBook.editConact(changename, property, changeitem);

changename = prompt("what name to find : ")
selectBook.deleteContact(changename)


property = prompt(" by which you want to search city, state : ");

let value = prompt(`the ${property} value :`);

const personLiveInCityOrState = [];

for (const bookName in addressBookSystem) {
    let fname = addressBookSystem[bookName].searchByCityOrState(property, value);
    if (fname !== null) {
        personLiveInCityOrState.push(...fname)
    };
}
let count = 0;
for (const name of personLiveInCityOrState) {
    console.log(name);
    count++;
}

console.log(`the count of person live in ${property} in ${value} is ${count}`);


property = prompt(" by which you want to sort name , city, state or zipcode : ");


for (const bookName in addressBookSystem) {
    addressBookSystem[bookName].sortContact(property);
}




