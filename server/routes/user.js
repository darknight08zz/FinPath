const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// @route   PUT api/user/xp
// @desc    Update user XP and Level
// @access  Private
router.put('/xp', auth, async (req, res) => {
    const { xp, level } = req.body;

    try {
        let user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        user.xp = xp;
        if (level) user.level = level;

        await user.save();

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
