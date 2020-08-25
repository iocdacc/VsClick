import _number from 'lodash/number';

export default function Particle(_option){ // 粒子类
  let Particle = this

  Particle.option = {
    x: 0,
    y: 0,
    vx: parseFloat(_number.random(-2, 2, true).toPrecision(3)), // 水平方向初速度
    vy: parseFloat(_number.random(-2, 2, true).toPrecision(3)),  // 垂直方向初速度
    vdown: 0, // 重力初速度
    g: .5, // 重力加速度
    f: .95, // 摩檫力
    b: .75, // 弹跳衰减
    k: -5, // 弹力初速度
    width: 5,
    height: 5,
    timer: 1000, // 动画持续时间
    context: undefined,
    color: '#000000', // 方块的颜色
    emoji: undefined, // emoji集合
    minish: false,
    spring: false,
    slide: false,
    add: false,
    lucency: false,
    drop: false
  }

  
  Object.assign(Particle.option, _option)
  
  if (_option.color instanceof Array) Particle.option.color = _option.color[_number.random(0, _option.color.length - 1)]
  if (_option.vx instanceof Array) Particle.option.vx = parseFloat(_number.random(_option.vx[0], _option.vx[1], true).toPrecision(3))
  if (_option.vy instanceof Array) Particle.option.vy = parseFloat(_number.random(_option.vy[0], _option.vy[1], true).toPrecision(3))
  if (_option.emoji instanceof Array) Particle.option.emoji = _option.emoji[_number.random(0, _option.emoji.length - 1)]

  let { option } = Particle

  if (option.emoji) {
    option.x = option.x - option.width / 1.5
    option.y = option.y + option.height / 3
  }else{
    option.x = option.x - option.width / 2
    option.y = option.y - option.height / 2
  }

  Particle.animation = timestamp=>{
    Particle.attrStyle()
    option.lucency && Particle.attrLucency(timestamp)
    option.add && Particle.attrAdd()
    option.drop && Particle.attrDrop()
    option.minish && Particle.attrMini(timestamp)
    option.spring && Particle.attrSpring()
    option.slide && !option.spring && Particle.attrSlide()
    option.emoji ? Particle.renderText() : Particle.render()
  }

  Particle.attrDrop = ()=>{ // 掉落
    option.x = option.x + option.vx
    option.y = option.y + option.vy + option.vdown
    option.vdown = option.vdown + option.g
  }
  
  Particle.attrLucency = timestamp=>{ // 逐渐透明
    let opacity = parseInt((option.timer - timestamp) / option.timer * 255, 10)
    opacity = opacity < 0 ? '0' : opacity.toString(16)
    opacity = opacity.length < 2 ? '0' + opacity : opacity
    option.ctx.fillStyle = option.color + opacity
  }

  Particle.attrAdd = ()=>{ // 坐标递增
    option.x = option.x + option.vx
    option.y = option.y + option.vy
  }
  
  Particle.attrMini = timestamp=>{ // 高宽递减  
    option.width_old = option.width_old ? option.width_old : option.width
    option.height_old = option.height_old ? option.height_old : option.height
    let mini = (option.timer - timestamp) / option.timer
    mini = mini > 0 ? mini : 0
    option.width = option.width_old * mini
    option.height = option.height_old * mini
  }
  
  Particle.attrSpring = ()=>{ // 触底反弹
    let height = option.emoji ? option.height / 5 : option.height
    if (option.y >= option.cvs.height - height) {
      option.vdown = 0
      option.y = option.cvs.height - height
      option.vy = (option.vy + option.k) * option.b
      option.vx = option.vx * option.f
      option.k = 0
    }
  }
  
  Particle.attrSlide = ()=>{ // 触底滑动
    let height = option.emoji ? option.height / 5 : option.height
    if (option.y >= option.cvs.height - height) {
      option.vydown = 0
      option.y = option.cvs.height - height
      option.vx = option.vx * option.f
    }
  }
  
  Particle.attrStyle = ()=>{ // 样式
    option.ctx.fillStyle = option.color
  }
  
  Particle.render = ()=>{ // 图形渲染
    option.ctx.beginPath()
    option.ctx.fillRect(option.x, option.y, option.width, option.height);
  }
  
  Particle.renderText = ()=>{ // 文字渲染
    option.ctx.beginPath()
    option.ctx.font = option.width + 'px serif'
    option.ctx.fillText(option.emoji, option.x, option.y);
  }
}
