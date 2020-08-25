const cor = [
  function () {
    let vsClick = this
    let { config, observer } = vsClick

    ;(function step(){
      config.ctx.clearRect(0, 0, config.ctx.canvas.width, config.ctx.canvas.height)
      observer.run()
      requestAnimationFrame(step)
    })()
  }
]

export default function (){
  cor.forEach(v=>{
    v.call(this)
  })
}