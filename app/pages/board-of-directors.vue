<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'Board of Directors',
  meta: [{ name: 'description', content: 'Meet the Board of Directors of DHAKATHAI ALCOMAXX PLC - experienced leaders of the aluminium industry.' }]
})

const selectedDirector = ref(null)

const directors = [
  {
    name: 'Mr. Kareem Din',
    role: 'Chairman',
    img: '/assets/img/01 mr kareem din - chairmanfb31.jpg',
    bio: 'Mr. Kareem Din is a highly accomplished and visionary business leader with a proven track record of success in navigating companies to unprecedented growth and profitability. He serves as a Chairman of the company, bringing with him 31 years of experience in the Aluminium Profile Industry. Additionally, Mr. Kareem Din holds the position of Chairman at Dalco Building Systems Ltd and Panache (Pvt) Ltd. He is committed to enhancing the overall industry and contributing to the development of good organizational practices. He completed his MBA in Finance from Florida International University, USA.'
  },
  {
    name: 'Mr. Md. Soleman Molla',
    role: 'Vice Chairman',
    img: '/assets/img/02 mr md soleman molla - vice chairman287f.jpg',
    bio: 'Mr. Md. Soleman Molla is the Vice Chairman of Dhakathai Alcomaxx PLC. He has more than 25 years of working experience in the Aluminium Industry of Bangladesh. He completed HSC from Kabi Nazrul Govt. College and University. After completing his studies he joined his father&#8217;s business and later joined Dhaka Thai Ltd in the year 2003. Additionally, Mr. Md. Soleman Molla holds the position of Managing Director at Molla Adib Mohammad Limited and Proprietor of Adib Enterprise. He is an entrepreneurial mindset with good marketing network and better insight into the aluminium industry of Bangladesh.'
  },
  {
    name: 'Brigadier General Sharif Aziz, PSC (retd)',
    role: 'Director',
    img: '/assets/img/04 mr sharif aziz - director35b2.jpg',
    bio: 'Brigadier General Sharif Aziz, PSC (retd) is one of the renowned officers of the Bangladesh Army. After retirement he serves as a Director of the company, bringing with him 26 years of experience in the Aluminium Industry. Additionally, he holds the position of Managing Director at Elite Security Services Limited, Elite Logistic Services Limited and Director of Kai Aluminium Bangladesh Limited. He achieved distinction in a number of courses in intelligence &amp; security and was awarded the prestigious symbol of &#8216;PSC&#8217; from the Malaysian Armed Forces Staff College in 1981. He is also a graduate of Resource Management Centre, California, U.S.A. and took a Mid-Level Management Course from Institute of Public Administration, Malaysia. He led the Bangladesh Military Delegation to Pacific Management Seminar in 1992, held in Hawaii, U.S.A. He was invited by the Netherlands Government to attend a 3 weeks Export, Marketing and Management Seminar by CBI in 1994 (Centre for Promotion of Imports from Developing Countries).'
  },
  {
    name: 'Mr. Noordin Charania',
    role: 'Director',
    img: '/assets/img/05 mr noordin charania - director1d66.jpg',
    bio: 'Mr. Noordin Charania is a highly experienced professional with 40 years of expertise in the field of Aluminium Extrusions. He holds a degree in Mechanical Engineering from the United States, providing him with a strong technical foundation. Throughout his career, Mr. Charania has demonstrated exceptional leadership and industry knowledge, contributing significantly to the growth and success of Dhakathai Alcomaxx PLC. As Director, he plays a pivotal role in guiding the company&#8217;s strategic direction and ensuring its continued excellence in the aluminium extrusions industry.'
  },
  {
    name: 'Mr. Saleem Ahmed',
    role: 'Director',
    img: '/assets/img/06 mr saleem ahmed - director9df0.jpg',
    bio: 'Mr. Saleem Ahmed is the Director of Dhakathai Alcomaxx PLC. He has 33 years&#8217; experience in the field of Aluminium Extrusions. He completed B.Com. Economics from Lahore Govt. College of Commerce in Pakistan. He has worked in various capacities, heading sales and marketing all over Pakistan for an industry based in Karachi, Pakistan. Since 1997 he has been associated with Metal Extrusions Ltd and, from its inception, with Dhaka Thai Ltd. Designing layouts and installation of all machineries in Dhaka Thai were carried out under his supervision.'
  },
  {
    name: 'Mrs. Husna Din',
    role: 'Director',
    img: '/assets/img/07 mrs husna din - director7c3a.jpg',
    bio: 'Mrs. Husna Din is the Director of Dhakathai Alcomaxx PLC. She has 26 years&#8217; experience in the field of Aluminium Industry. She completed Bachelor of Arts (B.A) from Saint Joseph&#8217;s College in Pakistan. Since 1997, Mrs. Din has played a pivotal role as Sponsor Director at Dhakathai Alcomaxx PLC, contributing to the company&#8217;s strategic growth and success.'
  },
  {
    name: 'Mr. Karim Kamaluddin Charania',
    role: 'Director',
    img: '/assets/img/08 mr karim kamaluddin charania - director17a8.jpg',
    bio: 'Mr. Karim Kamaluddin Charania is the Director of Dhakathai Alcomaxx PLC. He has 23 years of experience in the field of Aluminium Extrusions and buying operations. From the very beginning he has been involved with the family business of Metals &#8212; the family is pioneer in the metal business since 1947 in Karachi by the name of Charania (Group) Metals. After receiving high school education from USA, he moved to Bangladesh and completed Bachelor of Business Administration (BBA) in Finance and Marketing from North South University. After fulfillment of studies, he started a Garment Buying House exporting to EU / USA &amp; Canadian markets and is involved in Dhakathai Alcomaxx PLC as a Director of the company.'
  },
  {
    name: 'Mr. Sulaiman S. Ajanee',
    role: 'Independent Director',
    img: '/assets/img/09 mr sulaiman s ajanee - independent directorbe19.jpg',
    bio: 'Mr. Sulaiman S. Ajanee is one of the Independent Directors of Dhakathai Alcomaxx PLC. He holds an Associate in Engineering from California, USA. Formerly he was Chairman of Industrial Promotion and Development Company (IPDC) and Managing Director of World Com. Ltd. Now he is working as Managing Partner of Standard Finis Oil Co. He has experience in the fields of Manufacturing, Trading, Retail, Marketing, Distribution, Banking, Import and Export. He is involved in manufacturing of Household Insecticides and Disinfectants, Pharmaceuticals, Audio Cassettes, Compact Discs, Digital Versatile Discs, Plastic Injection Molding and Photo Labs.'
  },
  {
    name: 'Mr. Zeeshan Hasib',
    role: 'Independent Director',
    img: '/assets/img/10 mr zeeshan hasib - independent director9c43.jpg',
    bio: 'Mr. Zeeshan Hasib has a long 26-years experience in the financial sector including 18 years as a Corporate Banker. Mr. Hasib is a certified &#8216;Credit Professional&#8217; accorded by Omega UK and a &#8216;Trade Professional&#8217; conferred by Standard Chartered Bank, UK. Mr. Hasib started his career in 1998 and has worked in various senior positions within Corporate Banking at The Hongkong and Shanghai Banking Corporation (HSBC), Standard Chartered Bank, Soci&amp;eacute;t&amp;eacute; G&amp;eacute;n&amp;eacute;rale and NRB Bank Limited. Mr. Hasib holds an MBA from The Colorado State University, USA.'
  }
]

