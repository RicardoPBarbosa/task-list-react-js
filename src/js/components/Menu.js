var React      = require('react');
var AppActions = require('../actions/AppActions');
var AppStore   = require('../stores/AppStore');

var Menu = React.createClass({
	render: function(){
		var finishedTasks = 0,
			unfinishedTasks = 0;
		this.props.tasks.map(function(task, i){
			if(task.done){
				finishedTasks += 1;
			}else{
				unfinishedTasks += 1;
			}
		});
		return(
			<div>
				<div className="menu center-align">
					<span className="menuIcon flow-text"><i className="small material-icons animated" onClick={this.openMenu}>menu</i></span>
					<span className="menuTitle flow-text">tasks</span>
				</div>
				<div className="menuScreen animated">
					<div className="holdImg"></div>
					<div className="holdName"><span>Ricardo</span><span>Barbosa</span></div>
					<div className="taskStats"><span id="number">{finishedTasks}</span><div><span>Finished</span><span>tasks</span></div> <span id="number">{unfinishedTasks}</span><div><span>Unfinished</span><span>tasks</span></div></div>
					<div className="follow"><a target="_blank" href="https://github.com/RicardoPBarbosa"><img src="./img/github.png" />Follow me on Github</a></div>
				</div>
			</div>
		)
	},

	openMenu: function(){
		if($(".menuIcon i").html() == "close"){
			$(".menuIcon i").html("menu");
			$(".menuIcon i").addClass("rubberBand");
			$(".menuScreen").addClass('slideOutLeft');
			window.setTimeout( function(){
                $(".menuIcon i").removeClass("rubberBand");
                $(".menuScreen").css("display", "none");
				$(".menuScreen").removeClass('slideOutLeft');
            }, 400);
		}else{
			$(".menuIcon i").html("close");
			$(".menuIcon i").addClass("rubberBand");
			$(".menuScreen").addClass('bounceInLeft');
			$(".menuScreen").css("display", "block");
			$(".menuScreen").removeClass('slideOutLeft');
			window.setTimeout( function(){
                $(".menuIcon i").removeClass("rubberBand");
                $(".menuScreen").removeClass('bounceInLeft');
            }, 400);
		}
	}
});

module.exports = Menu;