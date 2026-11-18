<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { directors, type Director } from '~/data/directors'

useSeo({
  title: 'Board of Directors',
  description: 'Meet the Board of Directors of DHAKATHAI ALCOMAXX PLC - experienced leaders of the aluminium industry.'
})

const selected = ref<Director | null>(null)
const closeBtn = ref<HTMLButtonElement | null>(null)

const boardSize = directors.length
const independentCount = directors.filter((d) => d.group === 'Independent').length
const sponsorCount = boardSize - independentCount

const governanceLink = computed(() => '/investors-relation#governance')

function openDirector(d: Director) {
  selected.value = d
}

function closeDirector() {
  selected.value = null
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && selected.value) closeDirector()
}

watch(selected, (d) => {
  document.body.style.overflow = d ? 'hidden' : ''
  if (d) nextTick(() => closeBtn.value?.focus())
})

onMounted(() => window.addEventListener('keydown', onKeydown))

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Board of Directors</div>
    <div class="container">
      <span class="kicker">Leadership</span>
      <h1>Board of Directors</h1>
      <p>Visionary leaders with decades of combined experience guiding DHAKATHAI ALCOMAXX PLC toward excellence.</p>
    </div>
  </section>

  <section class="section bd-intro">
    <div class="container bd-intro-grid">
      <div>
        <span class="kicker">The Board</span>
        <h2>Nine members, one direction</h2>
        <p class="bd-lede">
          Our board combines more than two centuries of experience in aluminium extrusion, manufacturing, banking and
          international trade. Together they set the strategy, safeguard governance and keep the company investing in
          people, plant and product quality.
        </p>
        <div class="bd-stats">
          <div class="bd-stat"><strong>{{ boardSize }}</strong><span>Board members</span></div>
          <div class="bd-stat"><strong>{{ sponsorCount }}</strong><span>Sponsor directors</span></div>
          <div class="bd-stat"><strong>{{ independentCount }}</strong><span>Independent directors</span></div>
        </div>
      </div>
      <aside class="bd-aside">
        <span class="bd-aside-kicker">Governance</span>
        <h3>Governance &amp; investors</h3>
        <p>Board composition, committee roles and governance policies are published with our investor documents.</p>
        <ul class="bd-aside-list">
          <li>Board composition &amp; committee roles</li>
          <li>Governance policies &amp; reports</li>
          <li>Prospectus &amp; shareholding details</li>
        </ul>
        <div class="bd-aside-actions">
          <NuxtLink :to="governanceLink" class="btn btn-primary">Corporate Governance</NuxtLink>
          <NuxtLink to="/investors-relation" class="bd-aside-link">All investor resources &rarr;</NuxtLink>
        </div>
      </aside>
    </div>
  </section>

  <section class="section section-light bd-list">
    <div class="container">
      <div class="section-head bd-list-head">
        <span class="kicker">Profiles</span>
        <h2>Meet the board</h2>
        <p>Every director&rsquo;s profile is listed below. Open any profile for the full biography.</p>
      </div>

      <article
        v-for="(d, i) in directors"
        :key="d.name"
        class="bd-row"
        :class="{ 'bd-row--flip': i % 2 === 1 }"
      >
        <button class="bd-photo" type="button" :aria-label="`Read the profile of ${d.name}`" @click="openDirector(d)">
          <img :src="d.img" :alt="d.name" loading="lazy">
          <span class="bd-photo-hint">Read profile</span>
        </button>

        <div class="bd-text">
          <div class="bd-meta">
            <span class="bd-role">{{ d.role }}</span>
            <span v-if="d.group === 'Independent'" class="bd-tag">Independent</span>
          </div>
          <h3>{{ d.name }}</h3>
          <ul class="bd-points">
            <li v-for="point in d.highlights" :key="point">{{ point }}</li>
          </ul>
          <p class="bd-bio">{{ d.bio }}</p>
          <button class="btn btn-dark bd-more" type="button" @click="openDirector(d)">Read full profile</button>
        </div>
      </article>
    </div>
  </section>

  <section class="section bd-cta">
    <div class="container bd-cta-box">
      <div>
        <span class="kicker">Investor Relations</span>
        <h2>Transparent by design</h2>
        <p>Read the prospectus, shareholding details and governance reports behind the board.</p>
      </div>
      <div class="bd-cta-actions">
        <NuxtLink to="/investors-relation" class="btn btn-primary">Investor Relations</NuxtLink>
        <NuxtLink to="/contact" class="btn btn-outline">Contact Us</NuxtLink>
      </div>
    </div>
  </section>

  <Teleport to="body">
    <div v-if="selected" class="bd-modal" role="dialog" aria-modal="true" aria-labelledby="bd-modal-title" @click.self="closeDirector">
      <div class="bd-dialog">
        <div class="bd-dialog-head">
          <div>
            <span class="bd-role">{{ selected.role }}</span>
            <span v-if="selected.group === 'Independent'" class="bd-tag">Independent</span>
          </div>
          <button ref="closeBtn" class="bd-close" type="button" aria-label="Close profile" @click="closeDirector">&times;</button>
        </div>
        <div class="bd-dialog-body">
          <div class="bd-dialog-photo">
            <img :src="selected.img" :alt="selected.name">
          </div>
          <div class="bd-dialog-text">
            <h2 id="bd-modal-title">{{ selected.name }}</h2>
            <ul class="bd-points">
              <li v-for="point in selected.highlights" :key="point">{{ point }}</li>
            </ul>
            <p class="bd-dialog-bio">{{ selected.bio }}</p>
          </div>
        </div>
        <div class="bd-dialog-foot">
          <NuxtLink :to="governanceLink" class="bd-foot-link" @click="closeDirector">Corporate Governance</NuxtLink>
          <button class="btn btn-dark" type="button" @click="closeDirector">Close</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.bd-intro { padding-bottom: 0; }
