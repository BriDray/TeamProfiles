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
<div>
<h2>${this.name}</h2> 
<h3>${this.role}${this.id}</h3>
<a><h7>${this.email}</h7></a>
</div>       
`
    }
}

module.exports = Employee;