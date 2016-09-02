var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	addTask: function(task){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.ADD_TASK,
			task: task
		});
	},
	updateTask: function(taskId, done){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.UPDATE_TASK,
			taskId: taskId,
			done: done
		});
	},
	receiveTasks: function(tasks){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_TASKS,
			tasks: tasks
		});
	},
	removeTask: function(taskId){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_TASK,
			taskId: taskId
		});
	}
}

module.exports = AppActions;