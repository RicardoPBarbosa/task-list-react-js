var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');
var Task 	   = require('./Task');

var Tasks = React.createClass({
	render: function(){
		if(this.props.tasks != ''){
			return(
				<div className="tasks-container">
					{
						this.props.tasks.map(function(task, i){
							return (
								<Task task={task} key={i} />
							)
						})
					}
				</div>
			)
		}else{
			return(
			<div className="tasks-container">
				<div className="noTasks">
					<i className="large material-icons">error_outline</i>
					NO TASKS YET
				</div>
			</div>
		)
		}
	}
});

module.exports = Tasks;