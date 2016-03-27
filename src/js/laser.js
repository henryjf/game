import Blaster, {MAX_WIDTH, MAX_HEIGHT} from './blaster';

class Laser extends Blaster {
  constructor() {
    super();
    this.direction = Math.random() * (Math.PI * 2);
    this.speed = Math.random() * 100;
  }

  travel() {
    // this === star
    // this !== travel
    var {x, y} = this.coordinates;
    x += Math.sin(this.direction) * this.speed;
    y -= Math.cos(this.direction) * this.speed;

    if (x > MAX_WIDTH) {
      x -= MAX_WIDTH;
    }
    if (x < 2) {
      x += MAX_WIDTH;
    }

    if (y > MAX_HEIGHT) {
      y -= MAX_HEIGHT;
    }
    if (y < 2) {
      y += MAX_HEIGHT;
    }


    this.coordinates = {x, y};
  }
}

export default Laser;