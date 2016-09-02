var AppActions = require('../actions/AppActions');

// Put your mLab Api Key here
var apiKey = 'Xafd_EtWvCspuuL7_yaf9_9LjS8rxsto';

module.exports = {
	addTask: function(task){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/stickypad/collections/tasks?apiKey="+apiKey+"",
			data: JSON.stringify(task),
			type: "POST",
			contentType: "application/json"
		});
	},
	updateTask: function(taskId, done){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/stickypad/collections/tasks/"+taskId+"?apiKey="+apiKey+"",
			data: JSON.stringify( { "$set" : { "done" : done } } ),
			type: "PUT",
			contentType: "application/json",
			success: function(data){
				
			}.bind(this),
			error: function(xhr, status, err){
				console.log(err);
			}.bind(this)
		});
	},
	getTasks: function(){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/stickypad/collections/tasks?apiKey="+apiKey+"&s={'hour': 1}",
			dataType: 'json',
			cache: false,
			success: function(data){
				AppActions.receiveTasks(data);
			}.bind(this),
			error: function(xhr, status, err){
				console.log(err);
			}.bind(this)
		});
	},
	removeTask: function(taskId){
		$.ajax({
			url: "https://api.mongolab.com/api/1/databases/stickypad/collections/tasks/"+taskId+"?apiKey="+apiKey+"",
			type: "DELETE",
			async: true,
			timeout: 300000,
			success: function(data){
				
			}.bind(this),
			error: function(xhr, status, err){
				console.log(err);
			}.bind(this)
		});
	}
}