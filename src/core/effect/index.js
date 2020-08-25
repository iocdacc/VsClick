import sudoku from './sudoku'
import spread from './spread'
import drop from './drop'

const cor = [sudoku, spread, drop]

export default function (){
  cor.forEach(v=>v.call(this))
}