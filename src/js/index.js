//Javascript Entry Point
import $ from 'jquery';
// import Character from './character';
// var luke = new Character({
// 	name:'luke',
// });

// luke.setSrc('../images/Luke_Skywalker.png');

// $(.tatooine').append(luke.image);

function component(width, height, color, x,y) {
	this.width = width;
    this.height = height;
    this.x = x;
    this.y = y; 
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);

}