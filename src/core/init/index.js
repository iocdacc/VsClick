import initDom from './initDom';
import initStyle from './initStyle';

const cor = [initDom, initStyle]

export default function (){
  cor.forEach(v=>{
    v.call(this)
  })
}