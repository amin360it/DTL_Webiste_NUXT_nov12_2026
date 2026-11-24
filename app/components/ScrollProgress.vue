<script setup lang="ts">
const progress = ref(0)

function update() {
  const doc = document.documentElement
  const max = doc.scrollHeight - doc.clientHeight
  progress.value = max > 0 ? Math.min(1, doc.scrollTop / max) : 0
}

onMounted(() => {
  update()
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
})
</script>

<template>
  <div class="scroll-progress" aria-hidden="true">
    <span :style="{ transform: `scaleX(${progress})` }" />
  </div>
</template>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 950;
  pointer-events: none;
  background: transparent;
}

.scroll-progress span {
  display: block;
  height: 100%;
  width: 100%;
  transform-origin: 0 50%;
  background: linear-gradient(90deg, var(--accent-dark), var(--accent), var(--accent-light));
  box-shadow: 0 0 12px rgba(224, 134, 43, 0.5);
}

@media (prefers-reduced-motion: reduce) {
  .scroll-progress span { transition: none; }
}
</style>
