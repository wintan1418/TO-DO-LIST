import Project from '../src/js/models/project';
import Todo from '../src/js/models/todo';

describe('todo', () => {
  const todo = new Todo('Test todo');

  describe('constructor', () => {
    it('creates an instance of a new name', () => {
      expect(todo instanceof Todo).toBe(true);
    });
    it('creates an instance of a new description', () => {
      const description = new Todo('she dada');
      expect(description instanceof Todo).toBe(true);
    });
    it('creates an instance of a new todo', () => {
      const todo = new Todo('she dada');
      expect(todo instanceof Todo).toBe(true);
    });
    it('creates an instance of a new priority', () => {
      const priority = new Todo('she dada');
      expect(priority instanceof Todo).toBe(true);
    });
    it('creates an instance of a new date', () => {
      const date = new Date();
      expect(date instanceof Date).toBe(true);
    });
  });

  describe('getAll', () => {
    test('all  objects returned are todo instances', () => {
      expect(Todo.getAll().every((todo) => todo instanceof Todo)).toBe(true);
    });
  });
});

describe('delete', () => {
  const todo = 'I am going to the cinema';
  const todoDelete = Project.getAll().lenght;
  it('deletes task from localStorage', () => {
    todo.delete;
    const todoCheck = Project.getAll().lenght;
    todoDelete !== todoCheck;
  });
});

describe('update', () => {
  let update = 'I am going to the gym';
  const updateSave = update.id;
  it('update task from localStorage', () => {
    update = 'I am going to the gym and to the cinema';
    updateSave === update;
  });
});
