const Manager = require("../lib/ManagerC");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return a name an id an email and an office number", () => {
      const obj = new Manager("name", "id", "email", "officeNumber");

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("officeNumber" in obj).toEqual(true);
    });

    it("should return officeNumber", () => {
      const obj = new Manager("name", "id", "email", "officeNumber");

      expect(obj.getOfficeNumber()).toEqual("officeNumber");
    });

    it("should return string Manager", () => {
      const obj = new Manager("name", "id", "email", "officeNumber");

      expect(obj.getRole()).toEqual("Manager");
    });
  });
});
