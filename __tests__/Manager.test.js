const Manager = require('../lib/Manager');

describe('Manager', () => {
    const exampleManager = {
        name: "Bri",
        id: 1,
        officeNumber: "121",
        email: "stanggurl02@gmail.com",
    };
    describe("constructor tests", () => {
        test("should create new employee class", () => {
            const manager = new Manager(exampleManager);
            expect(manager).toBeInstanceOf(Manager);
        });
        test("should create new employee class with name, id, email", () => {
            const manager = new Manager(exampleManager);
            expect(manager).toEqual({
                name: "Bri",
                id: 1,
                officeNumber: "121",
                email: "stanggurl02@gmail.com",
            });
        });
    });
    describe("method tests", () => {
        test("id should be returned when getId method is called", () => {
            const manager = new Manager(exampleManager);
            expect(manager.getId()).toEqual(1);
        });
        test("name should be returned when getName method is called", () => {
            const manager = new Manager(exampleManager);
            expect(manager.getName()).toEqual("Bri");
        });
        test("officeNumber should be returned when getId method is called", () => {
            const manager = new Manager(exampleManager);
            expect(manager.officeNumber()).toEqual("121");
        });
        test("email should be returned when getId method is called", () => {
            const manager = new Manager(exampleManager);
            expect(manager.getEmail()).toEqual("stanggurl02@gmail.com");
        });
    });
});
