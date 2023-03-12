const mongoose = require('mongoose');


// Create Schema
const SkillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    tutorials: [{
        description: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        video: {
            type: String,
            required: true
        },
    }],
    questions: [String]
});


// Create Model
const Skill = mongoose.model('Skill', SkillSchema);

module.exports = Skill;