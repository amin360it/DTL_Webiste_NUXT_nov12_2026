<script setup lang="ts">
import { useModal } from '~/composables/useModal'
import { wirePageInteractions } from '~/composables/useLegacyInteractions'
import { watch, onMounted, nextTick } from 'vue'

const { state } = useModal()
const route = useRoute()

watch(() => state.lightbox.open || state.pdf.open || state.video.open, (anyOpen) => {
  document.body.style.overflow = anyOpen ? 'hidden' : ''
})

onMounted(() => wirePageInteractions())
watch(() => route.fullPath, () => nextTick(() => wirePageInteractions()))

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
    <LightboxModal />
    <PdfModal />
    <VideoModal />
  </div>
</template>