.bd-intro-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 48px;
  align-items: start;
}
.bd-lede { color: var(--text-light); font-size: 1.05rem; line-height: 1.75; margin: 14px 0 26px; max-width: 62ch; }
.bd-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; max-width: 640px; }
.bd-stat {
  background: var(--white);
  border: 1px solid var(--light-2);
  border-radius: var(--radius);
  padding: 18px 20px;
  box-shadow: var(--shadow-sm);
}
.bd-stat strong { display: block; font-family: var(--font-head); font-size: 1.8rem; line-height: 1.1; color: var(--primary); }
.bd-stat span { font-size: 0.8rem; color: var(--text-light); }

.bd-aside {
  position: relative;
  overflow: hidden;
  background: linear-gradient(145deg, var(--primary-dark) 0%, var(--primary) 62%, #1a365c 100%);
  border-radius: var(--radius-lg);
  padding: 34px;
  color: var(--white);
  box-shadow: var(--shadow-lg);
}
.bd-aside::before {
  content: "";
  position: absolute;
  top: -120px;
  right: -90px;
  width: 280px;
  height: 280px;
  border-radius: 50%;   background: radial-gradient(circle, rgba(5, 166, 75, 0.22) 0%, rgba(5, 166, 75, 0.08) 45%, transparent 72%);
  pointer-events: none;
}
.bd-aside > * { position: relative; }
.bd-aside-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent-light);
}
.bd-aside-kicker::before {
  content: "";
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
}
.bd-aside h3 { color: var(--white); font-size: 1.3rem; margin: 10px 0 10px; }
.bd-aside p { color: #c3cfdd; font-size: 0.92rem; line-height: 1.65; margin-bottom: 20px; }
.bd-aside-list {
  list-style: none;
  display: grid;
  gap: 11px;
  margin: 0 0 26px;
  padding: 18px 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
}
.bd-aside-list li {
  position: relative;
  padding-left: 26px;
  font-size: 0.88rem;
  font-weight: 500;
  line-height: 1.5;
  color: #d5dfeb;
}
.bd-aside-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 4px;
  width: 13px;
  height: 13px;
  border-radius: 50%;   background: rgba(5, 166, 75, 0.24);
  box-shadow: inset 0 0 0 2px var(--accent);
}
.bd-aside-actions { display: flex; align-items: center; gap: 18px; flex-wrap: wrap; }
.bd-aside-link { color: var(--accent-light); font-size: 0.85rem; font-weight: 600; }
.bd-aside-link:hover { color: var(--white); }

.section-head.bd-list-head { text-align: left; max-width: 620px; margin: 0 0 44px; }
.section-head.bd-list-head::after { left: 0; transform: none; }

