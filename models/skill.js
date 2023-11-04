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
    getOne
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