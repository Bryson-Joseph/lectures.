const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 800
ctx.lineWidth = 2

const colors = [
  '#DFFF00',
  '#FFBF00',
  '#FF7F50',
  '#DE3163',
  '#9FE2BF',
  '#40E0D0',
  '#6495ED',
  '#CCCCFF',
]

function onClick(event) {
  ctx.beginPath()
  ctx.moveTo(900, 900)
  const color = colors[Math.floor(Math.random() * colors.length)]
  ctx.lineTo(event.offsetX, event.offsetY)
  ctx.strokeStyle = color
  ctx.stroke()
}
canvas.addEventListener('mousemove', onClick)
//
