<script setup lang="ts">
import { useModal } from '~/composables/useModal'

const { state, closePdf } = useModal()
</script>

<template>
  <Teleport to="body">
    <div id="pdfModal" class="modal" :class="{ open: state.pdf.open }" :aria-hidden="String(!state.pdf.open)" @click.self="closePdf">
      <div class="modal-box">
        <div class="pdf-toolbar">
          <h4>{{ state.pdf.title }}</h4>
          <div class="pdf-actions">
            <a :href="state.pdf.src" download>Download</a>
            <a :href="state.pdf.src" target="_blank" rel="noopener">Open in new tab</a>
            <button class="modal-close" aria-label="Close" @click="closePdf">&times;</button>
          </div>
        </div>
        <iframe :src="state.pdf.src" title="PDF viewer"></iframe>
      </div>
    </div>
  </Teleport>
</template>
