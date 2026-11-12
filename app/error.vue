<script setup lang="ts">
const error = useError()

useSeo({
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  noindex: true
})
</script>

<template>
  <div class="site">
    <main>
      <section class="section">
        <div class="container">
          <div class="section-head">
            <span class="kicker">Error {{ error?.statusCode ?? 404 }}</span>
            <h2>Page Not Found</h2>
            <p>The page you are looking for doesn't exist or has been moved.</p>
          </div>
          <p><NuxtLink class="btn btn-primary" to="/">Back to Home</NuxtLink></p>
        </div>
      </section>
    </main>
  </div>
</template>
