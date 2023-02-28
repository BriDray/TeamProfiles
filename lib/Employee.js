class Employee {

    constructor({name, id, email}) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role
    }
    createCard (){
        return` 

<div class="profileCard">
<h3>${this.name}</h3>
<h4>${this.role}${this.id}</h4>
<h6>E-MAIL:<a>${this.email}</a></h6>
</div>      
`
    }
}

module.exports = Employee;