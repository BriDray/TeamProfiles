const Employee = require('../lib/Employee');

describe('Employee', () => {
    const exampleEmployee = {
        name: "Bri",
        id: 1,
        email: "stanggurl02@gmail.com",
    };
    describe("constructor tests", () => {
        test("should create new employee class", () => {
            const employee = new Employee(exampleEmployee);
            expect(employee).toBeInstanceOf(Employee);
        });
        test("should create new employee class with name, id, email", () => {
            const employee = new Employee(exampleEmployee);
            expect(employee).toEqual({
                name: "Bri",
                id: 1,
                email: "stanggurl02@gmail.com",
            });
        });
    });
    describe("method tests", () => {
        test("id should be returned when getId method is called", () => {
            const employee = new Employee(exampleEmployee);
            expect(employee.getId()).toEqual(1);
        });
        test("name should be returned when getName method is called", () => {
            const employee = new Employee(exampleEmployee);
            expect(employee.getName()).toEqual("Bri");
        });
        test("id should be returned when getId method is called", () => {
            const employee = new Employee(exampleEmployee);
            expect(employee.getEmail()).toEqual("stanggurl02@gmail.com");
        });
    });
});
