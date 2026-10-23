<script setup lang="ts">
import { useModal } from '~/composables/useModal'

const { state, closeLightbox } = useModal()
</script>

<template>
  <Teleport to="body">
    <div id="lightbox" class="modal" :class="{ open: state.lightbox.open }" :aria-hidden="String(!state.lightbox.open)" @click.self="closeLightbox">
      <button class="modal-close" aria-label="Close" @click="closeLightbox">&times;</button>
      <div>
        <img class="modal-img" :src="state.lightbox.src" :alt="state.lightbox.alt">
        <div class="modal-cap">{{ state.lightbox.cap }}</div>
        <div class="modal-actions">
          <a class="btn btn-primary btn-sm" :href="state.lightbox.src" download>Download Image</a>
        </div>
      </div>
    </div>
  </Teleport>
</template>
