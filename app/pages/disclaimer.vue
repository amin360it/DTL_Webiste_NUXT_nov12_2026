<script setup lang="ts">
useSeo({
  title: 'Disclaimer',
  description: 'Disclaimer for the DHAKATHAI ALCOMAXX PLC website - information accuracy, product specifications, intellectual property and liability.'
})

const updated = '18 November 2026'
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Disclaimer</div>
    <div class="container">
      <span class="kicker">Legal</span>
      <h1>Disclaimer</h1>
      <p>The terms on which information is published on this website.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="card legal">
        <div class="card-body">
          <p class="legal-updated">Last updated: {{ updated }}</p>

          <p>The information on this website is provided by DHAKATHAI ALCOMAXX PLC (&ldquo;the Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) for general information and enquiry purposes only. By using this website you accept this disclaimer in full.</p>

          <h2>Accuracy of information</h2>
          <p>We take reasonable care to keep the content of this website accurate and current, but we make no representation or warranty of any kind, express or implied, about the completeness, accuracy, reliability or availability of the information, products or related graphics it contains. Any reliance you place on this information is strictly at your own risk.</p>

          <h2>Product specifications</h2>
          <p>Profile drawings, die numbers, dimensions, weights, finishes and technical data published on this website, including the online catalogue, are indicative only. Product availability and specifications may change without notice. Actual dimensions, alloys, tolerances and finishes are confirmed only on the written order confirmation issued by the Company.</p>

          <h2>No offer or advice</h2>
          <p>Nothing on this website constitutes an offer, solicitation or recommendation to buy or sell securities of DHAKATHAI ALCOMAXX PLC, nor does it constitute investment, legal, tax or professional advice. Investors should read the prospectus and other disclosures published on the <NuxtLink to="/investors-relation">Investor Relations</NuxtLink> page and seek independent advice before making an investment decision.</p>

          <h2>Intellectual property</h2>
          <p>All content on this website &mdash; including text, profile drawings, photographs, catalogue data, logos and the DHAKATHAI ALCOMAXX PLC name &mdash; is owned by or licensed to the Company and is protected by applicable intellectual property laws. You may view, download and print material for your own reference. Reproduction, republication or commercial use of any material without our prior written permission is not permitted.</p>

          <h2>External links</h2>
          <p>This website may contain links to third-party websites. Those sites are not under our control and we are not responsible for their content, accuracy or availability. Including a link does not imply endorsement.</p>

          <h2>Limitation of liability</h2>
          <p>To the fullest extent permitted by law, DHAKATHAI ALCOMAXX PLC shall not be liable for any loss or damage, including without limitation indirect or consequential loss or damage, arising from the use of, or reliance on, this website or its content. This does not exclude liability that cannot be excluded under applicable law.</p>

          <h2>Viruses and availability</h2>
          <p>We do not warrant that this website will be uninterrupted, timely, secure or free of errors or viruses. You are responsible for protecting your own equipment and data when using the internet.</p>

          <h2>Changes to this disclaimer</h2>
          <p>We may update this disclaimer from time to time. The current version, with its revision date, is always published on this page.</p>

          <h2>Governing law</h2>
          <p>This disclaimer is governed by the laws of the People&rsquo;s Republic of Bangladesh, and any dispute arising from the use of this website is subject to the exclusive jurisdiction of the courts of Bangladesh.</p>

          <h2>Contact</h2>
          <p>Questions about this disclaimer can be sent to <a href="mailto:info@dhakathaibd.com">info@dhakathaibd.com</a> or to our corporate office at Elite Rowshan Villa, Apartment No A-2, Plot-03, Road No 9/A, Block-J, Baridhara, Dhaka.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.legal { max-width: 940px; margin-inline: auto; }
.legal .card-body { padding: 44px 48px; }
.legal-updated {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 22px;
}
.legal h2 {
  font-size: 1.1rem;
  margin: 30px 0 10px;
}
.legal p {
  color: var(--text-light);
  line-height: 1.75;
  margin-bottom: 12px;
}
.legal p:last-child { margin-bottom: 0; }
@media (max-width: 620px) {
  .legal .card-body { padding: 28px 22px; }
}
</style>
