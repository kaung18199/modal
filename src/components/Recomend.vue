<template>
  <div class="">
    <carousel :items-to-show="1" :wrap-around="true" :autoplay="4000">
      <slide v-for="slide in recomend_data" :key="slide.id">
        <div class="space-y-8 my-10">
          <img
            :src="slide.image"
            class="w-20 md:w-28 lg:w-36 h-20 md:h-28 lg:h-36 rounded-full border border-gray-400 shadow-lg mx-auto"
            alt=""
          />
          <div
            class="text-base md:text-lg lg:text-xl text-gray-600 letter-spacing-text font-vidaloka px-4 text-center w-full md:w-[600px] lg:w-[800px]"
          >
            {{ slide.description }}
          </div>
          <div class="flex justify-center items-center space-x-8">
            <p
              class="text-lg font-italic text-gray-600 letter-spacing-text font-vidaloka"
            >
              {{ slide.name }}
            </p>
            <p
              class="text-lg font-italic text-gray-600 letter-spacing-text font-vidaloka"
            >
              {{ slide.position }}
            </p>
          </div>
        </div>
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref } from "vue";

const recomend_data = ref([
  {
    id: 1,
    image:
      "https://www.greenlifeindustry.com.au/static/uploads/images/simon-smith-wftoeonyxyit.jpg",
    name: "Name One",
    description:
      "he 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like ",
    position: "Director",
  },
  {
    id: 2,
    image:
      "https://media.licdn.com/dms/image/C4E03AQEMGEhAkNv0sg/profile-displayphoto-shrink_400_400/0/1651667160420?e=1699488000&v=beta&t=48xvtKiX218nVdUrjOIhiZxdT53-5LT0GonetUC4VT0",
    name: "Name Two",
    description:
      "he 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like ",
    position: "Productor",
  },
  {
    id: 3,
    image:
      "https://fueloilnews.co.uk/wp-content/uploads/2023/07/Mathew-Crockett-220x220.jpg",
    name: "Name Three",
    description:
      "he 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like ",
    position: "Acttor",
  },
]);
</script>

<style lang="stylus" scoped></style>
