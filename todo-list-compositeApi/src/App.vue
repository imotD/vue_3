<script setup>
import { computed, reactive, ref, watchEffect } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const say = ref("Hai aku frontend developer");

const user = reactive({
  name: "Tommy Alhamra",
  job: "Frontend Developer",
});
// const { name, job } = toRefs(user);

const counter = reactive({
  project: 0,
});

const add = () => {
  counter.project++;
};

setTimeout(() => {
  say.value =
    "aku akan menjadi senior frontend developer dan juga fullstack developer";

  user.job = "Fullstack Developer";
}, 2000);

const kandidat = computed(() => {
  return user.name + " => " + user.job;
});

watchEffect(() => {
  console.log("=>", counter.project);
});
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" title="Tommy YOGS" />
    </div>
  </header>

  <main>
    <h1>{{ say }}</h1>
    <br />
    {{ kandidat }}
    <br />
    {{ counter.project }}
    <button @click="add">add</button>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
