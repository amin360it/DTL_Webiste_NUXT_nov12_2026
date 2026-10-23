<script setup lang="ts">
useHead({
  title: 'DHAKATHAI ALCOMAXX PLC - Best Aluminum Company in Bangladesh',
  titleTemplate: null,
  meta: [{ name: 'description', content: "DHAKATHAI ALCOMAXX PLC - Bangladesh's largest aluminium extrusion company. Manufacturer of quality aluminium profiles since 1997." }]
})

const heroIndex = ref(0)
const { openVideo } = useModal()
const heroSlides = [
  '/assets/img/dhakathai alcomaxx plc factorya2d6.jpg',
  '/assets/img/01 radison bay view hotele03c.jpg',
  '/assets/img/04-dhaka-metro-railfc4e.jpg'
]

function nextSlide() { heroIndex.value = (heroIndex.value + 1) % heroSlides.length }
function prevSlide() { heroIndex.value = (heroIndex.value - 1 + heroSlides.length) % heroSlides.length }

let interval: ReturnType<typeof setInterval>
onMounted(() => {
  interval = setInterval(() => {
    heroIndex.value = (heroIndex.value + 1) % heroSlides.length
  }, 6000)
})
onBeforeUnmount(() => clearInterval(interval))
</script>

<template>
  <section class="hero" id="home-hero">
    <div class="hero-slides" id="heroSlides">
      <div
        v-for="(slide, i) in heroSlides"
        :key="i"
        class="hero-slide"
        :class="{ active: i === heroIndex }"
        :style="{ backgroundImage: `url('${slide}')` }"
      >
        <div class="hero-caption">PROJECT / IMAGE</div>
      </div>
    </div>
    <button class="hero-nav hero-prev" @click="prevSlide" aria-label="Previous slide">&#10094;</button>
    <button class="hero-nav hero-next" @click="nextSlide" aria-label="Next slide">&#10095;</button>
    <div class="hero-overlay"></div>
    <div class="container">
      <div class="hero-content">
        <span class="hero-kicker">Since 1997 &bull; Aluminium Extrusion Leader</span>
        <h1>WE ARE THE <em>largest</em> ALUMINIUM extrusion company IN BANGLADESH</h1>
        <p>We understand the needs of our customers and provide innovative solutions to their processes, through the provision of top class facilities, support and services and by adopting strict quality control measures in order to consistently deliver good quality products.</p>
        <div class="hero-cta">
          <NuxtLink to="/about" class="btn btn-primary">About Us</NuxtLink>
          <NuxtLink to="/products" class="btn btn-outline">Explore Products</NuxtLink>
          <NuxtLink to="/manufacturing" class="btn btn-outline">Our Manufacturing</NuxtLink>
        </div>
      </div>
    </div>
    <div class="hero-stats-bar">
      <div class="container hero-stats">
        <div class="hs"><div class="num">8</div><div class="label">Extrusion Presses</div></div>
        <div class="hs"><div class="num">1997</div><div class="label">Serving Since</div></div>
        <div class="hs"><div class="num">100%</div><div class="label">Bangladesh Coverage</div></div>
        <div class="hs"><div class="num">64+</div><div class="label">Dealer Networks</div></div>
        <div class="hs"><div class="num">20-22%</div><div class="label">Market Share</div></div>
      </div>
    </div>
  </section>

  <section class="section section-video" id="intro-video">
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
      <div class="cert-strip">
        <span class="cert-label">Certified By</span>
        <div class="cert-logos">
          <img src="/assets/img/cert-1.png" alt="Certification 1">
          <img src="/assets/img/cert-2.png" alt="Certification 2">
          <img src="/assets/img/cert-3.png" alt="Certification 3">
          <img src="/assets/img/cert-sms-demag.png" alt="SMS Demag">
          <img src="/assets/img/cert-alco.jpg" alt="Alco Certified">
        </div>
      </div>
    </div>
  </section>

  <section class="section section-primary">
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
    <div>
      <h2>Stay Updated With DHAKATHAI</h2>
      <p>Get the latest products, catalogues and company news directly in your inbox.</p>
    </div>
    <form class="nl-form" @submit.prevent="alert('Thank you for subscribing!')">
      <input type="email" placeholder="Your email address" required>
      <button type="submit">Subscribe</button>
    </form>
  </section>
</template>
