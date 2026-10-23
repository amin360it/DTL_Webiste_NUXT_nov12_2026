import { useModal } from '~/composables/useModal'

let wired = false

function isMobileViewport() {
  return window.matchMedia('(max-width: 820px)').matches || ('ontouchstart' in window && window.innerWidth <= 820)
}

export function wirePageInteractions() {
  const { openLightbox, openVideo, openPdf } = useModal()
  const year = String(new Date().getFullYear())

  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = year
  })

  if (!wired) {
    wired = true

    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement | null
      if (!target || !target.closest) return

      const lb = target.closest('[data-lightbox]') as HTMLElement | null
      if (lb) {
        const img = lb.querySelector('img')
        if (img) openLightbox(img.getAttribute('src') || '', lb.getAttribute('data-caption') || '', img.getAttribute('alt') || '')
        return
      }

      const thumb = target.closest('.video-thumb') as HTMLElement | null
      if (thumb) {
        openVideo(thumb.getAttribute('data-video') || '', thumb.getAttribute('data-title') || 'Video')
        return
      }

      const tabBtn = target.closest('.tab-btn') as HTMLElement | null
      if (tabBtn && tabBtn.closest('[data-tabs]')) {
        const wrap = tabBtn.closest('[data-tabs]') as HTMLElement
        wrap.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'))
        wrap.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('active'))
        tabBtn.classList.add('active')
        const panel = document.getElementById(tabBtn.getAttribute('data-tab') || '')
        if (panel) panel.classList.add('active')
        return
      }

      const pdfLink = target.closest('a[href$=".pdf"]') as HTMLAnchorElement | null
      if (pdfLink && !pdfLink.closest('.modal')) {
        if (isMobileViewport()) {
          pdfLink.setAttribute('target', '_blank')
          pdfLink.setAttribute('rel', 'noopener')
          return
        }
        e.preventDefault()
        openPdf(
          pdfLink.getAttribute('href') || '',
          pdfLink.getAttribute('data-pdf-title') || (pdfLink.textContent || '').trim() || 'Document'
        )
        return
      }
    })
  }
}