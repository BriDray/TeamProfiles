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

<div class="profileCard">
<h3>${this.name}</h3>
<h4>Role:${this.role}ID:${this.id}</h4>
<h5>Attending:${this.school}</h5>
<h6>E-MAIL:${this.email}</h6>
</div>      
`
    }
}

module.exports = Intern;