<template>
  <div class="q-py-md" style="max-width: 500px; margin: auto">
    <div class="row justify-between q-gutter-lg q-mb-lg">
      <q-select
        v-model="model"
        class="col"
        :options="options"
        outlined
        label="Sorting"
        @update:model-value="(value) => sortTask(value)"
      />

      <q-btn
        @click="emit('onDeleteItemAll')"
        color="primary"
        dense
        outline
        class="q-pa-sm"
        label="Clear Task"
      />
    </div>

    <q-list v-if="props.data.length > 0" bordered separator>
      <q-item v-for="list in listData" :key="list.id">
        <q-item-section side top>
          <q-checkbox
            v-model="list.checked"
            @update:model-value="(value) => emit('onToggleItem', list.id)"
          />
        </q-item-section>

        <q-item-section :class="{ 'text-strike	': list.checked }">
          {{ list.name }}
        </q-item-section>

        <q-item-section side>
          <div>
            <q-btn
              @click="emit('onDeleteItem', list)"
              class="gt-xs text-red-5"
              size="12px"
              flat
              dense
              round
              icon="delete"
            />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const props = defineProps(["data"]);
const emit = defineEmits(["onToggleItem", "onDeleteItem", "onDeleteItemAll"]);

const model = ref();

const store = useStore();

const options = [
  {
    label: "Urutkan berdasarkan nama task",
    value: "name",
  },
  {
    label: "Urutkan berdasarkan ceklis",
    value: "ceklis",
  },
];

const listData = computed(() => props.data);
const sortTask = (sort) => store.commit("todo/sortTask", sort);
</script>

<style lang="scss" scoped></style>
