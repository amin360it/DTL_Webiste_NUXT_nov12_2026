<script setup lang="ts">
import { ref } from 'vue'

useSeo({
  title: 'Architectural Aluminium Profiles',
  description: 'Architectural aluminium profiles - sliding frames, fixed frames, stick wall systems, semi-unitized series, doors, windows and curtain walls by DHAKATHAI ALCOMAXX PLC.'
})

const tab = ref('tab-frames')

const setTab = (name: string) => {
  tab.value = name
}
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; <NuxtLink to="/products">Products</NuxtLink> &raquo; Architectural</div>
    <div class="container">
      <span class="kicker">Products</span>
      <h1>Architectural Profiles</h1>
      <p>Complete systems for windows, doors, curtain walls and structural applications - with premium finishes.</p>
    </div>
  </section>

  <div class="subnav">
    <div class="container">
      <NuxtLink to="/products-architectural" class="active">Architectural</NuxtLink>
      <NuxtLink to="/products-industrial">Industrial</NuxtLink>
      <NuxtLink to="/products-furniture">Furniture</NuxtLink>
      <NuxtLink to="/products-hardware">Hardware &amp; Bazaar</NuxtLink>
      <NuxtLink to="/products-electrical">Electrical</NuxtLink>
      <NuxtLink to="/products-others">Automobile &amp; Railway</NuxtLink>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Systems</span>
        <h2>Architectural Systems</h2>
        <p>Scroll through our complete range of architectural profile systems, each available with detailed engineering drawings.</p>
      </div>

      <div class="tabs" data-tabs>
        <button class="tab-btn" :class="{ active: tab === 'tab-frames' }" @click="setTab('tab-frames')">Frames &amp; Doors</button>
        <button class="tab-btn" :class="{ active: tab === 'tab-curtain' }" @click="setTab('tab-curtain')">Curtain Wall Systems</button>
        <button class="tab-btn" :class="{ active: tab === 'tab-windows' }" @click="setTab('tab-windows')">Windows</button>
        <button class="tab-btn" :class="{ active: tab === 'tab-angles' }" @click="setTab('tab-angles')">Angles &amp; Sections</button>
      </div>

      <div id="tab-frames" class="tab-panel" :class="{ active: tab === 'tab-frames' }">
        <div class="grid grid-4">
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>3&Prime; Sliding Outer Frame</h3><p>Width 72mm. Sliding windows &amp; doors.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/01-3in-sliding-outer-frame-(width-72mm).pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Sliding Shutter Frame</h3><p>Security shutter systems.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/02-sliding-shutter-frame.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>3&Prime; Fixed Frame</h3><p>Width 72mm &amp; 76mm variants.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/03-3in-fixed-frame-(width-72mm).pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>4&Prime; Sliding Outer Frame</h3><p>Width 91mm &amp; 101mm.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/05-4in-sliding-outer-frame-(width-91mm---101-mm).pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>3-Track Sliding Frame</h3><p>Without net section.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/06-3-track-sliding-outer-frame-(without-net-section).pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>3-Track Sliding Frame</h3><p>With net section.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/07-3-track-sliding-outer-frame-(with-net-section).pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>4&Prime; Fixed Frame</h3><p>Width 101mm &amp; 91mm.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/08-4in-fixed-frame-(width-101mm).pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Corner Box Section</h3><p>Structural corner profiles.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/10-corner-box-section.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Door Handles</h3><p>Architectural door handle profiles.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/11-door-handles.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Swing Door Frame</h3><p>Single &amp; double swing systems.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/12-swing-door-frame.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Lift &amp; Slide Door</h3><p>Premium residential systems.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/20-lift---slide-door.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Bifold</h3><p>Bifold door systems.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/18-bifold.pdf" target="_blank">Drawing</a></div></div>
        </div>
      </div>

      <div id="tab-curtain" class="tab-panel" :class="{ active: tab === 'tab-curtain' }">
        <div class="grid grid-4">
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Stick Wall 50 / 65 / 81</h3><p>Curtain wall mullions &amp; transoms.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/24-stick-wall-50.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Stick Wall 101 / 115</h3><p>Heavy duty curtain walls.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/27-stick-wall-101.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Toggle System</h3><p>Curtain wall toggle system.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/29-toggle-system.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Semi Unitized (50x100)</h3><p>Unitized curtain wall system.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/30-semi-unitized-(50x100).pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Semi Unitized (50x105.5)</h3><p>Unitized curtain wall system.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/31-semi-unitized-(50x105.5).pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Semi Unitized (60x125)</h3><p>Unitized curtain wall system.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/32-semi-unitized-(60x125).pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Semi Unitized Series</h3><p>CWN, WWN, WWA, SL, WCG &amp; 120 series.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/33-semi-unitized-series-(cwn).pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Customized (UG)</h3><p>Custom unitized glazing systems.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/40-customized-(ug).pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Casement</h3><p>Casement window &amp; door systems.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/41-casement.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Corner Profile</h3><p>Corner glazing profiles.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/37-corner-profile.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>ACP Profiles / Accessories</h3><p>Aluminium composite panel systems.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/42-acp-profiles-or-accessories.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Louver</h3><p>Ventilation louver systems.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/43-louver.pdf" target="_blank">Drawing</a></div></div>
        </div>
      </div>

      <div id="tab-windows" class="tab-panel" :class="{ active: tab === 'tab-windows' }">
        <div class="grid grid-4">
          <div class="card"><div class="card-img"><img src="/assets/img/feature-casement-push-out-french8619.jpg" alt="Casement window"></div><div class="card-body"><h3>Casement Window</h3><p>French &amp; push-out casement systems.</p><a href="/assets/pdfs/41-casement.pdf" class="btn btn-dark mt-2" target="_blank">Drawing</a></div></div>
          <div class="card"><div class="card-img"><img src="/assets/img/sliding-patio-doors-crop-u79740a29.png" alt="Sliding door"></div><div class="card-body"><h3>Sliding Door</h3><p>Multi-track sliding systems.</p><a href="/assets/pdfs/01-3in-sliding-outer-frame-(width-72mm).pdf" class="btn btn-dark mt-2" target="_blank">Drawing</a></div></div>
          <div class="card"><div class="card-img"><img src="/assets/img/1446815489slid - fold door, mahogany-compressedc26f.jpg" alt="Bi-fold door"></div><div class="card-body"><h3>Bi-Fold Door</h3><p>Space-saving fold systems.</p><a href="/assets/pdfs/18-bifold.pdf" class="btn btn-dark mt-2" target="_blank">Drawing</a></div></div>
          <div class="card"><div class="card-img"><img src="/assets/img/glass-window-giant-building-architecturefd04.jpg" alt="Curtain wall"></div><div class="card-body"><h3>Curtain Wall</h3><p>Full stick &amp; unitized glazing.</p><a href="/assets/pdfs/24-stick-wall-50.pdf" class="btn btn-dark mt-2" target="_blank">Drawing</a></div></div>
        </div>
      </div>

      <div id="tab-angles" class="tab-panel" :class="{ active: tab === 'tab-angles' }">
        <div class="grid grid-4">
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Angle</h3><p>Structural angles.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/21-angles.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>U Channel</h3><p>Channel sections.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/22-u-channel.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Box</h3><p>Box sections.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/23-box.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>EDP</h3><p>EDP series profiles.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/13-edp.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Standard Thai Series</h3><p>Classic Thai window series.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/14-standard-thai-series.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>EuroMaxx</h3><p>European standard systems.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/15-euromaxx.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Domalco</h3><p>Domalco profile series.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/16--domalco.pdf" target="_blank">Drawing</a></div></div>
          <div class="card"><CardPlaceholder /><div class="card-body"><h3>Elios</h3><p>Elios profile series.</p><a class="btn btn-dark mt-2" href="/assets/pdfs/17-elios.pdf" target="_blank">Drawing</a></div></div>
        </div>
      </div>
    </div>
  </section>

  <ProductProfiles
    bucket="architectural"
    title="Architectural Profile Database"
    intro="Die numbers, sections and systems for windows, doors and curtain walls."
  />
</template>

<style scoped>
.section .grid .card { display: flex; flex-direction: column; }
.section .grid .card-body { display: flex; flex-direction: column; flex: 1; }
.section .grid .card-body h3 { min-height: 2.3em; }
.section .grid .card-body p { min-height: 3.3em; }
.section .grid .card-body .btn { margin-top: auto; }
@media (max-width: 1024px) {
  .grid-4 { grid-template-columns: 1fr 1fr !important; }
}
@media (max-width: 620px) {
  .grid-4 { grid-template-columns: 1fr !important; }
}
</style>