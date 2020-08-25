import _number from 'lodash/number';
import Particle from '../../components/particle';
import ParticleCreat from '../../components/particleCreat';

export default function () {
  let vsClick = this
  let { config, observer } = vsClick

  if (config.effect !== 'spread') return
  
  vsClick.effectStart = new ParticleCreat({
    Particle,
    observer,
    height: config.height,
    width: config.width,
    ctx: config.ctx,
    cvs: config.cvs,
    color: config.color,
    emoji: config.emoji,
    timer: config.timer,
    add: true,
    lucency:  config.lucency || false,
    minish: config.minish || false,
  })[config.type || 'sync']
}