var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');

// Check for empty fields in an array
function hasEmpty(arr) {
   for (var key in arr) {
        if (arr[key] === "")
            return true;
    }
    return false;
}

var EnterTask = React.createClass({
	render: function(){
		return(
			<div>
				<div id="ignoreOverflow" onClick={this.addTask}>
					<a className="btn-floating btn-large waves-effect waves-light addTask"><i className="material-icons animated">add</i></a>
				</div>
				<div className="addTaskContainer">
					<form onSubmit={this.onSubmit}>
						<div className="col s12">
							<h4 className="center-align">Enter a Task</h4>
							<hr/>
							<div className="input-field col s12">
					          <input id="title" type="text" className="validate" ref="title" maxLength="18" />
					          <label htmlFor="title">Task Name</label>
					        </div>
							<div className="input-field col s4 heading">
					          <i className="material-icons">access_time</i><span> TIME</span> 
					        </div>
							<div className="input-field col s3">
					          <input id="hour" type="number" className="validate" ref="hour" min="1" max="24" />
					          <label htmlFor="hour">Hour</label>
					        </div>
					        <div className="input-field col s3">
					          <input id="minutes" type="number" className="validate" ref="minutes" min="0" max="59" />
					          <label htmlFor="minutes">Minutes</label>
					        </div>
					        <div className="input-field col s4 heading">
					          <i className="material-icons">location_on</i><span> LOCATION</span> 
					        </div>
							<div className="input-field col s8">
					          <input id="location" type="text" className="validate" ref="location" />
					          <label htmlFor="location">Location</label>
					        </div>
					        <div className="col s12 center-align"><button className="submitTask">SUBMIT</button></div>
						</div>
					</form>
				</div>
			</div>
		)
	},

	addTask: function(){
		if($(".addTaskContainer").css("display") == "block"){
			$(".addTaskContainer").removeClass('bounceInUp');
			$(".addTaskContainer").addClass('slideOutDown');
			$(".addTask i").html("add");
			$(".addTask i").addClass("rubberBand");
			window.setTimeout( function(){
				$(".addTaskContainer").css("display", "none");
				$(".addTaskContainer").removeClass('animated slideOutDown');
                $(".addTask i").removeClass("rubberBand");
            }, 300);
		}else{
			$(".addTaskContainer").addClass('animated bounceInUp');
			$(".addTaskContainer").css("display", "block");
			$(".addTask i").html("close");
			$(".addTask i").addClass("rubberBand");
			window.setTimeout( function(){
                $(".addTask i").removeClass("rubberBand");
                $("#title").val("");
                $("#hour").val("");
                $("#minutes").val("");
                $("#location").val("");
            }, 300);
		}
	},

	onSubmit: function(e){
		e.preventDefault();

		var hour    = (this.refs.hour.value.length == 1 ? '0'+this.refs.hour.value : this.refs.hour.value);
		var minutes = (this.refs.minutes.value.length == 1 ? '0'+this.refs.minutes.value : this.refs.minutes.value);

		var task = {
			title:    this.refs.title.value.trim(),
			hour:     hour,
			minutes:  minutes,
			location: this.refs.location.value.trim(),
			done: false
		}
		if(hasEmpty(task)){
			alert("Please Fill All The Fields");
		}else{
			AppActions.addTask(task);
			$(".addTaskContainer").removeClass('bounceInUp');
			$(".addTaskContainer").addClass('slideOutDown');
			$(".addTask i").html("add");
			$(".addTask i").addClass("rubberBand");
			window.setTimeout( function(){
				$(".addTaskContainer").css("display", "none");
				$(".addTaskContainer").removeClass('animated slideOutDown');
                $(".addTask i").removeClass("rubberBand");
            }, 300);
		}

	}
});

module.exports = EnterTask;