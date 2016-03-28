//Javascript Entry Point
import $ from 'jquery';
import _ from 'lodash';
import blasterFactory from './blaster_factory';
import Laser from './laser';


var lasers = new Map();

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
status('Lightsaber Duel!');

setTimeout(function() {
  var winner = _.sample(fighters);

  status(`${winner.name} is the Winner!`);
}, 5000);

// setTimeout(function(){

// 	vader.explode();
// 	$('.vader'). replaceWith("../images/Luke_Skywalker_jedi.png");


	setTimeout(function() {
	$('.sith').hide();
  }, 7000);

  setTimeout(function() {
    $('.jedi').hide();
   }, 7000);
 
 setTimeout(function() {
  $(".vs").hide();
 }, 6000);










