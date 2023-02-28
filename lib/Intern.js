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
<h4>${this.role}${this.id}</h4>
<h5>${this.school}</h5>
<h6>E-MAIL:<a>${this.email}</a></h6>
</div>      
`
    }
}

module.exports = Intern;