const skills = [
    { id: 1, skill: 'JavaScript', done: true },
    { id: 2, skill: 'HTML', done: true },
    { id: 3, skill: 'CSS', done: true },
    { id: 4, skill: 'React', done: false },
    { id: 5, skill: 'Node.js', done: false },
    { id: 6, skill: 'Python', done: false },
    { id: 7, skill: 'Java', done: false },
    { id: 8, skill: 'C#', done: false },
    { id: 9, skill: 'Ruby', done: false },
    { id: 10, skill: 'SQL', done: false },
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
	
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);

  }