.bd-row {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 46px;
  align-items: start;
  padding: 40px 0;
  border-top: 1px solid var(--light-2);
}
.bd-row:first-of-type { border-top: 0; padding-top: 8px; }
.bd-row--flip { grid-template-columns: 1fr 360px; }
.bd-row--flip .bd-photo { order: 2; }
.bd-row--flip .bd-text { order: 1; }

.bd-photo {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 4 / 5;
  border: 0;
  padding: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  background: var(--light-2);
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}
.bd-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 18%;
  transition: transform 0.5s ease;
}
.bd-photo:hover { box-shadow: var(--shadow-xl); }
.bd-photo:hover img { transform: scale(1.04); }
.bd-photo-hint {
  position: absolute;
  left: 12px;
  bottom: 12px;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(7, 20, 38, 0.72);
  color: #fff;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(6px);
  transition: var(--transition);
}
.bd-photo:hover .bd-photo-hint { opacity: 1; transform: translateY(0); }

.bd-meta { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.bd-role {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--accent-dark);
}
.bd-tag {
  padding: 3px 10px;
  border-radius: 999px;
  border: 1px solid var(--light-2);
  background: var(--white);
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-light);
}
.bd-text h3 { font-size: 1.45rem; margin: 8px 0 16px; }
.bd-points { list-style: none; display: grid; gap: 9px; margin-bottom: 18px; }
.bd-points li {
  position: relative;
  padding-left: 26px;
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text);
  line-height: 1.55;
}
.bd-points li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 6px;
  width: 13px;
  height: 13px;
  border-radius: 50%;   background: rgba(5, 166, 75, 0.18);
  box-shadow: inset 0 0 0 2px var(--accent);
}
.bd-bio {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.75;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 18px;
}
.bd-more { padding: 9px 20px; font-size: 0.82rem; }

.bd-cta-box {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  border-radius: var(--radius-lg);
  padding: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  color: var(--white);
  box-shadow: var(--shadow-lg);
}
.bd-cta-box h2 { color: var(--white); margin: 6px 0 10px; }
.bd-cta-box p { color: #c3cfdd; max-width: 58ch; }
.bd-cta-box .kicker { color: var(--accent-light); }
.bd-cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }

.bd-modal {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(7, 20, 38, 0.82);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.bd-dialog {
  width: min(980px, 100%);
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
}
.bd-dialog-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 22px;
  border-bottom: 1px solid var(--light-2);
  background: var(--light);
}
.bd-dialog-head > div { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.bd-close {
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
  border-radius: 50%;
  border: 1px solid var(--light-2);
  background: var(--white);
  color: var(--text);
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  transition: var(--transition);
}
.bd-close:hover { background: var(--accent); border-color: var(--accent); color: #fff; }
.bd-dialog-body {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 34px;
  padding: 28px;
  overflow-y: auto;
}
.bd-dialog-photo img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: center 18%;
  border-radius: var(--radius);
  box-shadow: var(--shadow-md);
  background: var(--light-2);
}
.bd-dialog-text h2 { font-size: 1.5rem; margin-bottom: 16px; }
.bd-dialog-bio { color: var(--text-light); font-size: 0.96rem; line-height: 1.8; }
.bd-dialog-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 22px;
  border-top: 1px solid var(--light-2);
  background: var(--light);
}
.bd-foot-link { font-size: 0.85rem; font-weight: 600; color: var(--primary); }
.bd-foot-link:hover { color: var(--accent); }

@media (max-width: 1024px) {
  .bd-intro-grid { grid-template-columns: 1fr; gap: 30px; }
  .bd-row { grid-template-columns: 290px 1fr; gap: 30px; }
  .bd-row--flip { grid-template-columns: 1fr 290px; }
}
@media (max-width: 760px) {
  .bd-row,
  .bd-row--flip { grid-template-columns: 1fr; gap: 22px; padding: 30px 0; }
  .bd-row--flip .bd-photo,
  .bd-row--flip .bd-text { order: 0; }
  .bd-aside { padding: 26px; }
  .bd-photo { max-width: 100%; aspect-ratio: 4 / 5; }
  .bd-dialog-body { grid-template-columns: 1fr; gap: 22px; padding: 20px; }
  .bd-dialog-photo img { max-width: 220px; }
  .bd-cta-box { flex-direction: column; align-items: flex-start; padding: 30px; }
  .bd-stats { grid-template-columns: 1fr; }
}
</style>
