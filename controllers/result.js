const Result = require('../models/result');

const addResult = async (req, res) => {
    try {
        const { name, subject, marks } = req.body;

        if (!name || !subject || !marks) {
            return res.status(400).json({ message: 'plase fill all things' });
        }

        const result = new Result({ name, subject, marks });
        await result.save();

        res.status(201).json({ message: 'Result is added', result });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getResults = async (req, res) => {
    try {
        const results = await Result.find();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


module.exports = { addResult, getResults };