const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    const exampleEngineer = {
        name: "Bri",
        id: 1,
        email: "stanggurl02@gmail.com",
        github: "BriDray",
    };
    describe("constructor tests", () => {
        test("should create new employee class", () => {
            const engineer = new Engineer(exampleEngineer);
            expect(engineer).toBeInstanceOf(Engineer);
        });
        test("should create new employee class with name, id, email", () => {
            const engineer = new Engineer(exampleEngineer);
            expect(engineer).toEqual({
                name: "Bri",
                id: 1,
                email: "stanggurl02@gmail.com",
                github: "BriDray",
                role: "Engineer"
            });
        });
    });
    describe("method tests", () => {
        test("id should be returned when getId method is called", () => {
            const engineer = new Engineer(exampleEngineer);
            expect(engineer.getId()).toEqual(1);
        });
        test("name should be returned when getName method is called", () => {
            const engineer = new Engineer(exampleEngineer);
            expect(engineer.getName()).toEqual("Bri");
        });
        test("email should be returned when getId method is called", () => {
            const engineer = new Engineer(exampleEngineer);
            expect(engineer.getEmail()).toEqual("stanggurl02@gmail.com");
        });
        test("github should be returned when getId method is called", () => {
            const engineer = new Engineer(exampleEngineer);
            expect(engineer.getGithub()).toEqual("BriDray");
        });
    });
});
