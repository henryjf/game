//Javascript Entry Point
import $ from 'jquery';
import _ from 'lodash';
import blasterFactory from './blaster_factory';
import Laser from './laser';
// import TwinklingStar from './twinkling_star';

// import Planet from './planet';

// window.star = starFactory();

var lasers = new Map();
// var twinklingStars = new Map();

for( var i = 0; i <= 5; i++) {
  var blaster = blasterFactory();
  var $blaster = $('<div/>');
  var {x, y} = blaster.coordinates;
  var {w, h} = blaster.size;
  $blaster.addClass('blaster');
  $blaster.css({
    top: `${y}px`, 
    left: `${x}px`,
    width: `${30}px`,
    height: `${1}px`
  });
  $('.sky').append($blaster);

  if (blaster instanceof Laser) {
    lasers.set(blaster, $blaster);
  }

  // if (star instanceof TwinklingStar) {
  //   twinklingStars.set(star, $star);
  // }
}

setInterval(() => {
  for (var [blaster, $blaster] of lasers) {
    blaster.travel();
    var {x} = blaster.coordinates;
    $blaster.css({right: `${x}px`, left: `${x}px`});
  
  }


});

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

// setTimeout(function(){

// 	vader.explode();
// 	$('.vader'). replaceWith("../images/Luke_Skywalker_jedi.png");


	setTimeout(function() {
	$('.sith').hide();
}, 6000);

// }, 5000); 

// setTimeout(() => {

//   saturn.explode();
//   $('.saturn').replaceWith(saturn.image);

//   setTimeout(() => {
//     $('.saturn').hide();
//   }, 6000);

// }, 5000);)








