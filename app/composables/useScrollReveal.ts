const BLOCK_SELECTOR = ['main .section > .container > *', 'main .page-hero .container > *'].join(', ')

const SKIP = '.modal, .drawer, .nav-backdrop, [data-no-reveal]'

function reset() {
  document.documentElement.classList.remove('motion-ready')
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    el.removeAttribute('data-reveal')
    el.classList.remove('is-in')
    el.style.removeProperty('--reveal-delay')
  })
}

export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  function stop() {
    observer?.disconnect()
    observer = null
    if (typeof document === 'undefined') return
    reset()
  }

  function start() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return

    observer?.disconnect()
    observer = null
    reset()

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const nodes = Array.from(document.querySelectorAll<HTMLElement>(BLOCK_SELECTOR)).filter(
      (el) => !el.hasAttribute('data-reveal') && !el.closest(SKIP) && !el.closest('[data-reveal]')
    )
    if (!nodes.length) return

    document.documentElement.classList.add('motion-ready')

    const perParent = new Map<Element, number>()
    nodes.forEach((el) => {
      const parent = el.parentElement ?? document.body
      const index = perParent.get(parent) ?? 0
      perParent.set(parent, index + 1)
      el.setAttribute('data-reveal', '')
      el.style.setProperty('--reveal-delay', `${Math.min(index, 6) * 70}ms`)
    })

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          observer?.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0 }
    )

    nodes.forEach((el) => observer?.observe(el))
  }

  return { start, stop }
}
