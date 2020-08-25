export default function ParticleCreat(option = {}){ // 粒子创建类
  this.option = {}

  Object.assign(this.option, option)

  let { Particle, width, height, observer } = this.option

  let effectCreat = option=>{ // 效果创建
    let rect = new Particle(Object.assign(this.option, option))
    observer.set((timestamp, key) => {
      rect.animation(timestamp)
      if (timestamp > rect.option.timer) observer.remove(key)
    })
  }

  this.sudoku = option=>{ // 矩形创建
    setTimeout(effectCreat, 0, { x: option.x, y: option.y })
    setTimeout(effectCreat, 50, { x: option.x, y: option.y - height })
    setTimeout(effectCreat, 100, { x: option.x + width, y: option.y })
    setTimeout(effectCreat, 150, { x: option.x + width, y: option.y - height })
    setTimeout(effectCreat, 200, { x: option.x - width, y: option.y })
    setTimeout(effectCreat, 250, { x: option.x, y: option.y + height })
    setTimeout(effectCreat, 300, { x: option.x + width, y: option.y + height })
    setTimeout(effectCreat, 350, { x: option.x - width, y: option.y - height })
    setTimeout(effectCreat, 400, { x: option.x - width, y: option.y + height })
  }

  this.timer = option=>{ // 计时器创建
    for (let index = 0; index < 10; index++) {
      setTimeout(effectCreat, index*50, { x: option.x, y: option.y })
    }
  }
  
  this.sync = option=>{ // 同步创建
    for (let index = 0; index < 10; index++) {
      effectCreat({ x: option.x, y: option.y })
    }
  }
}
