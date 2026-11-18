<script setup lang="ts">
useSeo({
  title: 'DHAKATHAI ALCOMAXX PLC - Best Aluminum Company in Bangladesh',
  description: "DHAKATHAI ALCOMAXX PLC - Bangladesh's largest aluminium extrusion company. Manufacturer of quality aluminium profiles since 1997.",
  titleTemplate: null
})

const heroIndex = ref(0)
const { openVideo, openLightbox } = useModal()
const heroSlides = [
  {
    src: '/assets/img/dhakathai alcomaxx plc factorya2d6.jpg',
    name: 'DHAKATHAI ALCOMAXX PLC Factory',
    detail: 'Ashulia, Savar — Aluminium Extrusion Plant'
  },
  {
    src: '/assets/img/01 radison bay view hotele03c.jpg',
    name: 'Radisson Bay View Hotel',
    detail: 'Chattogram — Architectural Aluminium Profiles'
  },
  {
    src: '/assets/img/04-dhaka-metro-railfc4e.jpg',
    name: 'Dhaka Metro Rail',
    detail: 'Dhaka — Metro Rail Aluminium Sections'
  }
]

const currentSlide = computed(() => heroSlides[heroIndex.value])

function nextSlide() { heroIndex.value = (heroIndex.value + 1) % heroSlides.length }
function prevSlide() { heroIndex.value = (heroIndex.value - 1 + heroSlides.length) % heroSlides.length }

function showSlideDetail() {
  const { src, name, detail } = currentSlide.value
  openLightbox(src, name, detail)
}

let interval: ReturnType<typeof setInterval>
onMounted(() => {
  interval = setInterval(() => {
    heroIndex.value = (heroIndex.value + 1) % heroSlides.length
  }, 6000)
})
onBeforeUnmount(() => clearInterval(interval))

let revealObserver: IntersectionObserver | null = null

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') return
  const cards = Array.from(
    document.querySelectorAll<HTMLElement>(
      '.features-grid .feature-card, .quality-features .quality-feature, .grid .project-card'
    )
  )
  if (!cards.length) return

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-in')
        revealObserver?.unobserve(entry.target)
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  )

  cards.forEach((card, i) => {
    card.style.setProperty('--reveal-delay', `${(i % 4) * 80}ms`)
    card.classList.add('is-reveal')
    revealObserver?.observe(card)
  })
})

onBeforeUnmount(() => {
  revealObserver?.disconnect()
  revealObserver = null
})
</script>

