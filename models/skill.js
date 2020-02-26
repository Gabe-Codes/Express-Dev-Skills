const skills = [
	{ title: 'JavaScript', level: 3 },
	{ title: 'Gatsby', level: 1 },
	{ title: 'Python', level: 1 },
	{ title: 'React', level: 0 },
	{ title: 'MongoDB', level: 0 }
];

module.exports = {
	getAll,
	getOne,
	deleteOne,
	create
};

function getAll() {
	return skills;
}

function getOne(id) {
	return skills[id];
}

function deleteOne(id) {
	skills.splice(id, 1)
}

function create(skill) {
	skills.push(skill);
}