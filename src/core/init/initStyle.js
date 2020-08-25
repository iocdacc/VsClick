const init = [
  // initStyle
  function () {
    let vsClick = this
    let { config } = vsClick

    vsClick.initStyle = ()=>{
      config.cvs.height = config.dom.innerHeight || config.dom.clientHeight
      config.cvs.width = config.dom.innerWidth || config.dom.clientWidth
    }

    vsClick.initStyle()
  }
]

export default function (){
  init.forEach(v=>{
    v.call(this)
  })
}