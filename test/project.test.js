import Project from '../src/js/models/project';

describe('Project', () => {
  const project = new Project('Test Project');

  describe('constructor', () => {
    it('creates a new project instance', () => {
      expect(project instanceof Project).toBe(true);
      expect(project.name).toEqual('Test Project');
    });
    it('checks the length of project', () => {
      expect(Project.getAll().lenght).not.toBe(0);
    });
    test('all returned objects are instances of Project', () => {
      expect(
        Project.getAll().every((project) => project instanceof Project),
      ).toBe(true);
    });
  });
});
