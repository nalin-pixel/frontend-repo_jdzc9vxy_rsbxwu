export function ph(w = 400, h = 300, label = 'placeholder') {
  const bg = '111111'
  const fg = '999999'
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'>
    <rect width='100%' height='100%' fill='#${bg}'/>
    <g fill='none' stroke='#${fg}' stroke-width='2'>
      <path d='M0,0 L${w},${h}'/><path d='M${w},0 L0,${h}'/>
    </g>
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#${fg}' font-family='Inter, Arial, sans-serif' font-size='14'>${label}</text>
  </svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}
