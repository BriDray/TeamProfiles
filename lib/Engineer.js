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
<div>
<h2>${this.name}</h2> 
<h3>${this.role}${this.id}</h3>
<h6>${this.github}</h6>
<a><h7>${this.email}</h7></a>
</div>       
`
    }
}

module.exports = Engineer;