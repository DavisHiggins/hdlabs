import { useEffect, useRef, useState } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(pointer: fine)')
    setEnabled(mql.matches)
    const onChange = (e) => setEnabled(e.matches)
    mql.addEventListener?.('change', onChange)
    return () => mql.removeEventListener?.('change', onChange)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y
    let raf

    const move = (e) => {
      x = e.clientX
      y = e.clientY
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const tick = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      raf = requestAnimationFrame(tick)
    }
    tick()

    const isHoverable = (el) =>
      el && el.closest?.('a, button, input, textarea, select, [data-hover]')

    const onOver = (e) => {
      if (isHoverable(e.target)) ring.classList.add('cursor-ring--hover')
    }
    const onOut = (e) => {
      if (!e.relatedTarget || !isHoverable(e.relatedTarget)) {
        ring.classList.remove('cursor-ring--hover')
      }
    }

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout', onOut, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
