<script setup lang="ts">
type Fact = { num: string; label: string }

withDefaults(defineProps<{
  label?: string
  paragraphs: string[]
  facts: Fact[]
  image: string
  imageAlt: string
  caption: string
  factsLabel?: string
}>(), {
  label: 'Inside the Process',
  factsLabel: 'At a Glance'
})
</script>

<template>
  <section class="section">
    <div class="container">
      <h2 class="mfg-label">{{ label }}</h2>

      <figure class="mfg-wide-figure">
        <img :src="image" :alt="imageAlt" loading="lazy">
        <figcaption class="mfg-cap">{{ caption }}</figcaption>
      </figure>

      <div class="mfg-story-grid">
        <article v-for="(paragraph, i) in paragraphs" :key="i" class="mfg-story-card">
          <span class="mfg-story-num">{{ String(i + 1).padStart(2, '0') }}</span>
          <p>{{ paragraph }}</p>
        </article>
      </div>

      <h2 class="mfg-label mfg-label-spaced">{{ factsLabel }}</h2>
      <div class="mfg-fact-grid">
        <article v-for="fact in facts" :key="fact.num" class="mfg-fact-card">
          <span class="mfg-fact-card-num">{{ fact.num }}</span>
          <span class="mfg-fact-card-label">{{ fact.label }}</span>
        </article>
      </div>

      <slot />
    </div>
  </section>
</template>
