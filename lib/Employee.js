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
//     createCard (){
//         return` 

// <div class="profileCard">
// <h3>${this.name}</h3>
// <h4>Role:${this.role}ID:${this.id}</h4>
// <h6>E-MAIL:${this.email}</h6>
// </div>      
// `
//     }
}

module.exports = Employee;