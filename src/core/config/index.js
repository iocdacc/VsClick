export default function (){
  let vsClick = this
  let defaultConfig = {
    effect: 'drop', // 点击效果。
    dom: window,  // 生效的dom，默认为整个窗口。
    color: ['#ffbe0b','#fb5607','#ff006e','#8338ec','#3a86ff'], // 颜色集合。
    emoji: [], // emoji集合。['🍋','🍌','🍉','🍎','🍒','🍓','🌽']
    height: 20,
    width: 20,
    timer: 2000,
    type: undefined
  }

  if (!vsClick.config) vsClick.config = {}

  // 检查emoji是不是文本
  vsClick.config.emoji && (function (){
    if (!(vsClick.config.emoji instanceof Array)) {
      delete vsClick.config.emoji
      return
    }

    let emoji = vsClick.config.emoji.every(v=>{
      if (typeof v !== 'string') return false
      return true
    })

    if (!emoji) {
      delete vsClick.config.emoji
      return
    }
  })()

    // 检查DOM
    vsClick.config.dom && (function (){
      vsClick.config.dom = document.getElementsByClassName(vsClick.config.dom)[0]

      if (!(vsClick.config.dom instanceof Element)) {
        delete vsClick.config.dom
        return
      }
    })()

  Object.assign(defaultConfig, vsClick.config)
  
  vsClick.config = defaultConfig

  return true
}