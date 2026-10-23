<script setup lang="ts">
import { useModal, videoEmbedUrl } from '~/composables/useModal'

const { state, closeVideo } = useModal()
</script>

<template>
  <Teleport to="body">
    <div id="videoModal" class="modal" :class="{ open: state.video.open }" :aria-hidden="String(!state.video.open)" @click.self="closeVideo">
      <div class="modal-box video-box">
        <div class="video-toolbar">
          <h4>{{ state.video.title }}</h4>
          <div class="pdf-actions">
            <a :href="'https://www.youtube.com/watch?v=' + state.video.id" target="_blank" rel="noopener">Open on YouTube</a>
            <button class="modal-close" aria-label="Close" @click="closeVideo">&times;</button>
          </div>
        </div>
        <div class="video-frame">
          <iframe
            v-if="state.video.open"
            :key="state.video.id"
            :src="videoEmbedUrl(state.video.id)"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </Teleport>
</template>
