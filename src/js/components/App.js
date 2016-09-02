var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');
var Menu       = require('./Menu');
var Tasks      = require('./Tasks');
var EnterTask  = require('./EnterTask');

function getAppState(){
	return {
		tasks: AppStore.getTasks()
	}
}

var App = React.createClass({
	getInitialState: function(){
		return getAppState();
	},

	componentDidMount: function(){
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function(){
		AppStore.removeChangeListener(this._onChange);
	},

	render: function(){
		// condiçao para quando nao houver tasks
		return(
			<div>
				<Menu tasks={this.state.tasks} />
				<Tasks tasks={this.state.tasks} />
				<EnterTask />
			</div>
		)
	},

	_onChange: function(){
		this.setState(getAppState());
	}
});

module.exports = App;