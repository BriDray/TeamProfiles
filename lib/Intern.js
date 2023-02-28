const Employee = require('./Employee');

class Intern extends Employee {
    constructor({name, id, email, school}) {

        super({name, id, email})

        this.school = school;

        this.role = "Intern";
    }

    getSchool () {
        return this.school;
    }

    getRole() {
        return this.role;
    }
    createCard (){
        return` 
<div>
<h2>${this.name}</h2> 
<h3>${this.role}${this.id}</h3>
<h6>${this.school}</h6>
<a><h7>${this.email}</h7></a>
</div>       
`
    }
}

module.exports = Intern;