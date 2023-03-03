const Employee = require('./Employee');

class Engineer extends Employee {
    constructor({name, id, email, github}) {

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
<h4>Role:${this.role}</h4>
<h4>ID:${this.id}</h4>
<h5>GITHUB:<a target="_blank" href="https://github.com/${this.github}">${this.github}</a></h5>
<h6>E-MAIL:<a href="mailto:${this.email}">${this.email}</a></h6>
</div>      
`
    }
}

module.exports = Engineer;