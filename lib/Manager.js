const Employee = require('./Employee');

class Manager extends Employee {
    constructor({name, id, email, officeNumber}) {

        super({name, id, email});

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

<div class="profileCard">
<h3>${this.name}</h3>
<h4>Role:${this.role}</h4>
<h4>ID:${this.id}</h4>
<h5>Office Number:${this.officeNumber}</h5>
<h6>E-MAIL:<a href="mailto:${this.email}">${this.email}</a></h6>
</div>
`
    }
}

module.exports = Manager;