<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout
      view="lHh lpr lFf"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated>
        <q-toolbar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>

          <q-toolbar-title>TodoApp Quasar</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page class="q-pa-md">
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </q-layout>
</template>

<script setup>
import { defineComponent, ref } from "vue";

const counter = ref(0);
</script>
