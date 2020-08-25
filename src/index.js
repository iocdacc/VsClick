import './static/css/index.scss'
import player from './core/player'
import config from './core/config'
import init from './core/init'
import event from './core/event'
import observer from './core/observer'
import effect from './core/effect'

console.log(
  '\n%c VsClick by%c https://blog.iocdacc.com \n',
  'color: #fff;background-image: linear-gradient(90deg, rgb(47, 172, 178) 0%, rgb(45, 190, 96) 100%);padding:5px 1px;',
  'color: #fff;background-image: linear-gradient(90deg, rgb(45, 190, 96) 0%, rgb(255, 255, 255) 100%);padding:5px 0;width: 200px;display: inline-block;'
);

const cor = [observer, init, effect, player, event]

export default function VsClick(...arg) {
  this.config = arg[0]

  if (!config.call(this)) return

  cor.forEach(v => {
    v.call(this)
  })
}