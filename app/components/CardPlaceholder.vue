<template>
  <div class="card-img card-img-ph" aria-hidden="true">
    <svg viewBox="0 0 160 120" focusable="false">
      <rect x="4" y="4" width="152" height="112" rx="10" fill="none" stroke="currentColor" stroke-opacity="0.28" stroke-width="1.5" stroke-dasharray="7 7" />
      <g fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="2.5" stroke-linejoin="round">
        <rect x="56" y="30" width="48" height="9" rx="1.5" />
        <rect x="56" y="81" width="48" height="9" rx="1.5" />
        <rect x="74" y="39" width="12" height="42" />
      </g>
      <text x="80" y="105" text-anchor="middle" font-size="8.5" font-weight="700" letter-spacing="1.4" fill="currentColor" fill-opacity="0.6">NO IMAGE</text>
    </svg>
  </div>
</template>

<style scoped>
.card-img-ph {
  display: grid;
  place-items: center;
  color: var(--text-light);
}
.card-img-ph svg {
  width: 100%;
  height: 100%;
}
</style>