<template>
  <section class="hero" id="home-hero">
    <div class="hero-bg">
      <img
        v-for="(slide, i) in heroSlides"
        :key="i"
        class="hero-slide-img"
        :class="{ active: i === heroIndex }"
        :src="slide.src"
        :alt="slide.name"
      >

    </div>
    <div class="hero-caption">
      <span>{{ currentSlide.name }}</span>
      <button class="hero-caption-link" type="button" @click="showSlideDetail">See detail</button>
    </div>
    <button class="hero-nav hero-prev" @click="prevSlide" aria-label="Previous slide">&#10094;</button>
    <button class="hero-nav hero-next" @click="nextSlide" aria-label="Next slide">&#10095;</button>
  </section>

  <section class="section hero-intro anim-gradient" id="home-intro">
    <GradientBackdrop />
    <div class="container">
      <div class="hero-content">
        <span class="hero-kicker">Since 1997 &bull; Aluminium Extrusion Leader</span>
        <div class="hero-headline">
          <h1>We are the <em>largest</em> aluminium extrusion company in Bangladesh</h1>
        </div>
        <p>We understand the needs of our customers and provide innovative solutions to their processes, through the provision of top class facilities, support and services and by adopting strict quality control measures in order to consistently deliver good quality products.</p>
        <div class="hero-cta">
          <NuxtLink to="/about" class="btn btn-primary">About Us</NuxtLink>
          <NuxtLink to="/products" class="btn btn-solid-light">Explore Products</NuxtLink>
          <NuxtLink to="/manufacturing" class="btn btn-solid-light">Our Manufacturing</NuxtLink>
        </div>
      </div>
    </div>
    <div class="container hero-stats">
      <div class="hs"><div class="hs-num">8</div><div class="hs-label">Extrusion Presses</div></div>
      <div class="hs"><div class="hs-num">1997</div><div class="hs-label">Serving Since</div></div>
      <div class="hs"><div class="hs-num">100%</div><div class="hs-label">Bangladesh Coverage</div></div>
      <div class="hs"><div class="hs-num">64+</div><div class="hs-label">Dealer Networks</div></div>
      <div class="hs"><div class="hs-num">20-22%</div><div class="hs-label">Market Share</div></div>
    </div>
  </section>

  <section class="section" id="home-features">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Key Features</span>
        <h2>Why Choose DHAKATHAI?</h2>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8.5 12.4l2.4 2.4 4.6-5" /></svg>
          </div>
          <div>
            <h3>Premium Quality</h3>
            <p>BS 1474, ASTM &amp; BSTI certified profiles</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20V10l5 3v-3l5 3v-3l5 3v7z" /><path d="M3 20h18" /><path d="M8 16h1.5M14 16h1.5" /></svg>
          </div>
          <div>
            <h3>Advanced Manufacturing</h3>
            <p>8 extrusion presses with hot log shear technology</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.4 2.5 3.7 5.6 3.7 9s-1.3 6.5-3.7 9c-2.4-2.5-3.7-5.6-3.7-9S9.6 5.5 12 3z" /></svg>
          </div>
          <div>
            <h3>Nationwide Reach</h3>
            <p>Dealers across all 8 divisions of Bangladesh</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5.5c0 4.4-3 7.9-7 9.5-4-1.6-7-5.1-7-9.5V6z" /><path d="M9 12.2l2 2 4-4" /></svg>
          </div>
          <div>
            <h3>Quality Assurance</h3>
            <p>Rigorous testing at every stage of production</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-video anim-gradient" id="intro-video">
    <GradientBackdrop />
    <div class="container">
      <div class="video-cta">
        <div class="video-cta-text">
          <span class="kicker">Watch</span>
          <h2>INTRODUCTION IN 3 MINUTES</h2>
          <p>Get to know DHAKATHAI ALCOMAXX PLC &mdash; our story, our people and our manufacturing strength, in just three minutes.</p>
          <NuxtLink class="btn btn-primary" to="/media">Watch More Videos</NuxtLink>
        </div>
        <a class="video-cta-play" href="/media" aria-label="Play introduction video" @click.prevent="openVideo('i0f2fi61ow0', 'Introduction In 3 Minutes')">
          <span class="play-icon" aria-hidden="true"></span>
          <span class="play-label">Play Video</span>
        </a>
      </div>
    </div>
  </section>

  <section class="section" id="at-a-glance">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Dhakathai at a Glance</span>
        <h2>Advanced Technology &amp; Nationwide Reach</h2>
      </div>
      <div class="glance-grid">
        <div class="glance-card">
          <img src="/assets/img/icon-advance-technology.jpg" alt="Advance Technology">
          <h3>Advance Technology</h3>
          <p>We understand the needs of our customers and provide innovative solutions through top class facilities, support and services, with strict quality control measures to consistently deliver good quality products.</p>
        </div>
        <div class="glance-card">
          <img src="/assets/img/icon-manufacturing.jpg" alt="Manufacturing">
          <h3>Manufacturing</h3>
          <p>We are proud to be the only company in Bangladesh which caters to extremely diverse market segments, committed to providing quality products and superior customer service.</p>
        </div>
        <div class="glance-card">
          <img src="/assets/img/icon-supply.jpg" alt="Sales Network">
          <h3>Sales Network &amp; Dealer's List</h3>
          <p>Our well integrated dealership network is strategically located throughout Bangladesh &mdash; Dhaka, Chittagong, Jassore, Bogura, Khulna, Sylhet, Rongpur and more &mdash; serving customers and dealers efficiently.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="certifications">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Certifications</span>
        <h2>Certified &amp; Accredited</h2>
        <p>ISO 9001:2015 certified and recognized by leading industry bodies.</p>
      </div>
      <div class="cert-strip">
        <h3 class="cert-label">Certified By</h3>
        <div class="cert-logos">
          <img src="/assets/img/cert-1.png" alt="Certification 1">
          <img src="/assets/img/cert-2.png" alt="Certification 2">
          <img src="/assets/img/cert-3.png" alt="Certification 3">
          <img src="/assets/img/cert-sms-demag.png" alt="SMS Demag">
        </div>
      </div>
      <div class="cert-banner">
        <img src="/assets/img/cert-alco.jpg" alt="ISO 9001:2015 Certified, BSTI, BUET, Aluminum Extruders Council and The Aluminum Association">
      </div>
    </div>
  </section>

  <section class="section section-primary anim-gradient">
    <GradientBackdrop />
    <div class="container">
      <div class="section-head">
        <span class="kicker">End to End Process</span>
        <h2>Manufacturing Process</h2>
        <p>From raw ingot to finished profile - every step is executed with precision in our factory at Ashulia, Savar, Dhaka.</p>
      </div>
      <div class="flow">
        <NuxtLink to="/manufacturing-billet-casting" class="flow-item">
          <div class="step">01</div>
          <h4>Casting</h4>
        </NuxtLink>
        <NuxtLink to="/manufacturing-extrusion-presses" class="flow-item">
          <div class="step">02</div>
          <h4>Extruding</h4>
        </NuxtLink>
        <NuxtLink to="/manufacturing-aging-tempering-oven" class="flow-item">
          <div class="step">03</div>
          <h4>Tempering</h4>
        </NuxtLink>
        <NuxtLink to="/manufacturing-anodizing-section" class="flow-item">
          <div class="step">04</div>
          <h4>Anodizing</h4>
        </NuxtLink>
        <NuxtLink to="/manufacturing-powder-coating-plant" class="flow-item">
          <div class="step">05</div>
          <h4>Powder Coating</h4>
        </NuxtLink>
        <NuxtLink to="/manufacturing-wooden-finish" class="flow-item">
          <div class="step">06</div>
          <h4>Wooden Finish</h4>
        </NuxtLink>
        <NuxtLink to="/manufacturing-quality-inspection" class="flow-item">
          <div class="step">07</div>
          <h4>Quality Inspection</h4>
        </NuxtLink>
        <NuxtLink to="/manufacturing-packaging" class="flow-item">
          <div class="step">08</div>
          <h4>Packaging</h4>
        </NuxtLink>
        <NuxtLink to="/manufacturing-warehousing-and-delivery" class="flow-item">
          <div class="step">09</div>
          <h4>Warehousing</h4>
        </NuxtLink>
      </div>
      <div class="text-center mt-10">
        <NuxtLink to="/manufacturing" class="btn btn-primary">Explore Manufacturing</NuxtLink>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">What We Offer</span>
        <h2>Product Range</h2>
        <p>Comprehensive aluminium profiles for every application - architectural, industrial, hardware, furniture, electrical and more.</p>
      </div>
      <div class="grid grid-3" id="productGrid">
        <div class="card product-card" data-cat="architectural">
          <div class="card-img"><img src="/assets/img/sliding-patio-doors-crop-u79740a29.png" alt="Architectural profiles"></div>
          <div class="card-body">
            <h3>Architectural Profiles</h3>
            <p>Windows, doors, curtain walls, sliding &amp; casement systems, stick wall and semi-unitized series.</p>
            <NuxtLink class="btn btn-dark mt-2" to="/products-architectural">View Range</NuxtLink>
          </div>
        </div>
        <div class="card product-card" data-cat="industrial">
          <div class="card-img"><img src="/assets/img/industrial-profile-icon6986.png" alt="Industrial profiles"></div>
          <div class="card-body">
            <h3>Industrial Profiles</h3>
            <p>Automobile section, textile, ladder, signboard, heat sinks, busbars and custom industrial sections.</p>
            <NuxtLink class="btn btn-dark mt-2" to="/products-industrial">View Range</NuxtLink>
          </div>
        </div>
        <div class="card product-card" data-cat="furniture">
          <div class="card-img"><img src="/assets/img/img_16890871.jpg" alt="Furniture profiles"></div>
          <div class="card-body">
            <h3>Furniture &amp; Office Partition</h3>
            <p>Office furniture, partitions, vertical &amp; roller blinds, shower sections and home furniture profiles.</p>
            <NuxtLink class="btn btn-dark mt-2" to="/products-furniture">View Range</NuxtLink>
          </div>
        </div>
        <div class="card product-card" data-cat="hardware">
          <div class="card-img"><img src="/assets/img/hardware9278.jpg" alt="Hardware profiles"></div>
          <div class="card-body">
            <h3>Hardware &amp; Bazaar</h3>
            <p>Angles, U channels, I beams, round &amp; corrugated pipes, bazar section and showcase profiles.</p>
            <NuxtLink class="btn btn-dark mt-2" to="/products-hardware">View Range</NuxtLink>
          </div>
        </div>
        <div class="card product-card" data-cat="electrical">
          <div class="card-img"><img src="/assets/img/orgsize_174t8-led-tube-light-1200mm-3528-smdjpgfdc4.gif" alt="Electrical profiles"></div>
          <div class="card-body">
            <h3>Electrical</h3>
            <p>LED light profiles, general heatsinks, connectors, busbar, flat bar, rod and solar structures.</p>
            <NuxtLink class="btn btn-dark mt-2" to="/products-electrical">View Range</NuxtLink>
          </div>
        </div>
        <div class="card product-card" data-cat="others">
          <div class="card-img"><img src="/assets/img/toyota_coaster-500x500c0f4.jpg" alt="Automobile profiles"></div>
          <div class="card-body">
            <h3>Automobile &amp; Railway</h3>
            <p>Coaster, decorative, railways and customized profiles for transportation and special applications.</p>
            <NuxtLink class="btn btn-dark mt-2" to="/products-others">View Range</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-light">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Selected Projects</span>
        <h2>Signature Projects Across Bangladesh</h2>
        <p>Trusted by landmark projects including metros, power plants, commercial towers and government institutions.</p>
      </div>
      <div class="grid grid-4">
        <div class="card project-card">
          <div class="card-img"><img src="/assets/img/01 radison bay view hotele03c.jpg" alt="Radisson Bay View Hotel, Chittagong"></div>
          <div class="card-body"><h3>Radisson Bay View Hotel</h3><p>Chittagong</p></div>
        </div>
        <div class="card project-card">
          <div class="card-img"><img src="/assets/img/04-dhaka-metro-railfc4e.jpg" alt="Dhaka Metro Rail MRT Line 6"></div>
          <div class="card-body"><h3>Dhaka Metro Rail (MRT Line 6)</h3><p>Dhaka</p></div>
        </div>
        <div class="card project-card">
          <div class="card-img"><img src="/assets/img/17-bangladesh-garment-manufacturers-and-exporters-associationexporters-association-(bgmea)8525.jpg" alt="BGMEA"></div>
          <div class="card-body"><h3>BGMEA</h3><p>Uttara, Dhaka</p></div>
        </div>
        <div class="card project-card">
          <div class="card-img"><img src="/assets/img/16-sena-bhabande35.jpg" alt="Sena Bhaban"></div>
          <div class="card-body"><h3>Sena Bhaban</h3><p>Dhaka</p></div>
        </div>
        <div class="card project-card">
          <div class="card-img"><img src="/assets/img/09-sajbati-(-windy-group-)-crop-u3125905fc.png" alt="Sajbati Windy Group"></div>
          <div class="card-body"><h3>Sajbati (Windy Group)</h3><p>Mohakhali DOHS, Dhaka</p></div>
        </div>
        <div class="card project-card">
          <div class="card-img"><img src="/assets/img/02-almas-point8f6d.jpg" alt="Almas Point"></div>
          <div class="card-body"><h3>Almas Point</h3><p>Narayangonj</p></div>
        </div>
        <div class="card project-card">
          <div class="card-img"><img src="/assets/img/08-kepz30aa.jpg" alt="KEPZ"></div>
          <div class="card-body"><h3>KEPZ</h3><p>Chittagong</p></div>
        </div>
        <div class="card project-card">
          <div class="card-img"><img src="/assets/img/21-navana-yusuf-infinity6942.jpg" alt="Navana Yusuf Infinity"></div>
          <div class="card-body"><h3>Navana Yusuf Infinity</h3><p>Dhaka</p></div>
        </div>
      </div>
      <div class="text-center mt-10">
        <NuxtLink to="/projects-image" class="btn btn-dark">View All Projects</NuxtLink>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Latest News</span>
        <h2>Dhakathai in the News</h2>
      </div>
      <div class="grid grid-3">
        <div class="card">
          <div class="card-body">
            <h3>Dhakathai Alcomaxx files for going public</h3>
            <p class="text-light-c">Dhakathai Alcomaxx PLC has filed for raising Tk30 crore through an initial public offering (IPO) to expand its business and meet growing demand in the local market...</p>
            <NuxtLink class="btn btn-dark mt-2" to="/news">Read More</NuxtLink>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h3>We are grateful to our fabricators</h3>
            <p class="text-light-c">We at Dhaka Thai Alco Maxx PLC appreciate our fabricators' commitment and skill. Thanks to your tireless efforts, we've realized our goals...</p>
            <NuxtLink class="btn btn-dark mt-2" to="/news">Read More</NuxtLink>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h3>IAB Build Expo 2023</h3>
            <p class="text-light-c">At the IAB Build Expo 2023, Dhaka Thai Alco Maxx PLC proudly displayed cutting-edge technologies for the building sector, covered by Channel 24 and Desh TV...</p>
            <NuxtLink class="btn btn-dark mt-2" to="/news">Read More</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="newsletter">
    <div class="nl-card">
      <GradientBackdrop />
      <div class="nl-text">
        <h2>Stay Updated With DHAKATHAI</h2>
        <p>Get the latest products, catalogues and company news directly in your inbox.</p>
      </div>
      <form class="nl-form" @submit.prevent="alert('Thank you for subscribing!')">
        <input
          type="email"
          placeholder="Your email address"
          required
          aria-label="Email address"
        >
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </section>

  <section class="section section-light">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Quality Commitment</span>
        <h2>Our Standards</h2>
        <p>BS 1474, ASTM B221, BS 3987 and AAMA 611-98 Class 1 standards. Every profile undergoes rigorous testing for durability and performance.</p>
      </div>
      <div class="quality-features">
        <div class="quality-feature">
          <div class="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8.5 12.4l2.4 2.4 4.6-5" /></svg>
          </div>
          <div>
            <h3>BS 1474 Certified</h3>
            <p>British Standard for aluminum extrusion profiles</p>
          </div>
        </div>
        <div class="quality-feature">
          <div class="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8.5 12.4l2.4 2.4 4.6-5" /></svg>
          </div>
          <div>
            <h3>ASTM Compliant</h3>
            <p>ASTM B221 standards for aluminum alloy profiles</p>
          </div>
        </div>
        <div class="quality-feature">
          <div class="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8.5 12.4l2.4 2.4 4.6-5" /></svg>
          </div>
          <div>
            <h3>BSTI Approved</h3>
            <p>Bangladesh Standards and Testing Institute</p>
          </div>
        </div>
        <div class="quality-feature">
          <div class="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M8.5 12.4l2.4 2.4 4.6-5" /></svg>
          </div>
          <div>
            <h3>AAMA Rated</h3>
            <p>American Architectural Manufacturers Association</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-intro {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
  color: var(--white);
  padding: 56px 0;
  position: relative;
  overflow: hidden;
  width: 100%;
}
.hero-intro::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -20%;
  width: 60%;
  height: 200%;   background: radial-gradient(circle, rgba(5, 166, 75, 0.06) 0%, transparent 60%);
  pointer-events: none;
}
.hero-intro .hero-content {
  max-width: 1120px;
  margin: 0 auto;
  text-align: center;
  padding: 32px 20px 0;
}
.hero-intro .hero-kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  color: var(--white);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 9px 22px;
  border-radius: 999px;
  margin-bottom: 0;
  border: 1px solid rgba(255, 255, 255, 0.14);
  -webkit-text-fill-color: var(--white);
}
.hero-intro .hero-kicker::before {
  content: "";
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
  flex-shrink: 0;   box-shadow: 0 0 0 3px rgba(5, 166, 75, 0.25);
}
.hero-intro .hero-headline {
  margin: 24px auto 0;
  max-width: 1200px;
}
.hero-intro h1 {
  color: var(--white);
  font-size: clamp(2.3rem, 5.2vw, 4.3rem);
  font-weight: 800;
  margin: 0;
  letter-spacing: -0.03em;
  line-height: 1.04;
  text-transform: none;
  text-wrap: balance;
}
.hero-intro h1 em {
  font-style: normal;
  font-weight: 800;
  color: var(--accent-light);
  background: linear-gradient(92deg, #2fd47f 0%, #05a64b 42%, #9af3c3 72%, #05a64b 100%);
  background-size: 220% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: headline-sheen 7s linear infinite;
}
@keyframes headline-sheen {
  from { background-position: 0% 50%; }
  to { background-position: 220% 50%; }
}
.hero-intro p {
  font-size: clamp(1rem, 1.8vw, 1.18rem);
  color: rgba(228, 235, 244, 0.92);
  margin: 0 auto 48px;
  max-width: 760px;
  line-height: 1.7;
  font-weight: 400;
}
.hero-intro .hero-cta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 0;
}
.hero-intro .btn.btn-solid-light {
  background: #fff;
  color: var(--primary-dark);
  border: 1px solid #fff;
}
.hero-intro .btn.btn-solid-light:hover {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}
.hero-intro .hero-stats {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 22px;
  padding: 48px 20px 10px;
}
.hero-intro .hs {
  text-align: center;
  padding: 14px 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  transition: var(--transition);
}
.hero-intro .hs:hover {
  background: rgba(255, 255, 255, 0.06);   border-color: rgba(5, 166, 75, 0.25);
}
.hero-intro .hs-num {
  display: block;
  font-size: clamp(1.7rem, 3.1vw, 2.2rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.05;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}
.hero-intro .hs-label {
  font-size: 0.66rem;
  color: rgba(228, 235, 244, 0.7);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 4px;
  line-height: 1.2;
  display: block;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 60px 20px 0;
}
.features-grid .feature-card {
  position: relative;
  text-align: left;
  padding: 32px 26px 30px;
  background: var(--white);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: var(--transition);
}
.features-grid .feature-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #05a64b, #2fd47f, #037334, #05a64b);
  background-size: 200% 100%;
  transition: width 0.45s cubic-bezier(0.2, 0.8, 0.3, 1);
}
.features-grid .feature-card::after {
  content: "";
  position: absolute;
  right: -40px;
  bottom: -60px;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(5, 166, 75, 0.14), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}
