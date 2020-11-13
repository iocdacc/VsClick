## Demos
https://iocdacc.github.io/VsClick/demos/

## 默认配置
```js
let vsClick = new VsClick({
  effect: 'drop|spread|sudoku', // 点击效果。
  dom: window,  // 生效的dom，默认为整个窗口。
  color: ['#ffbe0b','#fb5607','#ff006e','#8338ec','#3a86ff'], // 颜色集合。
  emoji: [], // emoji集合。['🍋','🍌','🍉','🍎','🍒','🍓','🌽']
  height: 20, // 粒子的高度
  width: 20, // 粒子的宽度(也控制emoji的字体大小)
  timer: 2000, // 动画持续时间
  spring: false, // 是否弹跳
  slide: false, // 是否滑动
  lucency: false // 是否逐渐透明
})
```