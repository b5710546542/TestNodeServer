import Mongoose from 'mongoose'
import Task from '../models/todoListModel'

export default {
  
  listAllTasks: (req, res) => Task.find({}, (err, task) => {
    if (err) res.send(err)
    res.json(task)
  }),

  createTask: (req,res) => {
    const newTask = new Task(req.body)
    newTask.save((err, task) => {
      if (err) res.send(err)
      res.json(task)
    })
  },

  getTask: (req,res) => Task.findById(req.params.taskId, (err, task) => {
    if (err) res.send(err)
    res.json(task)
  }),

  updateTask: (req, res) => Task.findOneAndUpdate({
    _id: req.params.taskId
  }, req.body, { new: true }, (err, task) => {
    if (err) res.send(err)
    res.json(task)
  }),

  deleteTask: (req, res) => Task.remove({
    _id: req.params.taskId
  }, (err, task) => {
    if (err) res.send(err)
    res.json(task)
  })
}
