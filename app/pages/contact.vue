<script setup lang="ts">
useHead({
  title: 'Contact US',
  meta: [{ name: 'description', content: 'Contact DHAKATHAI ALCOMAXX PLC - corporate office in Baridhara, Dhaka and factory in Ashulia, Savar.' }]
})
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Find Us</div>
    <div class="container">
      <span class="kicker">Let's Talk</span>
      <h1>WE ARE THERE AT EVERY STAGE OF YOUR DREAM.</h1>
      <p>Reach our corporate office or factory - we're ready to serve you.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="contact-cards">
        <div class="contact-card">
          <h3><span class="ci"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21V8l9-5 9 5v13M9 21v-6h6v6"/></svg></span> Corporate Office</h3>
          <p><strong>DHAKATHAI ALCOMAXX PLC</strong></p>
          <p>Elite Rowshan Villa, Apartment No A-2, Plot-03, Road No 9/A, Block-J, Baridhara, Dhaka.</p>
          <p class="mt-2">&#9742; +88-02-9882666, +88-02-8818745</p>
          <p>&#9742; +88-01708-814972</p>
          <p>&#9993; <a href="mailto:info@dhakathaibd.com">info@dhakathaibd.com</a></p>
        </div>
        <div class="contact-card">
          <h3><span class="ci"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1M9 13h1m4 0h1"/></svg></span> Factory</h3>
          <p><strong>DHAKATHAI ALCOMAXX PLC</strong></p>
          <p>Burirpara, East Norshinghpur, Ashulia, Savar, Dhaka.</p>
          <p class="mt-2">&#9742; +88-02-9882666, +88-02-8818745</p>
          <p>&#9742; +88-01708-814972</p>
          <p>&#9993; <a href="mailto:info@dhakathaibd.com">info@dhakathaibd.com</a></p>
        </div>
      </div>

      <div class="mt-14">
        <div class="section-head">
          <span class="kicker">Customer Services Team</span>
          <h2>Dealer Network</h2>
          <p>Looking for your nearest authorized dealer? Browse our complete dealer list across Bangladesh.</p>
        </div>
        <div class="text-center">
          <NuxtLink to="/dealer-list" class="btn btn-primary">View Dealer's List</NuxtLink>
          <NuxtLink to="/catalogue" class="btn btn-dark">Download Catalogue</NuxtLink>
        </div>
      </div>

      <div class="mt-14">
        <div class="section-head">
          <span class="kicker">Area &amp; Mobile Numbers</span>
          <h2>Dealer Phone Directory</h2>
          <p>Complete district-wise phone directory of our authorized dealers across Bangladesh.</p>
        </div>
        <div class="card" style="padding:24px;margin-bottom:32px;">
          <div class="card-body">
            <div class="dealer-filters" id="dealerFilters">
              <button class="btn btn-dark filter-btn active" data-filter="all">All Districts</button>
            </div>
            <input type="text" id="dealerSearch" placeholder="Search by district or route..." style="width:100%;max-width:420px;padding:11px 16px;border:1px solid var(--light-2);border-radius:999px;font-size:0.92rem;">
          </div>
        </div>
        <div class="table-wrap">
          <table class="data" id="dealerTable">
            <thead><tr><th>District</th><th>Route Name</th><th class="num">Mobile Number</th></tr></thead>
            <tbody id="dealerBody"></tbody>
          </table>
        </div>
        <p class="text-light-c mt-4" id="dealerCount"></p>
      </div>
    </div>
  </section>

  <script src="/js/dealers.js"></script>
  <script>
  document.addEventListener("DOMContentLoaded", function () {
    if (typeof window.DEALERS === "undefined") return;
    var dealers = window.DEALERS;
    var districts = [];
    dealers.forEach(function (x) {
      if (districts.indexOf(x.d) === -1) districts.push(x.d);
    });
    districts.sort();

    var filterWrap = document.getElementById("dealerFilters");
    districts.forEach(function (d) {
      var b = document.createElement("button");
      b.className = "btn btn-dark filter-btn";
      b.setAttribute("data-filter", d);
      b.textContent = d;
      filterWrap.appendChild(b);
    });

    var body = document.getElementById("dealerBody");
    function render(filter, query) {
      body.innerHTML = "";
      var n = 0;
      dealers.forEach(function (x) {
        if (filter !== "all" && x.d !== filter) return;
        if (query && (x.d + " " + x.r + " " + x.m).toLowerCase().indexOf(query) === -1) return;
        var tr = document.createElement("tr");
        tr.className = "dealer-row";
        tr.setAttribute("data-district", x.d);
        tr.innerHTML = "<td><b>" + x.d + "</b></td><td>" + x.r + "</td><td class='num'>" + x.m + "</td>";
        body.appendChild(tr);
        n++;
      });
      document.getElementById("dealerCount").textContent = "Showing " + n + " of " + dealers.length + " dealer routes across Bangladesh.";
    }

    var activeFilter = "all";
    filterWrap.querySelectorAll(".filter-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterWrap.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        activeFilter = btn.getAttribute("data-filter");
        render(activeFilter, document.getElementById("dealerSearch").value.toLowerCase());
      });
    });
    document.getElementById("dealerSearch").addEventListener("input", function () {
      render(activeFilter, this.value.toLowerCase());
    });

    render("all", "");
  });
  </script>
</template>
