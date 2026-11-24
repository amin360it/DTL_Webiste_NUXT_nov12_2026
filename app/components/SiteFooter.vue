<script setup lang="ts">
import { catalog } from '~/data/catalog'

const TOTAL_PRODUCTS = catalog.products.length
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-row row g-4">
        <div class="footer-brand col-12 col-lg-3">
          <img src="/assets/img/dtl_logo.png" alt="DHAKATHAI ALCOMAXX PLC">
          <p class="footer-tag">MANUFACTURER OF QUALITY <strong>ALUMINIUM PROFILES</strong></p>
          <p class="footer-desc">DHAKATHAI ALCOMAXX PLC is Bangladesh&rsquo;s largest single manufacturer of aluminium profiles, operating with eight advanced extrusion presses since 1997.</p>
          <div class="footer-social">
            <a href="https://www.facebook.com/dhakathaibd/" target="_blank" rel="noopener" aria-label="Facebook">
              <i class="fa-brands fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/dhakathai" target="_blank" rel="noopener" aria-label="Twitter">
              <i class="fa-brands fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/company/dhakathai/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/dhakathailimited/" target="_blank" rel="noopener" aria-label="Instagram">
              <i class="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://www.pinterest.com/DhakaThaiLimited/" target="_blank" rel="noopener" aria-label="Pinterest">
              <i class="fa-brands fa-pinterest-p" aria-hidden="true"></i>
            </a>
            <a href="http://www.youtube.com/@dhakathaialcomaxxplc" target="_blank" rel="noopener" aria-label="YouTube">
              <i class="fa-brands fa-youtube" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div class="footer-links-company col-6 col-lg-3">
          <h4>Company</h4>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About Us</NuxtLink></li>
            <li><NuxtLink to="/board-of-directors">Board of Directors</NuxtLink></li>
            <li><NuxtLink to="/news">Latest News</NuxtLink></li>
            <li><NuxtLink to="/media">Media Gallery</NuxtLink></li>
            <li><NuxtLink to="/3-min">Introduction in 3 Minutes</NuxtLink></li>
            <li><NuxtLink to="/career">Career</NuxtLink></li>
            <li><NuxtLink to="/dealer-list">Dealer's List</NuxtLink></li>
            <li><NuxtLink to="/enlisted-developer">Enlisted Developers</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-links-products col-6 col-lg-3">
          <h4>Products</h4>
          <ul>
            <li><NuxtLink to="/products">All Products ({{ TOTAL_PRODUCTS }})</NuxtLink></li>
            <li><NuxtLink to="/products-architectural">Architectural</NuxtLink></li>
            <li><NuxtLink to="/products-industrial">Industrial</NuxtLink></li>
            <li><NuxtLink to="/products-furniture">Furniture &amp; Office Partition</NuxtLink></li>
            <li><NuxtLink to="/products-hardware">Hardware &amp; Bazaar</NuxtLink></li>
            <li><NuxtLink to="/products-electrical">Electrical</NuxtLink></li>
            <li><NuxtLink to="/products-others">Automobile &amp; Railway</NuxtLink></li>
            <li><NuxtLink to="/online-catalogue">Online Catalogue</NuxtLink></li>
            <li><NuxtLink to="/catalogue">DIE Catalogues &amp; Brochures</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-links-investors col-12 col-lg-3">
          <h4>Investors</h4>
          <ul>
            <li><NuxtLink to="/investors-relation">Investor Relations</NuxtLink></li>
            <li><a href="/assets/pdfs/prospectus-of-dhakathai-alcomaxx-plc.pdf" target="_blank" rel="noopener">IPO Prospectus</a></li>
            <li><NuxtLink to="/investors-relation#ipo-application-result">IPO Application Result</NuxtLink></li>
            <li><NuxtLink to="/investors-relation#ipo-fund-utilization">IPO Fund Utilization</NuxtLink></li>
            <li><NuxtLink to="/investors-relation#financial-report">Financial Report</NuxtLink></li>
            <li><NuxtLink to="/investors-relation#price-sensitive">Price Sensitive Information</NuxtLink></li>
            <li><NuxtLink to="/investors-relation#governance">Corporate Governance Compliance</NuxtLink></li>
            <li><NuxtLink to="/investors-relation#directors-report">Directors Report</NuxtLink></li>
            <li><NuxtLink to="/investors-relation#annual-report">Annual Report</NuxtLink></li>
            <li><NuxtLink to="/investors-relation#details-of-shareholding">Details of Shareholding</NuxtLink></li>
            <li><NuxtLink to="/investors-relation#agm">Annual General Meeting</NuxtLink></li>
            <li><NuxtLink to="/investors-relation#egm">Extraordinary General Meeting</NuxtLink></li>
            <li><NuxtLink to="/investors-relation#dividend">Dividend</NuxtLink></li>
            <li><NuxtLink to="/contact#investor-relations">Investors Contact</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-links">
          <NuxtLink to="/resources">Resources</NuxtLink> |
          <NuxtLink to="/disclaimer">Disclaimer</NuxtLink> |
          <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink> |
          <NuxtLink to="/sitemap">Sitemap</NuxtLink>
        </div>
        <div class="footer-copy">
          &copy; <span data-year>2026</span> DHAKATHAI ALCOMAXX PLC &reg;. All rights reserved.
        </div>
        <div class="footer-credit">Website reDesign by <a href="https://amin360it.github.com" target="_blank" rel="noopener">Amin360iT.github.com</a></div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-brand img {
  background: #ffffff;
  padding: 6px 10px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.footer-row { padding-bottom: 50px; }

@media (max-width: 991px) {
  .footer-row h4 { font-size: 0.82rem; margin-bottom: 18px; }
  .footer-row ul li { margin-bottom: 10px; }
  .footer-row ul li a { font-size: 0.86rem; }
  .footer-tag { font-size: 0.72rem; letter-spacing: 0.12em; }
  .footer-desc { font-size: 0.85rem; }
  .footer-social a { width: 36px; height: 36px; font-size: 16px; }
}

@media (max-width: 575px) {
  .footer-row h4 { font-size: 0.78rem; margin-bottom: 16px; }
  .footer-row ul li a { font-size: 0.8rem; line-height: 1.4; }
  .footer-social { gap: 8px; }
  .footer-social a { width: 32px; height: 32px; font-size: 14px; border-radius: 9px; }
}
</style>
