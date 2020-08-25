import collection from 'lodash/collection';

export default function (){
  let vsClick = this
  let subscribeArray = []

  vsClick.observer = {
    set(fun) {
      subscribeArray.push({fun,time: 0})
    },
    run() {
      subscribeArray.length > 0 && collection.forEachRight(subscribeArray, (v, k)=>{
        if (v.time === 0) v.time = Date.now()
        v.fun(Date.now() - v.time, k)
      })
    },
    remove(key){
      subscribeArray.splice(key, 1)
    }
  }
}