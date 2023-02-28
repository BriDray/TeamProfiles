const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email);

        this.officeNumber = officeNumber;

        this.role = "Manager";
    }

    getRole() {
        return this.role;
    }

    getOfficeNumber () {
        return this.officeNumber;
    }
    createCard (){
        return` 
<div>
<h2>${this.name}</h2> 
<h3>${this.role}${this.id}</h3>
<h6>${this.officeNumber}</h6>
<a><h7>${this.email}</h7></a>
</div>       
`
    }
}

module.exports = Manager;