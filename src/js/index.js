//Javascript Entry Point
import $ from 'jquery';
import _ from 'lodash';
// import Character from './character';
var fighters = [
	{
	name:'Luke',
	url: "../images/Luke_Skywalker_jedi.png"
},
	{
	name:'Vader',
	url:"../images/Darth_Vader.png"
	}
]

function setFighters(a, b) {
	$('.jedi').append(
		`<img src="${a.url}">`
		);

	$('.sith').append(
		`<img src="${b.url}">`
		);
}

function status(msg) {
	$('.status').text(msg);	
}

setFighters(fighters[0], fighters[1]);
status('Fight!');

setTimeout(function() {
	var winner = _.sample(fighters);

	status(`${winner.name} is the winner!`);
}, 5000);




// luke.setSrc('../images/Luke_Skywalker.png');

// $('.tatooine').append(luke.image);

// function component(width, height, color, x,y) {
// 	this.width = width;
//     this.height = height;
//     this.x = x;
//     this.y = y; 
//     ctx = myGameArea.context;
//     ctx.fillStyle = color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);

// }