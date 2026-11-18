<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
const animations: { pause: () => void }[] = []
let disposed = false

onMounted(async () => {
  if (!root.value) return

  const { animate, stagger } = await import('animejs')
  if (disposed || !root.value) return

  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const pace = calm ? 2.6 : 1
  const reach = calm ? 0.5 : 1

  const el = root.value
  const orbs = el.querySelectorAll<HTMLElement>('.grad-orb')
  const bands = el.querySelector<HTMLElement>('.grad-bands')
  const sweep = el.querySelector<HTMLElement>('.grad-sweep')
  const sheen = el.querySelector<HTMLElement>('.grad-sheen')
  if (!orbs.length) return

  animations.push(
    animate(orbs, {
      translateX: (_el: Element, i: number) => [0, (i % 2 === 0 ? 190 : -160) * reach],
      translateY: (_el: Element, i: number) => [0, (i % 2 === 0 ? -120 : 150) * reach],
      scale: (_el: Element, i: number) => [1, i % 2 === 0 ? 1 + 0.18 * reach : 1 - 0.14 * reach],
      opacity: (_el: Element, i: number) => [0.5, i % 2 === 0 ? 0.85 : 0.35],
      duration: 3600 * pace,
      delay: stagger(280 * pace),
      loop: true,
      alternate: true,
      ease: 'inOutSine'
    })
  )

  if (bands) {
    animations.push(
      animate(bands, {
        translateX: [0, -180],
        duration: 5000 * pace,
        loop: true,
        ease: 'linear'
      })
    )
  }

  if (sweep) {
    animations.push(
      animate(sweep, {
        translateX: calm ? ['-6%', '6%'] : ['-16%', '16%'],
        duration: 4800 * pace,
        loop: true,
        alternate: true,
        ease: 'inOutQuad'
      })
    )
  }

  if (sheen) {
    animations.push(
      animate(sheen, {
        rotate: [0, 360],
        duration: 14000 * pace,
        loop: true,
        ease: 'linear'
      })
    )
  }
})

onBeforeUnmount(() => {
  disposed = true
  animations.forEach((animation) => animation.pause())
  animations.length = 0
})
</script>

<template>
  <div ref="root" class="grad-backdrop" aria-hidden="true">
    <span class="grad-sweep"></span>
    <span class="grad-orb orb-a"></span>
    <span class="grad-orb orb-b"></span>
    <span class="grad-orb orb-c"></span>
    <span class="grad-sheen"></span>
    <span class="grad-bands"></span>
  </div>
</template>

<style scoped>
.grad-backdrop {
  position: absolute;
  inset: 0;
  overflow: hidden;
  contain: paint;
  pointer-events: none;
  background:
    radial-gradient(58% 76% at 12% 14%, rgba(5, 166, 75, 0.32) 0%, transparent 60%),
    radial-gradient(52% 76% at 88% 16%, rgba(88, 88, 88, 0.7) 0%, transparent 62%),
    linear-gradient(135deg, #0d0d0d 0%, #1c1c1c 52%, #3a3a3a 100%);
}
.grad-bands {
  position: absolute;
  inset: -10% -20%;
  background: repeating-linear-gradient(
    118deg,
    rgba(242, 242, 242, 0) 0 120px,
    rgba(242, 242, 242, 0.028) 120px 190px,
    rgba(5, 166, 75, 0.045) 190px 260px
  );
  will-change: transform;
}
.grad-sweep {
  position: absolute;
  inset: -20% -30%;
  background: linear-gradient(115deg, rgba(5, 166, 75, 0) 24%, rgba(5, 166, 75, 0.28) 48%, rgba(242, 242, 242, 0.1) 56%, rgba(5, 166, 75, 0) 76%);
  will-change: transform;
}
.grad-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(34px);
  opacity: 0.5;
  transform-origin: center;
  will-change: transform, opacity;
}
.orb-a {
  width: 46%;
  aspect-ratio: 1;
  left: -12%;
  top: -26%;
  background: radial-gradient(circle, rgba(5, 166, 75, 0.7) 0%, rgba(5, 166, 75, 0) 72%);
}
.orb-b {
  width: 42%;
  aspect-ratio: 1;
  right: -14%;
  top: -18%;
  background: radial-gradient(circle, rgba(3, 115, 52, 0.62) 0%, rgba(3, 115, 52, 0) 72%);
}
.orb-c {
  width: 54%;
  aspect-ratio: 1;
  left: 26%;
  bottom: -46%;
  background: radial-gradient(circle, rgba(242, 242, 242, 0.18) 0%, rgba(242, 242, 242, 0) 72%);
}
.grad-sheen {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 150vmax;
  height: 150vmax;
  margin: -75vmax 0 0 -75vmax;
  background: conic-gradient(from 0deg, rgba(5, 166, 75, 0) 0deg, rgba(5, 166, 75, 0.14) 70deg, rgba(242, 242, 242, 0.04) 130deg, rgba(5, 166, 75, 0) 200deg, rgba(3, 115, 52, 0.12) 290deg, rgba(5, 166, 75, 0) 360deg);
  will-change: transform;
}

</style>