.features-grid .feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(5, 166, 75, 0.28);
}
.features-grid .feature-card:hover::before {
  width: 100%;
  animation: card-rule-x 2.6s linear infinite;
}
.features-grid .feature-card:hover::after { opacity: 1; }
.features-grid .feature-card .feature-icon {
  width: 54px;
  height: 54px;
  margin: 0 0 18px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(5, 166, 75, 0.16), rgba(5, 166, 75, 0.04));
  color: var(--accent-dark);
  font-size: 1.4rem;
  box-shadow: inset 0 0 0 1px rgba(5, 166, 75, 0.18);
  transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.3, 1), box-shadow 0.45s ease;
}
.features-grid .feature-card:hover .feature-icon {
  transform: translateY(-2px) rotate(-6deg) scale(1.06);
  box-shadow: inset 0 0 0 1px rgba(5, 166, 75, 0.35), 0 10px 22px rgba(5, 166, 75, 0.18);
}
.features-grid .feature-card h3 {
  font-size: 1.02rem;
  letter-spacing: 0.01em;
  margin-bottom: 8px;
}
.features-grid .feature-card p {
  font-size: 0.86rem;
  line-height: 1.6;
  margin: 0;
}
.features-grid .feature-icon svg,
.quality-feature .feature-icon svg {
  width: 24px;
  height: 24px;
  display: block;
}
.quality-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 44px;
}
.quality-feature {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: var(--white);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: var(--radius);
  padding: 24px 22px;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: var(--transition);
}
.quality-feature::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  background: linear-gradient(180deg, #05a64b, #2fd47f, #037334, #05a64b);
  background-size: 100% 200%;
  transition: width 0.4s cubic-bezier(0.2, 0.8, 0.3, 1);
}
.quality-feature:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(5, 166, 75, 0.28);
}
.quality-feature:hover::before {
  width: 3px;
  animation: card-rule-y 2.6s linear infinite;
}
.quality-feature .feature-icon {
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  margin: 0;
  border-radius: 12px;
  font-size: 1.15rem;
  background: linear-gradient(135deg, rgba(5, 166, 75, 0.16), rgba(5, 166, 75, 0.04));
  color: var(--accent-dark);
  box-shadow: inset 0 0 0 1px rgba(5, 166, 75, 0.18);
  transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.3, 1);
}
.quality-feature:hover .feature-icon { transform: rotate(-6deg) scale(1.06); }
.quality-feature h3 {
  font-size: 1rem;
  margin-bottom: 6px;
  color: var(--text);
}
.quality-feature p {
  font-size: 0.88rem;
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
}
@media (max-width: 980px) {
  .quality-features { grid-template-columns: repeat(2, 1fr); }
}

