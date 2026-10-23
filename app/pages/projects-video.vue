<script setup lang="ts">
import { useModal } from '~/composables/useModal'

useHead({
  title: 'Project Video',
  meta: [{ name: 'description', content: 'Project videos of DHAKATHAI ALCOMAXX PLC landmark projects and manufacturing.' }]
})

const { openVideo } = useModal()

function playVideo(id: string, title: string) {
  openVideo(id, title)
}
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/projects">Projects</NuxtLink> &raquo; Project Video</div>
    <div class="container">
      <span class="kicker">Projects</span>
      <h1>Project Video</h1>
      <p>Watch our projects and factory in action.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Video</span>
        <h2>DHAKATHAI ALCOMAXX PLC</h2>
        <p>Introduction to our company, factory and projects.</p>
      </div>
      <div class="grid grid-3">
        <button class="video-thumb" @click="playVideo('_k_nH7G99Gc', 'DHAKATHAI ALCOMAXX PLC')" data-video="_k_nH7G99Gc" data-title="DHAKATHAI ALCOMAXX PLC" style="box-shadow:var(--shadow-lg);">
          <img src="https://i.ytimg.com/vi/_k_nH7G99Gc/hqdefault.jpg" alt="DHAKATHAI ALCOMAXX PLC" loading="lazy">
          <span class="video-play"></span><span class="video-tag">Watch on YouTube</span>
        </button>
        <button class="video-thumb" @click="playVideo('074az4Jm_zQ', 'Dhaka Thai Ltd. Project showcase')" data-video="074az4Jm_zQ" data-title="Dhaka Thai Ltd. Project showcase" style="box-shadow:var(--shadow-lg);">
          <img src="https://i.ytimg.com/vi/074az4Jm_zQ/hqdefault.jpg" alt="Dhaka Thai Ltd. Project showcase" loading="lazy">
          <span class="video-play"></span><span class="video-tag">Watch on YouTube</span>
        </button>
        <button class="video-thumb" @click="playVideo('agzY7JFNY5U', 'Dhaka Thai Aluminium')" data-video="agzY7JFNY5U" data-title="Dhaka Thai Aluminium" style="box-shadow:var(--shadow-lg);">
          <img src="https://i.ytimg.com/vi/agzY7JFNY5U/hqdefault.jpg" alt="Dhaka Thai Aluminium" loading="lazy">
          <span class="video-play"></span><span class="video-tag">Watch on YouTube</span>
        </button>
      </div>
    </div>
  </section>
</template>
