<template>
  <div class="">
    <TabGroup :selectedIndex="selectedTab">
      <TabList
        class="flex p-6 mb-5 space-x-2 rounded-lg shadow-sm bg-white/60 justify-center items-center"
      >
        <Tab as="template" v-slot="{ selected }" @click="changeTab(0)">
          <button
            :class="{
              'bg-gray-600 text-white': selected,
              'bg-white text-gray-600': !selected,
            }"
            class="flex items-center gap-3 tracking-wide text-xs cursor-pointer py-3 px-3 md:px-5 focus:outline-none text-gray-600 shadow rounded-md"
          >
            ALL
          </button>
        </Tab>
        <Tab as="template" v-slot="{ selected }" @click="changeTab(1)">
          <button
            :class="{
              'bg-gray-600 text-white': selected,
              'bg-white text-black': !selected,
            }"
            class="flex items-center gap-3 tracking-wide text-xs cursor-pointer py-3 px-3 md:px-5 focus:outline-none text-gray-600 shadow rounded-md flex-nowrap"
          >
            Street
          </button>
        </Tab>
        <Tab as="template" v-slot="{ selected }" @click="changeTab(2)">
          <button
            :class="{
              'bg-gray-600 text-white': selected,
              'bg-white text-black': !selected,
            }"
            class="flex items-center gap-3 tracking-wide text-xs cursor-pointer py-3 px-3 md:px-5 focus:outline-none text-gray-600 shadow rounded-md"
          >
            Culture
          </button>
        </Tab>
        <Tab as="template" v-slot="{ selected }" @click="changeTab(3)">
          <button
            :class="{
              'bg-gray-600 text-white': selected,
              'bg-white text-black': !selected,
            }"
            class="flex items-center gap-3 tracking-wide text-xs cursor-pointer py-3 px-3 md:px-5 focus:outline-none text-gray-600 shadow rounded-md"
          >
            Fusion
          </button>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <AlblumAll />
        </TabPanel>
        <TabPanel>
          <Street />
        </TabPanel>
        <TabPanel>
          <Culture />
        </TabPanel>
        <TabPanel>
          <Fusion />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { ref } from "vue";
import AlblumAll from "../components/Alblum.vue";
import Street from "../components/Street.vue";
import Culture from "../components/Culture.vue";
import Fusion from "../components/Fusion.vue";

const selectedTab = ref(0);

const changeTab = (index) => {
  selectedTab.value = index;
};
</script>
