import Particle from '../../components/particle';
import ParticleCreat from '../../components/particleCreat';

export default function () {
  let vsClick = this
  let { config, observer } = vsClick

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
    lucency: true,
  })[config.type || 'sudoku']
}