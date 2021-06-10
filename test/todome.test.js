import Project from '../src/projectme';

describe('Project', () => {
  const project = new Project('My-Test Project');

  describe('constructor', () => {
    it('creates a new project instance', () => {
      expect(project instanceof Project).toBe(true);
      expect(project.name).toEqual('My-Test Project');
    });
    it('checks the length of project', () => {
      expect(Project.getAll().lenght).not.toBe(0);
    });
    test('all objects returned back are instances of Project', () => {
      expect(
        Project.getAll().every((project) => project instanceof Project),
      ).toBe(true);
    });
  });
});