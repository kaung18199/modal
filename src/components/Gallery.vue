<template>
  <div>
    <Carousel
      :breakpoints="breakpoints"
      :wrapAround="true"
      :transition="500"
      :autoplay="4000"
    >
      <Slide v-for="slide in image" :key="slide.id">
        <div class="carousel__item rounded-md">
          <img
            :src="slide.image"
            class="object-cover h-[320px] rounded-md shadow-md"
            alt=""
          />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

import img4 from "../assets/img3.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
import img10 from "../assets/img10.jpeg";
import img11 from "../assets/img11.jpeg";
import img12 from "../assets/img12.jpeg";
import img13 from "../assets/img13.jpeg";
import img14 from "../assets/img14.jpeg";
import img15 from "../assets/img15.jpeg";
import img16 from "../assets/img16.jpeg";
import img17 from "../assets/img17.jpeg";
import img18 from "../assets/img18.jpeg";
import img19 from "../assets/img19.jpeg";
import img20 from "../assets/img20.jpeg";
import img21 from "../assets/img21.jpeg";
import img22 from "../assets/img22.jpeg";
import img23 from "../assets/img23.jpeg";
import img24 from "../assets/img24.jpeg";
import img25 from "../assets/img25.jpeg";
import img26 from "../assets/img26.jpeg";
import img27 from "../assets/img27.jpeg";
import img28 from "../assets/img28.jpeg";
import img29 from "../assets/img29.jpeg";
import img30 from "../assets/img30.jpeg";
import img31 from "../assets/img31.jpeg";
import img32 from "../assets/img32.jpeg";

const image = ref([
  {
    id: 1,
    image: img14,
  },
  {
    id: 2,
    image: img15,
  },
  {
    id: 3,
    image: img16,
  },
  {
    id: 4,
    image: img17,
  },
  {
    id: 5,
    image: img18,
  },
  {
    id: 6,
    image: img19,
  },
  {
    id: 7,
    image: img20,
  },
  {
    id: 8,
    image: img21,
  },
  {
    id: 9,
    image: img22,
  },
  {
    id: 10,
    image: img23,
  },
  {
    id: 11,
    image: img24,
  },
  {
    id: 13,
    image: img25,
  },
  {
    id: 14,
    image: img26,
  },
  {
    id: 15,
    image: img27,
  },
  {
    id: 16,
    image: img28,
  },
  {
    id: 17,
    image: img29,
  },
  {
    id: 18,
    image: img30,
  },
  {
    id: 19,
    image: img31,
  },
  {
    id: 20,
    image: img32,
  },
  {
    id: 21,
    image: img4,
  },
  {
    id: 22,
    image: img5,
  },
  {
    id: 23,
    image: img6,
  },
  {
    id: 24,
    image: img7,
  },
  {
    id: 25,
    image: img8,
  },
  {
    id: 26,
    image: img9,
  },
  {
    id: 27,
    image: img10,
  },
  {
    id: 28,
    image: img11,
  },
  {
    id: 29,
    image: img12,
  },
  {
    id: 30,
    image: img13,
  },
]);

const breakpoints = {
  300: {
    itemsToShow: 1.8,
    snapAlign: "center",
  },
  400: {
    itemsToShow: 2.1,
    snapAlign: "center",
  },
  500: {
    itemsToShow: 2.6,
    snapAlign: "center",
  },
  600: {
    itemsToShow: 2.8,
    snapAlign: "center",
  },
  700: {
    itemsToShow: 3.5,
    snapAlign: "center",
  },
  800: {
    itemsToShow: 3.8,
    snapAlign: "center",
  },
  // 700px and up
  900: {
    itemsToShow: 4.2,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 4.5,
    snapAlign: "center",
  },
  1124: {
    itemsToShow: 4.8,
    snapAlign: "center",
  },
  1200: {
    itemsToShow: 5.2,
    snapAlign: "center",
  },
  1300: {
    itemsToShow: 5.9,
    snapAlign: "center",
  },
};
</script>

<style>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.8;
  transform: rotateY(0deg) scale(0.9);
}

/* .carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
} */

.carousel__slide--prev {
  opacity: 0.8;
  transform: rotateY(0deg) scale(0.9);
}

.carousel__slide--next {
  opacity: 0.8;
  transform: rotateY(0deg) scale(0.9);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
