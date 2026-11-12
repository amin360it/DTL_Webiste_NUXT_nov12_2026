<script setup lang="ts">
import { ref } from 'vue'

useSeo({
  title: 'Product Catalogue',
  description: 'Download DHAKATHAI ALCOMAXX PLC product catalogues and detailed profile drawings - architectural, hardware, furniture, industrial and electrical profiles.'
})

const tab = ref('cat-arch')

const setTab = (name: string) => {
  tab.value = name
}
</script>

<template>
  <section class="page-hero">
    <div class="crumbs"><NuxtLink to="/">Home</NuxtLink> &raquo; Catalogue</div>
    <div class="container">
      <span class="kicker">Catalogues &amp; Brochures</span>
      <h1>DIE Catalogues &amp; Brochures</h1>
      <p>Download complete catalogues and individual profile drawings with detailed specifications.</p>
      <p class="mt-2"><NuxtLink class="btn btn-primary" to="/online-catalogue">Browse Online Catalogue &rarr;</NuxtLink></p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="kicker">Full Catalogues</span>
        <h2>Company Catalogues</h2>
      </div>
      <div class="grid grid-3">
        <div class="card">
          <div class="card-img"><img src="/assets/img/dtl-catalog-2024-cover2b4d.png" alt="DTL Online Catalogue"></div>
          <div class="card-body">
            <h3>Dhakathai Alcomaxx PLC - Online Catalogue</h3>
            <p>Complete product catalogue (Sep 2026 edition).</p>
            <a class="btn btn-primary mt-2" href="/assets/pdfs/dtl-online-catalogue-sep-2026.pdf" target="_blank" rel="noopener">Download PDF (10 MB)</a>
          </div>
        </div>
        <div class="card">
          <div class="card-img"><img src="/assets/img/standard profiles pictureb1d6.jpg" alt="Standard profiles"></div>
          <div class="card-body">
            <h3>Profile Drawings Library</h3>
            <p>Individual profile drawings organized by category below.</p>
          </div>
        </div>
      </div>

      <div class="section-head mt-14">
        <span class="kicker">Profile Drawings</span>
        <h2>Individual Profile Drawings</h2>
        <p>Browse and download detailed engineering drawings for each profile.</p>
      </div>

      <div class="tabs" data-tabs>
        <button class="tab-btn" :class="{ active: tab === 'cat-arch' }" @click="setTab('cat-arch')">Architectural</button>
        <button class="tab-btn" :class="{ active: tab === 'cat-hw' }" @click="setTab('cat-hw')">Hardware</button>
        <button class="tab-btn" :class="{ active: tab === 'cat-furn' }" @click="setTab('cat-furn')">Furniture</button>
        <button class="tab-btn" :class="{ active: tab === 'cat-ind' }" @click="setTab('cat-ind')">Industrial</button>
        <button class="tab-btn" :class="{ active: tab === 'cat-elec' }" @click="setTab('cat-elec')">Electrical</button>
        <button class="tab-btn" :class="{ active: tab === 'cat-oth' }" @click="setTab('cat-oth')">Others</button>
      </div>

      <div id="cat-arch" class="tab-panel" :class="{ active: tab === 'cat-arch' }">
        <div class="table-wrap">
          <table class="data">
            <thead><tr><th>#</th><th>Profile</th><th class="num">Download</th></tr></thead>
            <tbody>
              <tr><td>01</td><td>3" Sliding Outer Frame (Width 72mm)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/01-3in-sliding-outer-frame-(width-72mm).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>02</td><td>Sliding Shutter Frame</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/02-sliding-shutter-frame.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>03</td><td>3" Fixed Frame (Width: 72mm)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/03-3in-fixed-frame-(width-72mm).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>04</td><td>3" Fixed Frame (Width: 76mm)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/04-3in-fixed-frame-(width-76mm).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>05</td><td>4" Sliding Outer Frame (Width: 91mm &amp; 101mm)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/05-4in-sliding-outer-frame-(width-91mm---101-mm).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>06</td><td>3 Track Sliding Outer Frame (without net section)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/06-3-track-sliding-outer-frame-(without-net-section).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>07</td><td>3 Track Sliding Outer Frame (with net section)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/07-3-track-sliding-outer-frame-(with-net-section).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>08</td><td>4" Fixed Frame (Width: 101mm)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/08-4in-fixed-frame-(width-101mm).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>09</td><td>4" Fixed Frame (Width: 91mm)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/09-4in-fixed-frame-(width-91mm).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>10</td><td>Corner Box Section</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/10-corner-box-section.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>11</td><td>Door Handles</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/11-door-handles.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>12</td><td>Swing Door Frame</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/12-swing-door-frame.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>13</td><td>EDP</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/13-edp.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>14</td><td>Standard Thai Series</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/14-standard-thai-series.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>15</td><td>EuroMaxx</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/15-euromaxx.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>16</td><td>Domalco</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/16--domalco.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>17</td><td>Elios</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/17-elios.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>18</td><td>Bifold</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/18-bifold.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>19</td><td>Lift &amp; Slide Door</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/20-lift---slide-door.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>20</td><td>Angles</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/21-angles.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>21</td><td>U Channel</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/22-u-channel.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>22</td><td>Box</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/23-box.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>23</td><td>Stick Wall 50</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/24-stick-wall-50.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>24</td><td>Stick Wall 65</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/25-stick-wall-65.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>25</td><td>Stick Wall 81</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/26-stick-wall-81.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>26</td><td>Stick Wall 101</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/27-stick-wall-101.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>27</td><td>Stick Wall 115</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/28-stick-wall-115.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>28</td><td>Toggle System</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/29-toggle-system.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>29</td><td>Semi Unitized (50x100)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/30-semi-unitized-(50x100).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>30</td><td>Semi Unitized (50x105.5)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/31-semi-unitized-(50x105.5).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>31</td><td>Semi Unitized (60x125)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/32-semi-unitized-(60x125).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>32</td><td>Semi Unitized Series (CWN)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/33-semi-unitized-series-(cwn).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>33</td><td>Semi Unitized Series (WWN)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/34-semi-unitized-series-(wwn).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>34</td><td>Semi Unitized Series (WWA)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/35-semi-unitized-series-(wwa).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>35</td><td>Semi Unitized Series (SL)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/36-semi-unitized-series-(sl).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>36</td><td>Corner Profile</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/37-corner-profile.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>37</td><td>Semi Unitized Series (WCG)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/38-semi-unitized-series-(wcg).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>38</td><td>Semi Unitized Series (120)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/39-semi-unitized-series-(120).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>39</td><td>Customized (UG)</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/40-customized-(ug).pdf" target="_blank">PDF</a></td></tr>
              <tr><td>40</td><td>Casement</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/41-casement.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>41</td><td>ACP Profiles / Accessories</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/42-acp-profiles-or-accessories.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>42</td><td>Louver</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/43-louver.pdf" target="_blank">PDF</a></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="cat-hw" class="tab-panel" :class="{ active: tab === 'cat-hw' }">
        <div class="table-wrap">
          <table class="data">
            <thead><tr><th>#</th><th>Profile</th><th class="num">Download</th></tr></thead>
            <tbody>
              <tr><td>43</td><td>Round &amp; Corrugated Pipe</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/44-round---corrugated-pipe.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>44</td><td>Bazar Section</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/45-bazar-section.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>45</td><td>T Section</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/55-t-section.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>46</td><td>Tower Bolt</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/56-tower-bolt.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>47</td><td>Sandwich Panel Fittings</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/58-sandwich-panel-fittings.pdf" target="_blank">PDF</a></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="cat-furn" class="tab-panel" :class="{ active: tab === 'cat-furn' }">
        <div class="table-wrap">
          <table class="data">
            <thead><tr><th>#</th><th>Profile</th><th class="num">Download</th></tr></thead>
            <tbody>
              <tr><td>48</td><td>Office Furniture</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/46-01-office-furniture.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>49</td><td>Office Partition</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/46-02-office-partition.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>50</td><td>Bathroom Shelf</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/49-bathroom-shelf.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>51</td><td>Washroom Door &amp; Door Handle</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/50-washroom-door---door-handle.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>52</td><td>Vertical &amp; Roller Blind</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/51-vertical---roller-blind.pdf" target="_blank">PDF</a></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="cat-ind" class="tab-panel" :class="{ active: tab === 'cat-ind' }">
        <div class="table-wrap">
          <table class="data">
            <thead><tr><th>#</th><th>Profile</th><th class="num">Download</th></tr></thead>
            <tbody>
              <tr><td>53</td><td>Textile</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/47-textile.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>54</td><td>Ladder</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/48-ladder.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>55</td><td>AC Ducting</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/52-ac-ducting.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>56</td><td>Automobile Section</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/53-automobile-section.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>57</td><td>Signboard</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/54-signboard.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>58</td><td>Stair Nosing</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/57-stair-nosing.pdf" target="_blank">PDF</a></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="cat-elec" class="tab-panel" :class="{ active: tab === 'cat-elec' }">
        <div class="table-wrap">
          <table class="data">
            <thead><tr><th>#</th><th>Profile</th><th class="num">Download</th></tr></thead>
            <tbody>
              <tr><td>59</td><td>General Heatsink</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/59-general-heatsink.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>60</td><td>LED Light Profiles</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/60-led-light-profiles.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>61</td><td>Connector</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/61-connector.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>62</td><td>Busbar, Flat Bar &amp; Rod</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/62-busbar,-flat-bar---rod.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>63</td><td>Solar Structure Profiles</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/63-solar-structure-profiles.pdf" target="_blank">PDF</a></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="cat-oth" class="tab-panel" :class="{ active: tab === 'cat-oth' }">
        <div class="table-wrap">
          <table class="data">
            <thead><tr><th>#</th><th>Profile</th><th class="num">Download</th></tr></thead>
            <tbody>
              <tr><td>64</td><td>Customized Profile</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/64-customized-profile.pdf" target="_blank">PDF</a></td></tr>
              <tr><td>65</td><td>Others</td><td class="num"><a class="btn btn-dark" href="/assets/pdfs/65-others.pdf" target="_blank">PDF</a></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
