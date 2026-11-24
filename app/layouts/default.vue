<script setup lang="ts">
import { useModal } from '~/composables/useModal'
import { useOrganizationSchema } from '~/composables/useSeo'
import { wirePageInteractions } from '~/composables/useLegacyInteractions'
import { useScrollReveal } from '~/composables/useScrollReveal'
import { watch, onMounted, nextTick } from 'vue'

const { state, closeLightbox, closePdf, closeVideo } = useModal()
const route = useRoute()
const { start: startReveal, stop: stopReveal } = useScrollReveal()

useOrganizationSchema()

watch(() => state.lightbox.open || state.pdf.open || state.video.open, (anyOpen) => {
  document.body.style.overflow = anyOpen ? 'hidden' : ''
})

function closeAllModals() {
  closeLightbox()
  closePdf()
  closeVideo()
  document.body.style.overflow = ''
}

onMounted(() => {
  wirePageInteractions()
  nextTick(() => startReveal())
  window.addEventListener('popstate', closeAllModals)
  window.addEventListener('pageshow', closeAllModals)
})

onBeforeUnmount(() => {
  stopReveal()
  window.removeEventListener('popstate', closeAllModals)
  window.removeEventListener('pageshow', closeAllModals)
})

watch(() => route.fullPath, () => {
  closeAllModals()
  nextTick(() => {
    wirePageInteractions()
    startReveal()
  })
})

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    state.lightbox.open = false
    state.pdf.open = false
    state.video.open = false
  }
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="site">
    <SiteHeader />
    <main>
      <slot />
    </main>
    <SiteFooter />
    <BackToTop />
    <ScrollProgress />
    <LightboxModal />
    <PdfModal />
    <VideoModal />
  </div>
</template>
