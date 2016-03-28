import Laser from './laser';

export default function() {
  if (Math.random() > .001) 
    return new Laser();
}