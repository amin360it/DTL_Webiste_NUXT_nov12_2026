<script setup lang="ts">
useSeo({
  title: 'Introduction in 3 Minutes',
  description: 'Watch a three-minute introduction to DHAKATHAI ALCOMAXX PLC - our factory, eight extrusion presses and aluminium profile range.'
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Introduction in 3 Minutes</div>
    <div class="container">
      <span class="kicker">Watch</span>
      <h1>Introduction in 3 Minutes</h1>
      <p>Get to know DHAKATHAI ALCOMAXX PLC - our story, our people and our process.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="video-embed">
        <iframe
          src="https://www.youtube.com/embed/i0f2fi61ow0?rel=0"
          title="Introduction in 3 Minutes"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div class="video-actions">
        <NuxtLink class="btn btn-primary" to="/manufacturing">Explore manufacturing</NuxtLink>
        <NuxtLink class="btn btn-dark" to="/products">Browse products</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.video-embed {
  position: relative;
  padding-top: 56.25%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: #000;
  box-shadow: var(--shadow-lg);
}
.video-embed iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.video-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 28px;
}
</style>
