const Intern = require('./lib/Intern');

describe('Intern', () => {
    const exampleEngineer = {
        name: "Bri",
        id: 1,
        email: "stanggurl02@gmail.com",
        school: "UC Davis",
    };
    describe("constructor tests", () => {
        test("should create new employee class", () => {
            const intern = new Intern(exampleIntern);
            expect(intern).toBeInstanceOf(Intern);
        });
        test("should create new employee class with name, id, email", () => {
            const intern = new Intern(exampleIntern);
            expect(intern).toEqual({
                name: "Bri",
                id: 1,
                email: "stanggurl02@gmail.com",
                school: "UC Davis",
            });
        });
    });
    describe("method tests", () => {
        test("id should be returned when getId method is called", () => {
            const intern = new Intern(exampleIntern);
            expect(intern.getId()).toEqual(1);
        });
        test("name should be returned when getName method is called", () => {
            const intern = new Intern(exampleIntern);
            expect(intern.getName()).toEqual("Bri");
        });
        test("id should be returned when getId method is called", () => {
            const intern = new Intern(exampleIntern);
            expect(intern.getEmail()).toEqual("stanggurl02@gmail.com");
        });
        test("school should be returned when getId method is called", () => {
            const intern = new Intern(exampleIntern);
            expect(intern.school()).toEqual("UC Davis");
        });
    });
});
