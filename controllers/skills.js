module.exports = {
	index,
	show,
	delete: deleteOne,
	create,
	new: newSkill
};

const Skill = require('../models/skill');

function index(req, res) {
	const allSkills = Skill.getAll();
	res.render('skills/index', {
		allSkills
	});
}

function show(req, res) {
	const skillId = req.params.id;
	const skill = Skill.getOne(req.params.id);
	res.render('skills/show', {
		skill,
		skillId
	});
}

function deleteOne(req, res) {
	const skillId = req.params.id;
	Skill.deleteOne(skillId);
	res.redirect('/skills');
}

function newSkill(req, res) {
	res.render('skills/new')
}

function  create(req, res) {
	const skill = req.body;
	skill.level = 1;
	Skill.create(skill);
	res.redirect('/skills')
}
