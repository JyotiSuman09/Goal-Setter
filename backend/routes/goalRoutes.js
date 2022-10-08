const express = require('express')
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const router = express.Router()


// router.get('/', getGoals)
// router.post('/', setGoal)
// Above codes can be rewritten

router.route('/').get(getGoals).post(setGoal)


// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

router.route('/:id').put(updateGoal).delete(deleteGoal)


module.exports = router;