.is-reveal {
  opacity: 0;
  translate: 0 22px;
}
.is-reveal.is-in {
  opacity: 1;
  translate: 0 0;
  transition:
    opacity 0.55s ease var(--reveal-delay, 0ms),
    translate 0.6s cubic-bezier(0.2, 0.75, 0.3, 1) var(--reveal-delay, 0ms);
}
@keyframes card-rule-x {
  from { background-position: 0% 50%; }
  to { background-position: 200% 50%; }
}
@keyframes card-rule-y {
  from { background-position: 50% 0%; }
  to { background-position: 50% 200%; }
}
@media (prefers-reduced-motion: reduce) {
  .is-reveal { opacity: 1; translate: none; }
  .features-grid .feature-card:hover::before,
  .quality-feature:hover::before { animation: none; }
}
@media (max-width: 560px) {
  .quality-features { grid-template-columns: 1fr; }
}
.video-cta-play {
  padding: 36px;
  height: auto;
  flex-shrink: 1;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.04);
}
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: -2;
  overflow: hidden;
}
.hero-slide-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0;
  transition: opacity 1.4s ease;
}
.hero-slide-img.active {
  opacity: 1;
}

.hero-caption {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 14px;
  background: rgba(13, 13, 13, 0.78);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
  color: var(--white);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 8px 22px;
  border-radius: 999px;
  white-space: nowrap;
}
.hero-caption-link {
  background: none;
  border: 0;
  padding: 0;
  font: inherit;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent-light);
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 77, 109, 0.55);
  transition: color 0.2s, border-color 0.2s;
}
.hero-caption-link:hover { color: #fff; border-color: #fff; }
@media (max-width: 620px) {
  .hero-slide-img { object-position: center top; }
  .hero-caption { bottom: 18px; padding: 6px 16px; font-size: 0.66rem; }

}
@media (width<=1024px) {
  .hero-intro .hero-stats { grid-template-columns: repeat(3, 1fr); }
  .hero-intro .hs:nth-child(4),
  .hero-intro .hs:nth-child(5) { grid-column: auto / auto; }
}
@media (width<=1024px) {
  .hero-intro .hero-stats { padding: 24px 16px 8px; }
  .hero-intro .hs { padding: 10px 8px; }
  .hero-intro .hs-num { font-size: 1.5rem; }
  .hero-intro .hs-label { font-size: 0.62rem; margin-top: 2px; letter-spacing: 0.06em; }
}
@media (width<=820px) {
  .hero-intro { padding: 36px 0 0; }
  .hero-intro .hero-content { max-width: 100%; padding: 0 16px; }
  .hero-intro .hero-cta { justify-content: center; gap: 12px; }
  .hero-intro .hs { padding: 10px 8px; }
  .hero-intro .hs-num { font-size: 1.4rem; }
  .hero-intro .hs-label { font-size: 0.6rem; }
}
@media (width<=480px) {
  .hero-intro { padding: 28px 0; }
  .hero-intro h1 { font-size: 1.95rem; line-height: 1.12; }
  .hero-intro .hero-content { padding: 0 12px; }
  .hero-intro .hero-kicker { font-size: 0.7rem; padding: 7px 14px; }
  .hero-intro p { max-width: 100%; font-size: 0.94rem; margin-bottom: 24px; }
  .hero-intro .hero-stats { padding: 18px 12px 6px; gap: 8px; }
  .hero-intro .hs { padding: 8px 6px; }
  .hero-intro .hs-num { font-size: 1.2rem; }
  .hero-intro .hs-label { font-size: 0.58rem; margin-top: 2px; }
  .features-grid { grid-template-columns: 1fr; gap: 12px; padding: 36px 16px 0; }
}
@media (prefers-color-scheme: light) {
  .hero-intro .hs-label { color: rgba(10, 18, 32, 0.75); }
  .hero-intro .hs-num { color: var(--primary); }
}
.cert-banner {
  margin-top: 18px;
  padding: 18px 28px;
  background: var(--white);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: var(--radius);
  display: flex;
  justify-content: center;
}
.cert-banner img { display: block; width: 100%; max-width: 1000px; height: auto; }

@media (max-width: 620px) {
  .cert-banner { margin-top: 14px; padding: 14px 16px; }
}

.newsletter {
  display: block;
  grid-template-columns: none;
  background: var(--light);
  color: var(--text);
  padding: 76px 20px;
  margin-top: 0;
  border-radius: 0;
  box-shadow: none;
  overflow: visible;
  position: relative;
  width: 100%;
}
.newsletter .nl-card {
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 40px;
  max-width: 1120px;
  margin: 0 auto;
  padding: 52px 48px;
  border-radius: 26px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: var(--primary-dark);
  overflow: hidden;
  box-shadow: 0 22px 50px rgba(13, 13, 13, 0.22);
}
.newsletter .nl-card > :not(.grad-backdrop) { position: relative; z-index: 1; }
.newsletter .nl-text {
  max-width: none;
  margin: 0;
  text-align: left;
}
.newsletter h2 {
  color: var(--white);
  font-size: clamp(1.5rem, 2.6vw, 2rem);
  font-weight: 800;
  margin: 0 0 10px;
  letter-spacing: -0.01em;
  line-height: 1.2;
}
.newsletter p {
  color: rgba(242, 242, 242, 0.78);
  font-size: 0.97rem;
  line-height: 1.6;
  margin: 0;
  font-weight: 400;
}
.newsletter .nl-form {
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 8px;
  max-width: none;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
}
.newsletter .nl-form input {
  flex: 1 1 auto;
  min-width: 0;
  padding: 12px 18px;
  font-size: 0.95rem;
  color: var(--white);
  background: transparent;
  border: 0;
  border-radius: 999px;
  outline: none;
}
.newsletter .nl-form input::placeholder {
  color: rgba(242, 242, 242, 0.55);
}
.newsletter .nl-form input:focus {
  box-shadow: 0 0 0 3px rgba(5, 166, 75, 0.35);
}
.newsletter .nl-form button {
  flex: 0 0 auto;
  padding: 12px 26px;
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--white);
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%);
  background-size: 160% 160%;
  background-position: 0% 50%;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  transition: background-position 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease;
}
.newsletter .nl-form button:hover {
  background-position: 100% 50%;
  transform: translateY(-1px);
  box-shadow: 0 10px 24px rgba(5, 166, 75, 0.35);
}
.newsletter .nl-form button:active {
  transform: translateY(0);
}
@media (max-width: 820px) {
  .newsletter { padding: 56px 16px; }
  .newsletter .nl-card {
    grid-template-columns: 1fr;
    gap: 26px;
    padding: 40px 26px;
    text-align: center;
  }
  .newsletter .nl-text { text-align: center; }
}
@media (width<=480px) {
  .newsletter { padding: 44px 12px; }
  .newsletter .nl-card { padding: 34px 18px; border-radius: 20px; }
  .newsletter .nl-form { flex-direction: column; border-radius: 20px; padding: 6px; }
  .newsletter .nl-form input { flex: 1 1 auto; width: 100%; text-align: center; }
  .newsletter .nl-form button { width: 100%; }
}

.anim-gradient { background: var(--primary-dark); position: relative; overflow: hidden; }
.anim-gradient > :not(.grad-backdrop) { position: relative; z-index: 1; }

.cert-strip {
  display: block;
  padding: 0;
  background: none;
  text-align: center;
}
.cert-label {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 26px;
  padding-bottom: 14px;
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.18em;
}
.cert-label::before {
  content: "";
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--accent-light);
  box-shadow: 0 0 0 3px rgba(5, 166, 75, 0.18);
}
.cert-label::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 56px;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent), var(--accent-light));
}
.cert-logos { justify-content: center; }
</style>
