<script setup lang="ts">
import { useModal } from '~/composables/useModal'

useSeo({
  title: 'Latest News',
  description: 'Latest news from DHAKATHAI ALCOMAXX PLC - IPO filing, expos, dealer conferences and company announcements.'
})

const { openVideo } = useModal()

const videos = [
  {
    title: 'We are grateful to our fabricators',
    text: "We at Dhaka Thai Alco Maxx PLC appreciate our fabricators' commitment and skill. Thanks to your tireless efforts, we've realized our goals, and we're determined to be there for you at every turn. Together, we create excellence and trust in addition to projects. We appreciate everything you do.",
    id: 'f89Qwzayf2U'
  },
  {
    title: 'Channel 24 Covering - Program at the IAB Build Expo 2023',
    text: 'At the IAB Build Expo 2023, Dhaka Thai Alco Maxx PLC proudly displayed cutting-edge technologies for the building sector. We are pleased that Channel 24 covered this historic occasion, underscoring our dedication to quality and teamwork. We appreciate everyone who stopped by our booth and helped us along the way.',
    id: 'bvIPx5s0mXU'
  },
  {
    title: 'Desh TV - Program at the IAB Build Expo 2023',
    text: 'Dhaka Thai Alco Maxx PLC was proud to be a part of the IAB Build Expo 2023, where our creative contributions to the building sector were highlighted by DESH TV. We are grateful to everyone who stopped by our exhibit and helped us realize our goal of excellence. By working together, we are constructing solutions for a more robust future.',
    id: '8KbnYhiR9So'
  },
  {
    title: 'Dealer Conference 2022 Held in 2023',
    text: 'The Dealer Conference 2022 and 2023 was successfully hosted by Dhaka Thai Alco Maxx PLC and took place in the energetic cities of Dubai and Sri Lanka. This celebration of our esteemed partners promoted closer ties and mutual development. We appreciate our dealers\u2019 continued support as we work together to create excellence.',
    id: '2xIttPr0Xww'
  }
]

