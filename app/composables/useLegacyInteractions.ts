import { useModal } from '~/composables/useModal'

let wired = false

const IMAGE_URL = /\.(jpe?g|png|webp|gif|svg|avif|bmp)(\?|#|$)/i
const YOUTUBE_LINK = 'a[href*="youtube.com/watch"], a[href*="youtu.be/"], a[href*="youtube.com/shorts"], a[href*="youtube.com/embed"]'
const CHROME = '.modal, header, footer, .topbar, .drawer, .nav-backdrop, .site-header'

function isMobileViewport() {
  return window.matchMedia('(max-width: 820px)').matches || ('ontouchstart' in window && window.innerWidth <= 820)
}

function youtubeId(href: string) {
  const v = href.match(/[?&]v=([\w-]{6,})/)
  if (v) return v[1]
  const short = href.match(/youtu\.be\/([\w-]{6,})/)
  if (short) return short[1]
  const embed = href.match(/youtube\.com\/embed\/([\w-]{6,})/)
  return embed ? embed[1] : ''
}

function zoomableImage(target: HTMLElement): HTMLImageElement | null {
  const img = target.closest('img') as HTMLImageElement | null
  if (!img) return null
  if (img.closest(CHROME)) return null
  if (img.closest('[data-no-zoom]')) return null
  if (img.closest('button, .video-thumb, .tab-btn')) return null
  const link = img.closest('a')
  if (link && !link.hasAttribute('data-lightbox') && !IMAGE_URL.test(link.getAttribute('href') || '')) return null
  const w = img.naturalWidth || img.width
  const h = img.naturalHeight || img.height
  if (w && h && w < 56 && h < 56) return null
  return img
}

function captionFor(img: HTMLImageElement) {
  const holder = img.closest('[data-caption]')
  const fig = img.closest('figure')
  const figCap = fig ? fig.querySelector('figcaption') : null
  return (
    (holder && holder.getAttribute('data-caption')) ||
    (figCap && (figCap.textContent || '').trim()) ||
    img.getAttribute('alt') ||
    ''
  )
}

function markZoomable() {
  document.querySelectorAll('img').forEach((node) => {
    const img = node as HTMLImageElement
    if (zoomableImage(img)) {
      img.setAttribute('data-zoomable', '')
      img.style.cursor = 'zoom-in'
    } else if (img.hasAttribute('data-zoomable')) {
      img.removeAttribute('data-zoomable')
      img.style.cursor = ''
    }
  })
}

export function wirePageInteractions() {
  const { openLightbox, openVideo, openPdf } = useModal()
  const year = String(new Date().getFullYear())

  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = year
  })

  markZoomable()

  if (!wired) {
    wired = true

    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement | null
      if (!target || !target.closest) return

      const thumb = target.closest('.video-thumb, [data-video]') as HTMLElement | null
      if (thumb) {
        openVideo(thumb.getAttribute('data-video') || '', thumb.getAttribute('data-title') || 'Video')
        return
      }

      const lb = target.closest('[data-lightbox]') as HTMLElement | null
      if (lb) {
        const img = lb.querySelector('img')
        if (img) openLightbox(img.getAttribute('src') || '', lb.getAttribute('data-caption') || '', img.getAttribute('alt') || '')
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

      const ytLink = target.closest(YOUTUBE_LINK) as HTMLAnchorElement | null
      if (ytLink && !ytLink.closest(CHROME)) {
        const id = youtubeId(ytLink.getAttribute('href') || '')
        if (id) {
          e.preventDefault()
          openVideo(id, ytLink.getAttribute('data-title') || (ytLink.textContent || '').trim() || 'Video')
          return
        }
      }

      const img = zoomableImage(target)
      if (img) {
        e.preventDefault()
        openLightbox(img.currentSrc || img.getAttribute('src') || '', captionFor(img), img.getAttribute('alt') || '')
      }
    })

    window.addEventListener('resize', markZoomable, { passive: true })
  }
}
