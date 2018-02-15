import TodoListController from '../controllers/todoListController'

export default app => {
  app.route('/tasks')
    .get(TodoListController.listAllTasks)
    .post(TodoListController.createTask)

  app.route('/tasks/:taskId')
    .get(TodoListController.getTask)
    .put(TodoListController.updateTask)
    .delete(TodoListController.deleteTask);
}
