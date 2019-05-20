class Contact {
    constructor(name, email, phone, relation){
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.relation=relation;
    }
}

class AddressBook {
    constructor() {
        this.contact = [
            new Contact("Mikal", "info@mikalhasan.com", 313-555-2093, "hubby"), 
            new Contact( "Katrina", "mister_mrs@yahoo.com", 248-555-8558, "wifey"),
            new Contact("Einstien", "ein@thestein.me", 299-792-4580, "hero"),
            new Contact("Jenny", "jenny@neverforget.com", 313-555-5309, "friend")
        ];
    }

    add(info) {
        let newContact = new Contact(info.name, info.email, info.phone, info.relation);
        this.contact.push(newContact);
        console.log(this.contact);
    }
            //will add new "info" to the contacts--
            //"info" is the parameter and add is the function
            //`book.add(new Contact(name ...`

    deleteAt(index) {
        this.contact.splice(index, 1);
        console.log(this.contact);
    }

    print(){
        console.log(this.contact);
    }
}

let addressBook = new AddressBook();

while (true){
    let reply = prompt("Do you want to add, delete, print or quit?");
    //"if/else if" are the conditions of the "while loop" and iteration
    if (reply === "add") {
        let info = {
            name: prompt("Please enter Name?"),
            email: prompt("Please enter Phone?"),
            phone: prompt("Please enter Email?"),
            relation: prompt("Please enter Relation?"),
        };
        addressBook.add(info);
        } 
    else if (reply === "delete") {
        let index = prompt("Which index to delete?");
        for (let i=0; i < index; i++) {
            addressBook.deleteAt(index);
         }
        } 
    else if (reply === "print") {
        addressBook.print();
        }
    else if (reply === "quit"){
        console.log("Farewell");
    break;
    }   
}