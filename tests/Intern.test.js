const Intern = require("../lib/InternC");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return a name an id an email and a school", () => {
      const obj = new Intern("name", "id", "email", "school");

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("school" in obj).toEqual(true);
    });

    it("should return school", () => {
      const obj = new Intern("name", "id", "email", "school");

      expect(obj.getSchool()).toEqual("school");
    });

    it("should return string Intern", () => {
      const obj = new Intern("name", "id", "email", "school");

      expect(obj.getRole()).toEqual("Intern");
    });
  });
});
