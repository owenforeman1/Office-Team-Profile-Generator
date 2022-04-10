const Employee = require("../lib/EmployeeC");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return a name an id and an email", () => {
      const obj = new Employee("name", "id", "email");

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
    });

    it("should return name", () => {
      const obj = new Employee("name", "id", "email");

      expect(obj.getName()).toEqual("name");
    });

    it("should return id", () => {
      const obj = new Employee("name", "id", "email");

      expect(obj.getId()).toEqual("id");
    });

    it("should return email", () => {
      const obj = new Employee("name", "id", "email");

      expect(obj.getEmail()).toEqual("email");
    });
    it("should return string employee", () => {
      const obj = new Employee("name", "id", "email");

      expect(obj.getRole()).toEqual("Employee");
    });
  });
});
