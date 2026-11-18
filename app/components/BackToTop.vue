<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 480
}

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <button class="to-top" :class="{ show: visible }" type="button" aria-label="Back to top" @click="toTop">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>
  </button>
</template>

<style scoped>
.to-top {
  position: fixed;
  right: 26px;
  bottom: 26px;
  z-index: 900;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid var(--accent);
  background: var(--primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  opacity: 0;
  visibility: hidden;
  transform: translateY(14px);
  transition: var(--transition);
}
.to-top svg { width: 20px; height: 20px; }
.to-top.show { opacity: 1; visibility: visible; transform: translateY(0); }
.to-top:hover { background: var(--accent); border-color: var(--accent-dark); transform: translateY(-3px); }

@media (max-width: 820px) {
  .to-top { right: 16px; bottom: 16px; width: 42px; height: 42px; }
}
</style>
