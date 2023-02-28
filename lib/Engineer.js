const Employee = require('./Employee');

class Engineer extends Employee {
    contstructor({name, id, email, github}) {

        super({name, id, email})

        this.github = github;

        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
    createCard (){
        return` 

<div class="profileCard">
<h3>${this.name}</h3>
<h4>Role:${this.role}ID:${this.id}</h4>
<h5>GITHUB:<a>${this.github}</a></h5>
<h6>E-MAIL:${this.email}</h6>
</div>      
`
    }
}

module.exports = Engineer;