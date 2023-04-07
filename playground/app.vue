<!--suppress ALL -->
<template>
  <div class="container is-max-desktop px-5 py-5">
    <div class="content">
      <NuxtScrollbar class="box" @ps-scroll-y="onScroll">
        <div class="p-4">
          <h1>Nuxt Scrollbar Demo</h1>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
            amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque
            sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, ornare sit amet, wisi.
            Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
            rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
            facilisis. Ut felis.</p>

          <p>Aenean fermentum:</p>

          <ul>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ul>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis
            aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis
            mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p>

          <p>Curabitur massa:</p>

          <ul>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
          </ul>

          <p>Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis
            mollis, tellus est malesuada tellus, at luctus turpis elit.</p>
        </div>
      </NuxtScrollbar>

    </div>
  </div>
</template>

<script setup>
function onScroll (event) {
  console.log(event)
}
</script>

<style>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
}

.box {
  height: 400px;
  overflow-y: hidden;
}

ul {
  margin-left: 2rem;
}
</style>
