<script setup lang="ts">
useHead({
  title: 'Investor Relations',
  meta: [{ name: 'description', content: 'Investor relations - IPO prospectus, share distribution and corporate governance of DHAKATHAI ALCOMAXX PLC.' }]
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Investors Relation</div>
    <div class="container">
      <span class="kicker">Investor Relations</span>
      <h1>Financial Insights &amp; Governance</h1>
      <p>Transparent corporate governance, IPO documents and investor information.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">IPO Documents</span>
        <h2>Initial Public Offering</h2>
        <p>Dhakathai Alcomaxx PLC has filed for raising Tk30 crore through an IPO to expand its business and meet growing demand.</p>
      </div>
      <div class="grid grid-3">
        <div class="card">
          <div class="card-body">
            <h3>Draft Prospectus of IPO</h3>
            <p class="text-light-c">Full draft prospectus submitted to the Bangladesh Securities and Exchange Commission (BSEC).</p>
            <a class="btn btn-primary mt-2" href="/assets/pdfs/prospectus-of-dhakathai-alcomaxx-plc.pdf" target="_blank" rel="noopener">Download Prospectus (PDF)</a>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h3>List of Share Distribution</h3>
            <p class="text-light-c">Share distribution to the employees and others.</p>
            <a class="btn btn-dark mt-2" href="/assets/pdfs/list-of-share-distribution-to-the-employees-and-others.pdf" target="_blank" rel="noopener">Download PDF</a>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h3>Online Catalogue</h3>
            <p class="text-light-c">Complete product catalogue (Sep 2026 edition).</p>
            <a class="btn btn-dark mt-2" href="/assets/pdfs/dtl-online-catalogue-sep-2026.pdf" target="_blank" rel="noopener">Download PDF</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-light">
    <div class="container">
      <div class="section-head">
        <span class="kicker">At A Glance</span>
        <h2>Company Financial Highlights</h2>
        <p>Reported figures from the IPO application (July-December 2023 vs 2022).</p>
      </div>
      <div class="stats">
        <div class="stat"><div class="num">Tk30cr</div><div class="label">IPO Raising Target</div></div>
        <div class="stat"><div class="num">3cr</div><div class="label">Shares to Issue</div></div>
        <div class="stat"><div class="num">Tk213.96cr</div><div class="label">Revenue (Jul-Dec 2023)</div></div>
        <div class="stat"><div class="num">Tk7.35cr</div><div class="label">Net Profit After Tax</div></div>
        <div class="stat"><div class="num">Tk0.55</div><div class="label">EPS</div></div>
        <div class="stat"><div class="num">Tk11.32</div><div class="label">NAV Per Share</div></div>
      </div>
      <div class="table-wrap mt-10">
        <table class="data">
          <thead><tr><th>#</th><th>Parameter</th><th>Details</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>IPO Fund Utilization</td><td>Tk19 crore for expansion, Tk5 crore working capital, Tk4.71 crore loan repayment, Tk1.28 crore IPO expenses</td></tr>
            <tr><td>2</td><td>Issue Method</td><td>Fixed price method - 3 crore shares</td></tr>
            <tr><td>3</td><td>Issue Manager</td><td>Prime Bank Investment Limited</td></tr>
            <tr><td>4</td><td>Market Share</td><td>Approximately 20% - 22% of the local aluminium profiles market</td></tr>
            <tr><td>5</td><td>Market Demand</td><td>Nearly 60,000 tonnes of aluminium profiles annually, growing 15% - 20% per year</td></tr>
            <tr><td>6</td><td>Local Supply</td><td>10 local companies satisfy 90% of domestic demand; remaining 10% imported from China</td></tr>
            <tr><td>7</td><td>Industry Investment</td><td>Approximately Tk1,000 crore invested in Bangladesh's aluminium extrusion sector</td></tr>
            <tr><td>8</td><td>Employment</td><td>Approximately 30,000 people employed by the sector</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="section" id="governance">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Corporate Governance</span>
        <h2>Governance &amp; Investor Resources</h2>
      </div>
      <div class="grid grid-3">
        <div class="card feature-card">
          <div class="feature-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1M9 13h1m4 0h1M9 17h1m4 0h1"/></svg></div>
          <h3>Corporate Governance Compliance</h3><p>Committed to best practices in corporate governance.</p>
        </div>
        <div class="card feature-card">
          <div class="feature-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg></div>
          <h3>Financial Reports</h3><p>Annual reports, directors report and financial disclosures.</p>
        </div>
        <div class="card feature-card">
          <div class="feature-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg></div>
          <h3>Board of Directors</h3><p>Meet our experienced leadership team.</p>
          <NuxtLink class="btn btn-dark mt-2" to="/board-of-directors">View Board</NuxtLink>
        </div>
        <div class="card feature-card">
          <div class="feature-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.4 7.2H22l-6 4.5 2.3 7.3-6.3-4.6-6.3 4.6L8 13.7 2 9.2h7.6z"/></svg></div>
          <h3>IPO Application Result</h3><p>Results and announcements for applicants.</p>
        </div>
        <div class="card feature-card">
          <div class="feature-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
          <h3>Dividend &amp; Meetings</h3><p>Annual &amp; extraordinary general meetings, dividends and AGM announcements.</p>
        </div>
        <div class="card feature-card">
          <div class="feature-icon"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7z"/><path d="M12 8v5M12 16h.01"/></svg></div>
          <h3>Price Sensitive Information</h3><p>Timely disclosure of price sensitive information.</p>
        </div>
      </div>
    </div>
  </section>
</template>