function playVideoFromEvent(e: Event) {
  const btn = (e.target || e.currentTarget) as HTMLElement
  const id = btn.getAttribute('data-video') || ''
  const title = btn.getAttribute('data-title') || 'Video'
  openVideo(id, title)
}
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; News</div>
    <div class="container">
      <span class="kicker">Latest News</span>
      <h1>News &amp; Announcements</h1>
      <p>Stay updated with the latest news from DHAKATHAI ALCOMAXX PLC.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="news-grid">

        <article class="card news-feature">
          <div class="card-body">
            <span class="news-tag">IPO</span>
            <h3>Dhakathai Alcomaxx files for going public</h3>
            <p class="news-credit">Infographic: TBS</p>
            <figure class="news-figure">
              <img src="/assets/img/p7_info_dhakathai-alcomaxx3404.jpg" alt="Infographic: Dhakathai Alcomaxx files for going public (TBS)" width="1075" height="495" loading="lazy">
            </figure>
            <p class="text-light-c">Dhakathai Alcomaxx PLC &ndash; a leading manufacturer of aluminium profiles for architectural and industrial purposes &ndash; has filed for raising Tk30 crore through an initial public offering (IPO) to expand its business and meet growing demand in the local market.</p>
            <p class="text-light-c">The company plans to use Tk19 crore for expansion, Tk5 crore for working capital, Tk4.71 crore for loan repayment, and Tk1.28 crore for IPO expenses.</p>
            <p class="text-light-c">According to its application with the Bangladesh Securities and Exchange Commission (BSEC), the manufacturer plans to issue 3 crore shares via the fixed price method.</p>
            <p class="text-light-c">Md Mahfug Alam, company secretary of Dhakathai Alcomaxx, told The Business Standard that the demand for aluminium profiles in Bangladesh is experiencing significant growth, driven by numerous mega projects, rapid urbanisation, and ongoing construction activities.</p>
            <p class="text-light-c">He noted that local companies currently meet 90% of the demand, which is expanding at a rate of 15% to 20% annually, while the remaining 10% is fulfilled through imports from China.</p>
            <p class="text-light-c">Presently, Dhakathai Alcomaxx holds a market share of approximately 20% to 22% in the local aluminium profiles market. The company aims to capitalise on the increasing demand by expanding its market share through the introduction of compliant and high-quality products.</p>
            <p class="text-light-c">From July to December 2023, the company reported revenues of Tk213.96 crore, up from Tk193.09 crore in the same period the previous year. Its net profit after tax increased by 16% to Tk7.35 crore, up from Tk6.33 crore year-over-year.</p>
            <p class="text-light-c">Earnings per share for the period were Tk0.55, and the net asset value per share stood at Tk11.32 as of December 2023. Prime Bank Investment Limited is serving as the issue manager for the company.</p>
            <p class="text-light-c">Founded in 1997 through a collaboration of local and international entrepreneurs, Dhakathai Alcomaxx is led by Kareem Din, who serves as the director and chairman with 26 years of experience in the aluminium industry.</p>
            <p class="text-light-c">Industry experts have highlighted substantial investments totalling approximately Tk1,000 crore in Bangladesh's aluminium extrusion sector. The market demand for aluminium profiles is nearly 60,000 tonnes annually. Currently, 10 local companies together satisfy 90% of the domestic demand for these products. Key players include KAI Bangladesh Aluminium, Dhaka Thai, PHP Group, Chung Hua Aluminium Industry, Bangladesh Thai Aluminium Ltd, and Nikki Thai Aluminium Ltd. The sector employs approximately 30,000 people.</p>
            <p class="mt-4"><a href="https://www.tbsnews.net/economy/stocks/dhakathai-alcomaxx-files-going-public-899586" target="_blank" rel="noopener" class="btn btn-dark">Online News Link (TBS)</a></p>
          </div>
        </article>

        <div class="news-side">
          <div v-for="video in videos" :key="video.id" class="card news-item">
            <div class="card-body">
              <h3>{{ video.title }}</h3>
              <p class="text-light-c">{{ video.text }}</p>
              <button
                class="video-thumb"
                type="button"
                :data-video="video.id"
                :data-title="video.title"
                @click="playVideoFromEvent"
              >
                <img :src="`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`" :alt="video.title" loading="lazy">
                <span class="video-play"></span>
                <span class="video-tag">Watch on YouTube</span>
              </button>
            </div>
          </div>
        </div>

      </div>
      <p class="text-center mt-10 text-light-c">See more photos and videos in the <NuxtLink to="/media">media gallery</NuxtLink>, or read the <NuxtLink to="/investors-relation">investor relations</NuxtLink> disclosures.</p>
    </div>
  </section>
</template>

<style scoped>
.news-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: 28px;
  align-items: start;
}
.news-feature .card-body { padding: 30px; }
.news-feature h3 { font-size: 1.5rem; margin-bottom: 4px; }
.news-tag {
  display: inline-block;
  margin-bottom: 12px;
  padding: 4px 12px;
  border-radius: 999px;   background: rgba(5, 166, 75, 0.12);
  color: var(--accent-dark);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.news-credit {
  font-style: italic;
  font-size: 0.86rem;
  color: var(--text-light);
  margin-bottom: 18px;
}
.news-figure {
  margin: 0 0 22px;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--light-2);
  background: var(--light);
  box-shadow: var(--shadow-sm);
}
.news-figure img {
  display: block;
  width: 100%;
  height: auto;
}
.news-feature .text-light-c { margin-bottom: 14px; }
.news-side {
  display: grid;
  gap: 22px;
}
.news-item .card-body { padding: 24px; }
.news-item h3 { font-size: 1.08rem; }
.news-item .text-light-c { font-size: 0.92rem; }
@media (max-width: 1024px) {
  .news-grid { grid-template-columns: 1fr; }
}
@media (max-width: 620px) {
  .news-feature .card-body,
  .news-item .card-body { padding: 20px; }
}
</style>
