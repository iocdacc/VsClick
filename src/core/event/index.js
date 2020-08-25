export default function (){
  let vsClick = this
  let { config } = vsClick
  
  config.dom.onclick = e=>{
    let x = config.dom == window ? e.clientX : e.layerX
    let y = config.dom == window ? e.clientY : e.layerY

    vsClick.effectStart({x, y})
  }
}