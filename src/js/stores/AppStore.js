var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI');

var CHANGE_EVENT = 'change';

var _tasks = [];

var AppStore = assign({}, EventEmitter.prototype, {
	addTask: function(task){
		// _tasks.push(task);
		_tasks.splice(0,0,task);
	},
	getTasks: function(){
		return _tasks;
	},
	updateTask: function(taskId, done){
		var index = _tasks.findIndex(x => x._id.$oid === taskId);
		_tasks[index]['done'] = done;
	},
	setTasks: function(tasks){
		_tasks = tasks;
	},
	removeTask: function(taskId){
		var index = _tasks.findIndex(x => x._id.$oid === taskId);
		_tasks.splice(index, 1);
	},
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback){
		this.on('change', callback);
	},
	removeChangeListener: function(callback){
		this.removeListener('change', callback);
	}
});

AppDispatcher.register(function(payload){
	var action = payload.action;

	switch(action.actionType){
		case AppConstants.ADD_TASK:
			// Store Save
			AppStore.addTask(action.task);
			// API Save
			AppAPI.addTask(action.task);
			// Emit Change
			AppStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.RECEIVE_TASKS:
			// Store Save
			AppStore.setTasks(action.tasks);
			// Emit Change
			AppStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.REMOVE_TASK:
			// Store Remove
			AppStore.removeTask(action.taskId);
			// API Remove
			AppAPI.removeTask(action.taskId);
			// Emit Change
			AppStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.UPDATE_TASK:
			// Store Update
			AppStore.updateTask(action.taskId, action.done);
			// API Update
			AppAPI.updateTask(action.taskId, action.done);
			// Emit Change
			AppStore.emit(CHANGE_EVENT);
			break;
	}

	return true;
});

module.exports = AppStore;