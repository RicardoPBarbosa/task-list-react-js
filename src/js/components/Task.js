var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');

var Task = React.createClass({
	render: function(){
		var id = Math.floor((Math.random() * 1000) + 1);
		if(this.props.task.done){
			var done = <i className="small material-icons" onClick={this.doneTask.bind(this, id, this.props.task.done, this.props.task._id)}>close</i>
			var doneImg = <i className="medium material-icons taskDone">done</i>;
		}else{
			var done = <i className="small material-icons" onClick={this.doneTask.bind(this, id, this.props.task.done, this.props.task._id)}>done</i>
			var doneImg = '';
		}
		return(
			<div className="task" id={id}>
				<span className="taskDetails" onClick={this.closeOptions.bind(this, id)}>
					<span className="taskDate">{this.props.task.hour}:{this.props.task.minutes}</span>
					<div>
						<span className="taskText">{this.props.task.title}</span>
						{doneImg}
						<span className="taskText taskLocation"><i className="tiny material-icons">location_on</i> {this.props.task.location}</span>
					</div>
				</span>
				<span className="taskOpen"><i className="small material-icons" onClick={this.taskOptions.bind(this, id)}>more_horiz</i></span>
				<span className="taskOptions">
					{this.props.task.done ? 
						<i className="small material-icons" onClick={this.doneTask.bind(this, id, this.props.task.done, this.props.task._id)}>close</i>
					: <i className="small material-icons" onClick={this.doneTask.bind(this, id, this.props.task.done, this.props.task._id)}>done</i>
					}
					<i className="small material-icons" onClick={this.deleteTask.bind(this, id, this.props.task._id)}>delete</i>
				</span>
			</div>
		)
	},

	deleteTask: function(i, id, j){
		$("#" + i + " .taskOptions").removeClass("animated slideInRight");
		$("#" + i + " .taskOpen").css("display", "block");
		AppActions.removeTask(id.$oid);
	},

	doneTask: function(i, done, id, j){
		$("#" + i + " .taskOptions").removeClass("slideInRight");
		$("#" + i + " .taskOptions").addClass("slideOutRight");
		$("#" + i + " .taskOpen").css("display", "block");
		$("#" + i + " .taskOptions").removeClass("animated slideOutRight");
        $("#" + i + " .taskOptions").css("display", "none");
		AppActions.updateTask(id.$oid, !done);
	},

	taskOptions: function(i, j){
		$("#" + i + " .taskOpen").css("display", "none");
		$("#" + i + " .taskOptions").css("display", "block");
		$("#" + i + " .taskOptions").addClass("animated slideInRight");
	},

	closeOptions: function(i, j){
		if($("#" + i + " .taskOptions").css('display') == 'block'){
			$("#" + i + " .taskOptions").removeClass("slideInRight");
			$("#" + i + " .taskOptions").addClass("slideOutRight");
			window.setTimeout( function(){
				$("#" + i + " .taskOptions").removeClass("animated slideOutRight");
				$("#" + i + " .taskOpen").css("display", "block");
	            $("#" + i + " .taskOptions").css("display", "none");
	        }, 400);
	    }
	}
});

module.exports = Task;