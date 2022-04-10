const Engineer = require("../lib/EngineerC");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return a name an id ann email and a github username", () => {
      const obj = new Engineer("name", "id", "email", "github");

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("github" in obj).toEqual(true);
    });

    it("should return github", () => {
      const obj = new Engineer("name", "id", "email", "github");

      expect(obj.getGithub()).toEqual("github");
    });

    it("should return string Engineer", () => {
      const obj = new Engineer("name", "id", "email", "github");

      expect(obj.getRole()).toEqual("Engineer");
    });
  });
});
