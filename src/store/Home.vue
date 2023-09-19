<template>
  <div class="relative w-full overflow-x-hidden">
    <!-- slide icon -->
    <div
      class="fixed top-[23%] left-1 md:left-6 lg:left-6 z-30 space-y-6 border-l border-gray-500"
    >
      <p class="w-2 h-2 bg-red-600 rounded-full"></p>
      <div class="group cursor-pointer hover:border-l-2 border-gray-800 px-4">
        <p class="block group-hover:hidden font-vidaloka">01</p>
        <a href="#home"
          ><p class="hidden group-hover:block font-vidaloka">Home</p></a
        >
      </div>
      <p class="w-2 h-2 bg-red-600 rounded-full"></p>
      <div class="group cursor-pointer hover:border-l-2 border-gray-800 px-4">
        <p class="block group-hover:hidden font-vidaloka">02</p>
        <a href="#about"
          ><p class="hidden group-hover:block font-vidaloka">About</p></a
        >
      </div>
      <p class="w-2 h-2 bg-red-600 rounded-full"></p>
      <div class="group cursor-pointer hover:border-l-2 border-gray-800 px-4">
        <p class="block group-hover:hidden font-vidaloka">03</p>
        <a href="#recommend"
          ><p class="hidden group-hover:block font-vidaloka">Recomment</p></a
        >
      </div>
      <p class="w-2 h-2 bg-red-600 rounded-full"></p>
      <div class="group cursor-pointer hover:border-l-2 border-gray-800 px-4">
        <p class="block group-hover:hidden font-vidaloka">04</p>
        <a href="#gallery"
          ><p class="hidden group-hover:block font-vidaloka">Gallery</p></a
        >
      </div>
      <p class="w-2 h-2 bg-red-600 rounded-full"></p>
      <div class="group cursor-pointer hover:border-l-2 border-gray-800 px-4">
        <p class="block group-hover:hidden font-vidaloka">05</p>
        <a href="#alblum"
          ><p class="hidden group-hover:block font-vidaloka">Alblum</p></a
        >
      </div>
      <p class="w-2 h-2 bg-red-600 rounded-full"></p>
    </div>
    <!-- home -->
    <div
      class="h-screen bg-slate-400 relative overflow-hidden login-image"
      id="home"
    >
      <img
        src="../assets/dots.png"
        class="absolute bottom-0 md:top-0 left-0 object-fill z-20 opacity-20"
        alt=""
      />
      <img
        src="../assets/IMG_0247-removebg-preview.png"
        class="absolute w-full bottom-0 block md:hidden"
        alt=""
      />
      <img
        src="../assets/Untitled-1.png"
        class="hidden sm:block absolute bottom-0 object-cover lg:bottom-0 h-full"
        alt=""
      />
      <div class="h-screen w-full bg-gray-900/40 absolute z-10"></div>
      <div
        data-aos="fade-right"
        class="absolute z-20 top-[60%] sm:top-[40%] md:top-[30%] left-[20%] space-y-6 md:space-y-10 lg:space-y-14"
      >
        <p
          class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-vidaloka font-italic text-white letter-spacing-wide"
        >
          ACTOR/MODAL
        </p>
        <div>
          <p
            class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-vidaloka font-extrabold text-white"
          >
            MODAL
          </p>
          <p
            class="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-vidaloka font-extrabold text-white"
          >
            RAMKI YE KO
          </p>
        </div>
        <a
          href="#contact"
          class="text-base font-semibold text-white px-6 inline-block py-3 border-2 border-gray-300 rounded-full text-center hover:bg-gray-900 animate-bounce duration-200"
        >
          contact me
        </a>
      </div>
    </div>

    <!-- about -->
    <div
      class="h-auto xl:h-screen bg-white grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 overflow-hidden my-8"
      id="about"
    >
      <div
        data-aos="fade-up-right"
        class="flex justify-center items-center ml-8 md:ml-12 lg:ml-20"
      >
        <div class="relative mb-10">
          <img
            class="w-auto h-[300px] md:h-[400px] lg:h-[500px] absolute top-10 left-10 hover:top-0 hover:left-0 duration-150 transition-all z-10"
            src="../assets/img12.jpeg"
            alt=""
          />
          <div
            class="bg-slate-500 w-[200px] md:w-[260px] lg:w-[350px] h-[300px] md:h-[400px] lg:h-[500px] mx-auto opacity-10"
          ></div>
        </div>
      </div>
      <div
        data-aos="fade-up-left"
        class="mr-10 lg:mr-20 mt-10 lg:mt-20 xl:mt-36 ml-16 lg:ml-20 mb-10 space-y-4 md:space-x-6 lg:space-y-8"
      >
        <p
          class="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-800 font-vidaloka pl-0 md:pl-4"
        >
          The Most Talented Young Model in Myanmar
        </p>
        <p class="text-sm text-gray-600 letter-spacing-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
          laboriosam blanditiis nemo aperiam tenetur aliquid maxime placeat!
          Temporibus libero et ea voluptate, ex rem ut voluptatum asperiores
          obcaecati ducimus,
        </p>
        <p class="text-sm text-gray-600 letter-spacing-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
          laboriosam blanditiis nemo
        </p>
        <div class="flex justify-start items-center space-x-6">
          <p class="text-3xl font-semibold font-vidaloka">2020</p>
          <p class="w-2 h-2 bg-red-600 rounded-full"></p>
          <p class="text-base md:text-lg font-italic font-thin">
            FIRST STARRING FILM ROLE
          </p>
        </div>
        <div class="flex justify-start items-center space-x-6">
          <p class="text-3xl font-semibold font-vidaloka mr-4">215</p>
          <p class="w-2 h-2 bg-red-600 rounded-full"></p>
          <p class="text-base md:text-lg font-italic font-thin">
            AWARDS AND NOMINATIONS
          </p>
        </div>
        <div class="flex justify-start items-center space-x-6">
          <p class="text-3xl font-semibold font-vidaloka mr-8">17</p>
          <p class="w-2 h-2 bg-red-600 rounded-full"></p>
          <p class="text-base md:text-lg font-italic font-thin">
            FEATURE FILMS TO DATE
          </p>
        </div>
      </div>
    </div>

    <!-- recommend -->
    <div class="h-auto my-auto" id="recommend">
      <div
        class="flex justify-center items-center py-20 mt-10 mb-20 px-10 bg-gray-900/70 space-x-8 relative overflow-hidden"
      >
        <img
          src="../assets/dots.png"
          class="absolute bottom-0 md:top-0 left-0 object-fill z-20 opacity-20"
          alt=""
        />
        <p
          class="text-base md:text-lg lg:text-xl font-semibold text-gray-300 letter-spacing-text font-vidaloka"
        >
          LET MAKE GREAT THING TOGATHER
        </p>
        <a
          href="#contact"
          class="text-base font-semibold text-white px-6 inline-block py-3 border-2 border-gray-300 rounded-full text-center hover:bg-gray-900 relative z-20 animate-bounce"
        >
          contact
        </a>
      </div>
      <div data-aos="zoom-in-up" class="space-y-4 mb-5 mt-5">
        <p
          class="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-800 letter-spacing-text font-vidaloka text-center mt-10"
        >
          RECOMMENT
        </p>
        <p
          class="text-xl text-gray-600 font-vidaloka text-center font-italic letter-spacing-text font-semibold"
        >
          LET MAKE GREAT THING TOGETHER
        </p>
      </div>
      <div class="grid grid-cols-1 gap-8">
        <div class="px-8 md:px-20 py-10 lg:px-32">
          <Recomend />
        </div>
      </div>
    </div>

    <!-- gallery -->
    <div
      class="h-auto pb-10 lg:pb-0 py-[5%] bg-gray-900/70 relative overflow-hidden"
      id="gallery"
    >
      <div data-aos="zoom-in-up" class="space-y-4 mb-10 mt-8 relative z-30">
        <p
          class="text-gray-300 text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold letter-spacing-text font-vidaloka text-center mt-10 sm:mt-0"
        >
          OUR GALLERY
        </p>
        <p
          class="text-xl text-gray-100 font-vidaloka text-center font-italic letter-spacing-text font-semibold"
        >
          LET MAKE GREAT THING TOGETHER
        </p>
      </div>
      <div class="pt-10 pb-10 relative z-30">
        <Gallery />
      </div>
      <img
        src="../assets/dots.png"
        class="absolute bottom-0 md:top-0 left-0 object-fill z-20 opacity-20"
        alt=""
      />
    </div>

    <!-- alblum -->
    <div class="pb-[5%] mt-10 md:mt-20" id="alblum">
      <div data-aos="zoom-in-up" class="space-y-4 mb-5">
        <p
          class="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-800 letter-spacing-text font-vidaloka text-center mt-8"
        >
          MY ALBLUM
        </p>
        <p
          class="text-xl text-gray-600 font-vidaloka text-center font-italic letter-spacing-text font-semibold"
        >
          THAT IS MY SELECTION
        </p>
      </div>

      <AlblumVue />
    </div>

    <!-- contact me -->
    <div
      class="h-auto lg:h-screen bg-white mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 relative overflow-hidden"
      id="contact"
    >
      <div
        data-aos="fade-up-right"
        class="hidden md:flex justify-center items-center ml-8 md:ml-12 lg:ml-20"
      >
        <div class="relative mb-10">
          <img
            class="w-auto h-[300px] md:h-[400px] lg:h-[500px] absolute top-10 left-10 hover:top-0 hover:left-0 duration-150 transition-all z-10"
            src="../assets/img18.jpeg"
            alt=""
          />
          <div
            class="bg-slate-500 w-[200px] md:w-[260px] lg:w-[350px] h-[300px] md:h-[400px] lg:h-[500px] mx-auto opacity-10"
          ></div>
        </div>
      </div>
      <div data-aos="fade-left">
        <p
          class="mr-8 md:mr-10 lg:mr-20 mt-10 lg:mt-36 ml-16 lg:ml-20 text-sm sm:text-base md:text-xl lg:text-2xl text-gray-800 font-vidaloka font-italic letter-spacing-text font-semibold"
        >
          HAVE A NEW PROJECT? SEND ME A MESSAGE AT
        </p>
        <div
          class="mr-20 mt-14 ml-20 space-x-8 flex justify-start items-start relative z-40"
        >
          <p>
            <i
              class="fa-brands fa-facebook text-2xl md:text-3xl lg:text-4xl text-gray-500 hover:scale-125 duration-150"
            ></i>
          </p>
          <p>
            <i
              class="fa-brands fa-viber text-2xl md:text-3xl lg:text-4xl text-gray-500 hover:scale-125 duration-150"
            ></i>
          </p>
          <p>
            <i
              class="fa-brands fa-instagram text-2xl md:text-3xl lg:text-4xl text-gray-500 hover:scale-125 duration-150"
            ></i>
          </p>
          <p>
            <i
              class="fa-brands fa-telegram text-2xl md:text-3xl lg:text-4xl text-gray-500 hover:scale-125 duration-150"
            ></i>
          </p>
        </div>
      </div>
      <div class="text-end col-span-2 pr-20 mb-8 font-vidaloka text-gray-500">
        <p>Created by Neptunemm</p>
      </div>
      <img
        src="../assets/dots.png"
        class="absolute bottom-0 md:top-0 left-0 object-fill z-20 opacity-5"
        alt=""
      />
    </div>
    <!-- footer -->
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Recomend from "../components/Recomend.vue";
import Gallery from "../components/Gallery.vue";
import AlblumVue from "../store/AlblumHome.vue";

const location = ref("");
</script>

<style>
.letter-spacing-wide {
  letter-spacing: 0.2em;
}
.letter-spacing-text {
  letter-spacing: 0.1em;
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(-6%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
