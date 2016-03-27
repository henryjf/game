import Blaster from './blaster';
import Laser from './laser';
// import TwinklingStar from './twinkling_star';

export default function() {
  if (Math.random() > .001) {
    return new Laser();
  } else if (Math.random() > 2) {
    return new TwinklingStar(['#ff0000', '#0000ff']);
  } else {
    return new Blaster();
  }
}