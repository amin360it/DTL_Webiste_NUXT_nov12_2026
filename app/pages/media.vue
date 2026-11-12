<script setup lang="ts">
import { useModal } from '~/composables/useModal'

useSeo({
  title: 'Media Gallery',
  description: 'Media gallery - photos and videos of DHAKATHAI ALCOMAXX PLC events, expos and factory activities.'
})

const { openVideo } = useModal()

function playVideoFromEvent(e: Event) {
  const btn = (e.target || e.currentTarget) as HTMLElement
  const id = btn.getAttribute('data-video') || ''
  const title = btn.getAttribute('data-title') || 'Video'
  openVideo(id, title)
}
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Media</div>
    <div class="container">
      <span class="kicker">Media</span>
      <h1>Media Gallery</h1>
      <p>Events, expos and moments from DHAKATHAI ALCOMAXX PLC.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Gallery</span>
        <h2>Photo Gallery</h2>
      </div>
      <div class="gallery">
        <div class="gallery-item" data-lightbox data-caption="Dhaka Thai News and Media (1)"><img src="/assets/img/dhaka thai news and media (1)06b3.jpg" alt="Dhaka Thai news 1"><div class="cap">News &amp; Media (1)</div></div>
        <div class="gallery-item" data-lightbox data-caption="Dhaka Thai News and Media (2)"><img src="/assets/img/dhaka thai news and media (2)acfd.jpg" alt="Dhaka Thai news 2"><div class="cap">News &amp; Media (2)</div></div>
        <div class="gallery-item" data-lightbox data-caption="Dhaka Thai News and Media (3)"><img src="/assets/img/dhaka thai news and media (3)83da.jpg" alt="Dhaka Thai news 3"><div class="cap">News &amp; Media (3)</div></div>
        <div class="gallery-item" data-lightbox data-caption="Dhaka Thai News and Media (4)"><img src="/assets/img/dhaka thai news and media (4)dc75.jpg" alt="Dhaka Thai news 4"><div class="cap">News &amp; Media (4)</div></div>
        <div class="gallery-item" data-lightbox data-caption="IAB Build Expo 2023"><img src="/assets/img/420932391_798962688938848_5745811127768013941_n2dac.jpg" alt="IAB Build Expo 2023"><div class="cap">IAB Build Expo 2023</div></div>
        <div class="gallery-item" data-lightbox data-caption="IAB Build Expo 2023"><img src="/assets/img/422837707_803363645165419_5284724285073403379_nc05f.jpg" alt="IAB Build Expo 2023"><div class="cap">IAB Build Expo 2023</div></div>
        <div class="gallery-item" data-lightbox data-caption="Dealer Conference"><img src="/assets/img/422894149_801337782034672_1363395714519893379_n2861.jpg" alt="Dealer Conference"><div class="cap">Dealer Conference</div></div>
        <div class="gallery-item" data-lightbox data-caption="Dealer Conference 2022"><img src="/assets/img/431420639_829825269185923_9008467010831589956_n7b9b.jpg" alt="Dealer Conference 2022"><div class="cap">Dealer Conference 2022</div></div>
        <div class="gallery-item" data-lightbox data-caption="Dealer Conference"><img src="/assets/img/437944552_862607812574335_7674141109567415927_nf7ea.jpg" alt="Dealer Conference"><div class="cap">Dealer Conference</div></div>
        <div class="gallery-item" data-lightbox data-caption="IAB Build Expo 2023"><img src="/assets/img/438299173_873034051531711_1568303238576268477_ne5ff.jpg" alt="IAB Build Expo 2023"><div class="cap">IAB Build Expo 2023</div></div>
        <div class="gallery-item" data-lightbox data-caption="Factory Activity"><img src="/assets/img/441657267_880362237465559_2923285554333657927_n2619.jpg" alt="Factory Activity"><div class="cap">Factory Activity</div></div>
        <div class="gallery-item" data-lightbox data-caption="Dealer Conference"><img src="/assets/img/447678157_894079529427163_723884365423827132_nf00c.jpg" alt="Dealer Conference"><div class="cap">Dealer Conference</div></div>
        <div class="gallery-item" data-lightbox data-caption="Dealer Conference"><img src="/assets/img/462118924_989739686527813_6851739494748215527_n31f3.jpg" alt="Dealer Conference"><div class="cap">Dealer Conference</div></div>
        <div class="gallery-item" data-lightbox data-caption="Factory"><img src="/assets/img/dscf1358_1422c.jpg" alt="Factory"><div class="cap">Factory</div></div>
        <div class="gallery-item" data-lightbox data-caption="Factory"><img src="/assets/img/e2085f89c57999946881a821c629421a-crop-u111444cf5.png" alt="Factory"><div class="cap">Factory</div></div>
        <div class="gallery-item" data-lightbox data-caption="Factory"><img src="/assets/img/p7_info_dhakathai-alcomaxx3404.jpg" alt="Factory"><div class="cap">Factory</div></div>
      </div>

      <div class="section-head mt-14">
        <span class="kicker">Video</span>
        <h2>Media Videos</h2>
      </div>
      <div class="grid grid-2">
        <div class="card"><div class="card-body">
          <h3>Introduction In 3 Minutes</h3>
          <p class="text-light-c">DHAKATHAI ALCOMAXX PLC &mdash; Introduction in 3 minutes.</p>
          <button class="video-thumb" @click="playVideoFromEvent" data-video="i0f2fi61ow0" data-title="Introduction In 3 Minutes"><img src="https://i.ytimg.com/vi/i0f2fi61ow0/hqdefault.jpg" alt="Introduction In 3 Minutes" loading="lazy"><span class="video-play"></span><span class="video-tag">Watch on YouTube</span></button>
        </div></div>
        <div class="card"><div class="card-body">
          <h3>Contributing To Bangladesh&rsquo;s Progress</h3>
          <p class="text-light-c">Supplying essential aluminium profiles across the country.</p>
          <button class="video-thumb" @click="playVideoFromEvent" data-video="_k_nH7G99Gc" data-title="Contributing to Bangladesh's progress"><img src="https://i.ytimg.com/vi/_k_nH7G99Gc/hqdefault.jpg" alt="Contributing to Bangladesh's progress" loading="lazy"><span class="video-play"></span><span class="video-tag">Watch on YouTube</span></button>
        </div></div>
        <div class="card"><div class="card-body">
          <h3>Project Showcase</h3>
          <p class="text-light-c">Dhaka Thai Ltd. project showcase.</p>
          <button class="video-thumb" @click="playVideoFromEvent" data-video="074az4Jm_zQ" data-title="Project Showcase"><img src="https://i.ytimg.com/vi/074az4Jm_zQ/hqdefault.jpg" alt="Project Showcase" loading="lazy"><span class="video-play"></span><span class="video-tag">Watch on YouTube</span></button>
        </div></div>
        <div class="card"><div class="card-body">
          <h3>Dhaka Thai Aluminium</h3>
          <p class="text-light-c">An overview of Dhaka Thai aluminium.</p>
          <button class="video-thumb" @click="playVideoFromEvent" data-video="agzY7JFNY5U" data-title="Dhaka Thai Aluminium"><img src="https://i.ytimg.com/vi/agzY7JFNY5U/hqdefault.jpg" alt="Dhaka Thai Aluminium" loading="lazy"><span class="video-play"></span><span class="video-tag">Watch on YouTube</span></button>
        </div></div>
        <div class="card"><div class="card-body">
          <h3>Corporate Video</h3>
          <p class="text-light-c">A look at DHAKATHAI ALCOMAXX PLC.</p>
          <button class="video-thumb" @click="playVideoFromEvent" data-video="HoYVmsSa69w" data-title="Corporate Video"><img src="https://i.ytimg.com/vi/HoYVmsSa69w/hqdefault.jpg" alt="Corporate Video" loading="lazy"><span class="video-play"></span><span class="video-tag">Watch on YouTube</span></button>
        </div></div>
        <div class="card"><div class="card-body">
          <h3>At A Glance</h3>
          <p class="text-light-c">Dhaka Thai Ltd. at a glance.</p>
          <button class="video-thumb" @click="playVideoFromEvent" data-video="Ghc6FpgcjSI" data-title="At a Glance"><img src="https://i.ytimg.com/vi/Ghc6FpgcjSI/hqdefault.jpg" alt="At a Glance" loading="lazy"><span class="video-play"></span><span class="video-tag">Watch on YouTube</span></button>
        </div></div>
        <div class="card"><div class="card-body">
          <h3>Factory Manufacturing Process</h3>
          <p class="text-light-c">DHAKATHAI ALCOMAXX PLC factory manufacturing process.</p>
          <button class="video-thumb" @click="playVideoFromEvent" data-video="3kjoNHvzNrU" data-title="Factory Manufacturing Process"><img src="https://i.ytimg.com/vi/3kjoNHvzNrU/hqdefault.jpg" alt="Factory Manufacturing Process" loading="lazy"><span class="video-play"></span><span class="video-tag">Watch on YouTube</span></button>
        </div></div>
        <div class="card"><div class="card-body">
          <h3>Why Maxx?</h3>
          <p class="text-light-c">What makes MAXX aluminium stand out.</p>
          <button class="video-thumb" @click="playVideoFromEvent" data-video="qaPA08pfHaw" data-title="Why Maxx"><img src="https://i.ytimg.com/vi/qaPA08pfHaw/hqdefault.jpg" alt="Why Maxx" loading="lazy"><span class="video-play"></span><span class="video-tag">Watch on YouTube</span></button>
        </div></div>
        <div class="card"><div class="card-body">
          <h3>Grateful To Our Fabricators</h3>
          <p class="text-light-c">Thanking our valued fabricators.</p>
          <button class="video-thumb" @click="playVideoFromEvent" data-video="f89Qwzayf2U" data-title="Grateful to our Fabricators"><img src="https://i.ytimg.com/vi/f89Qwzayf2U/hqdefault.jpg" alt="Grateful to our Fabricators" loading="lazy"><span class="video-play"></span><span class="video-tag">Watch on YouTube</span></button>
        </div></div>
        <div class="card"><div class="card-body">
          <h3>IAB Build Expo 2023</h3>
          <p class="text-light-c">Dhaka Thai Ltd. program at the IAB Build Expo 2023.</p>
          <button class="video-thumb" @click="playVideoFromEvent" data-video="bvIPx5s0mXU" data-title="IAB Build Expo 2023"><img src="https://i.ytimg.com/vi/bvIPx5s0mXU/hqdefault.jpg" alt="IAB Build Expo 2023" loading="lazy"><span class="video-play"></span><span class="video-tag">Watch on YouTube</span></button>
        </div></div>
        <div class="card"><div class="card-body">
          <h3>IAB Build Expo 2023 - Coverage</h3>
          <p class="text-light-c">More from Dhaka Thai Ltd. at the IAB Build Expo 2023.</p>
          <button class="video-thumb" @click="playVideoFromEvent" data-video="8KbnYhiR9So" data-title="IAB Build Expo 2023 Coverage"><img src="https://i.ytimg.com/vi/8KbnYhiR9So/hqdefault.jpg" alt="IAB Build Expo 2023 Coverage" loading="lazy"><span class="video-play"></span><span class="video-tag">Watch on YouTube</span></button>
        </div></div>
        <div class="card"><div class="card-body">
          <h3>Dealer Conference 2022</h3>
          <p class="text-light-c">Dealer conference 2022, held in 2023.</p>
          <button class="video-thumb" @click="playVideoFromEvent" data-video="2xIttPr0Xww" data-title="Dealer Conference 2022"><img src="https://i.ytimg.com/vi/2xIttPr0Xww/hqdefault.jpg" alt="Dealer Conference 2022" loading="lazy"><span class="video-play"></span><span class="video-tag">Watch on YouTube</span></button>
        </div></div>
        <div class="card"><div class="card-body">
          <h3>Manufacturing Video</h3>
          <p class="text-light-c">Dhaka Thai Ltd. manufacturing video.</p>
          <button class="video-thumb" @click="playVideoFromEvent" data-video="ZvVEh0W6k8Q" data-title="Manufacturing Video"><img src="https://i.ytimg.com/vi/ZvVEh0W6k8Q/hqdefault.jpg" alt="Manufacturing Video" loading="lazy"><span class="video-play"></span><span class="video-tag">Watch on YouTube</span></button>
        </div></div>
        <div class="card"><div class="card-body">
          <h3>Fabricator&rsquo;s Gift Program 2018</h3>
          <p class="text-light-c">Gift program 2018 at International Convention City Bashundhara.</p>
          <button class="video-thumb" @click="playVideoFromEvent" data-video="v4DBfMurQXA" data-title="Fabricator's Gift Program 2018"><img src="https://i.ytimg.com/vi/v4DBfMurQXA/hqdefault.jpg" alt="Fabricator's Gift Program 2018" loading="lazy"><span class="video-play"></span><span class="video-tag">Watch on YouTube</span></button>
        </div></div>
      </div>
    </div>
  </section>
</template>
