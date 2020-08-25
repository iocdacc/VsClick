const init = [
  // initDom
  function () {
    let vsClick = this
    let { config } = vsClick

    vsClick.initDom = ()=>{
      config.cvs = document.createElement('canvas')
      config.cvs.className = config.dom == window ? 'vsClick' : 'vsClick-dom'
      config.ctx = config.cvs.getContext('2d')
      config.dom != window ? config.dom.appendChild(config.cvs) : document.body.appendChild(config.cvs)
    }

    vsClick.initDom()
  }
]

export default function (){
  init.forEach(v=>{
    v.call(this)
  })
}