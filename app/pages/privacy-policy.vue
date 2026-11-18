<script setup lang="ts">
useSeo({
  title: 'Privacy Policy',
  description: 'Privacy policy of DHAKATHAI ALCOMAXX PLC - what information this website collects, how it is used, cookies and your rights.'
})

const updated = '18 November 2026'
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Privacy Policy</div>
    <div class="container">
      <span class="kicker">Legal</span>
      <h1>Privacy Policy</h1>
      <p>How DHAKATHAI ALCOMAXX PLC handles the information you share with us.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="card legal">
        <div class="card-body">
          <p class="legal-updated">Last updated: {{ updated }}</p>

          <p>This policy explains how DHAKATHAI ALCOMAXX PLC (&ldquo;the Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles information collected through this website. By using the site you agree to this policy.</p>

          <h2>Information we collect</h2>
          <ul>
            <li><strong>Information you give us</strong> &mdash; for example your name, email address, phone number and message when you email us, use a contact form, or apply for a job through the <NuxtLink to="/career">Career</NuxtLink> page.</li>
            <li><strong>Enquiry details</strong> &mdash; the products, catalogues or drawings you ask about, so we can route your enquiry to the right team.</li>
            <li><strong>Technical information</strong> &mdash; standard server logs such as browser type, device type, referring page, and a truncated or anonymised IP address, used to keep the site secure and working.</li>
          </ul>
          <p>We do not ask for, and do not wish to receive, any sensitive personal data through this website.</p>

          <h2>How we use information</h2>
          <ul>
            <li>To answer enquiries and provide product, catalogue or dealer information.</li>
            <li>To process job applications submitted to us.</li>
            <li>To operate, maintain and improve the website.</li>
            <li>To meet legal, regulatory and record-keeping obligations.</li>
          </ul>
          <p>We do not sell your personal information, and we do not use it for unrelated marketing without your consent.</p>

          <h2>Cookies and local storage</h2>
          <p>This website does not use advertising or tracking cookies. It stores a single preference &mdash; your light or dark theme choice &mdash; in your browser&rsquo;s local storage so the site opens in the appearance you selected. You can clear it at any time through your browser settings.</p>
          <p>Embedded YouTube videos are loaded only when you open a video; YouTube may then set its own cookies under <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google&rsquo;s privacy policy</a>. Maps and PDF documents may likewise be served by third parties.</p>

          <h2>Sharing information</h2>
          <p>We share personal information only with service providers who help us run the website or respond to you, and only as far as needed for that purpose. We may also disclose information where required by law or by a competent authority.</p>

          <h2>Retention</h2>
          <p>Enquiries and job applications are kept only as long as necessary for the purpose they were collected for, or as required by applicable law, and are then deleted or securely archived.</p>

          <h2>Security</h2>
          <p>We use reasonable technical and organisational measures to protect the information we hold. No transmission over the internet can be guaranteed to be completely secure, so please avoid sending confidential information by ordinary email.</p>

          <h2>Your rights</h2>
          <p>You may ask us to tell you what personal information we hold about you, to correct it, or to delete it. Write to <a href="mailto:info@dhakathaibd.com">info@dhakathaibd.com</a> and we will respond within a reasonable period.</p>

          <h2>Children</h2>
          <p>This website is intended for business users and is not directed at children. We do not knowingly collect personal information from children.</p>

          <h2>Links to other sites</h2>
          <p>Our pages may link to third-party websites, such as social media or YouTube. We are not responsible for their privacy practices; please read their policies.</p>

          <h2>Changes to this policy</h2>
          <p>We may update this policy from time to time. The current version and its revision date are always published on this page.</p>

          <h2>Contact</h2>
          <p>DHAKATHAI ALCOMAXX PLC, Elite Rowshan Villa, Apartment No A-2, Plot-03, Road No 9/A, Block-J, Baridhara, Dhaka. Email <a href="mailto:info@dhakathaibd.com">info@dhakathaibd.com</a>, phone +88-02-9882666.</p>
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
.legal p,
.legal li {
  color: var(--text-light);
  line-height: 1.75;
}
.legal p { margin-bottom: 12px; }
.legal p:last-child { margin-bottom: 0; }
.legal ul {
  margin: 0 0 12px;
  padding-left: 20px;
  display: grid;
  gap: 8px;
}
@media (max-width: 620px) {
  .legal .card-body { padding: 28px 22px; }
}
</style>
