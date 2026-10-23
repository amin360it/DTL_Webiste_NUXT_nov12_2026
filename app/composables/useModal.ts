import { reactive } from 'vue'

const state = reactive({
  lightbox: { open: false, src: '', alt: '', cap: '' },
  pdf: { open: false, title: 'Document', src: '' },
  video: { open: false, id: '', title: 'Video' }
})

export function useModal() {
  function openLightbox(src: string, cap = '', alt = '') {
    state.lightbox.src = src
    state.lightbox.cap = cap
    state.lightbox.alt = alt || cap || ''
    state.lightbox.open = true
  }
  function openPdf(src: string, title = 'Document') {
    state.pdf.src = src
    state.pdf.title = title
    state.pdf.open = true
  }
  function openVideo(id: string, title = 'Video') {
    state.video.id = id
    state.video.title = title
    state.video.open = true
  }
  function closeLightbox() {
    state.lightbox.open = false
    state.lightbox.src = ''
  }
  function closePdf() {
    state.pdf.open = false
    state.pdf.src = ''
  }
  function closeVideo() {
    state.video.open = false
    state.video.id = ''
  }
  return { state, openLightbox, openPdf, openVideo, closeLightbox, closePdf, closeVideo }
}

export function videoEmbedUrl(id: string) {
  return (
    'https://www.youtube.com/embed/' + id +
    '?autoplay=0&loop=0&showinfo=0&theme=dark&color=red&controls=1&modestbranding=0&start=0&fs=1&iv_load_policy=1&wmode=transparent&rel=1'
  )
}