function openDirector(d) {
  selectedDirector.value = d
}
function closeDirector() {
  selectedDirector.value = null
}
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

  <section class="section">
    <div class="container">
      <div class="grid grid-3">
        <div
          v-for="d in directors"
          :key="d.name"
          class="card team-card"
        >
          <div class="card-img"><img :src="d.img" :alt="d.name"></div>
          <h3>{{ d.name }}</h3>
          <div class="role">{{ d.role }}</div>
          <button class="btn btn-dark mt-2" @click="openDirector(d)">View Details</button>
        </div>
      </div>
    </div>
  </section>

  <Teleport to="body">
    <div class="modal" :class="{ open: !!selectedDirector }" @click.self="closeDirector" v-if="selectedDirector">
      <div class="modal-box director-modal" style="width:100%;max-width:950px;max-height:92vh;background:var(--white);border-radius:var(--radius-lg);box-shadow:var(--shadow-xl);display:flex;flex-direction:column;overflow:hidden;">
        <button class="modal-close" aria-label="Close" style="position:absolute;top:20px;right:28px;background:none;border:none;font-size:2.2rem;cursor:pointer;color:var(--primary-dark);z-index:3;" @click="closeDirector">&times;</button>
        <div class="modal-body" style="flex:1 1 auto;overflow-y:auto;padding:32px;">
          <div class="director-content" style="display:grid;grid-template-columns:1fr 2fr;gap:36px;align-items:start;">
            <div class="director-image">
              <img :src="selectedDirector.img" :alt="selectedDirector.name" style="width:100%;height:480px;object-fit:cover;border-radius:var(--radius-sm);box-shadow:var(--shadow-xl);background:var(--light-2);">
            </div>
            <div class="director-details">
              <div>
                <strong style="font-size:1.4rem;display:block;color:var(--primary-dark);">{{ selectedDirector.name }}</strong>
                <div style="font-size:1rem;opacity:0.85;margin-top:6px;letter-spacing:0.06em;text-transform:uppercase;color:var(--accent-dark);font-weight:700;">{{ selectedDirector.role }}</div>
              </div>
              <p style="white-space:pre-line;line-height:1.85;color:var(--text);font-size:1.08rem;margin-top:18px;">{{ selectedDirector.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
