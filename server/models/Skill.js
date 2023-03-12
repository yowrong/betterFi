const mongoose = require('mongoose');


// Create Schema
const SkillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    tutorials: [Object],
    questions: [String]
});


// Create Model
const Skill = mongoose.model('Skill', SkillSchema);

module.exports = Skill;