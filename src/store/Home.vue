<template>
  <div class="relative w-full overflow-x-hidden">
    <div
      @click="toggle()"
      class="fixed top-[5%] left-[2%] lg:left-6 z-50 px-5 py-4 bg-gray-950/80 rounded-full shadow hover:bg-gray-950 animate-bounce"
    >
      <i class="fa-solid text-gray-300 fa-bars" v-if="!showNav"></i>
      <i class="fa-solid text-gray-300 fa-xmark px-[2.5px]" v-if="showNav"></i>
    </div>
    <!-- slide icon -->
    <div
      class="fixed top-[15%] sm:top-[5%] lg:top-[15%] left-[2%] sm:left-[18%] md:left-[30%] lg:left-6 z-50 py-0 sm:py-4 lg:py-0 block sm:flex justify-center items-center lg:block px-5 sm:px-2 bg-gray-950/80 rounded-full space-x-0 sm:space-x-6 lg:space-x-0 space-y-6 sm:space-y-0 lg:space-y-6 shadow"
      v-if="showNav"
    >
      <p class="w-2 h-2 rounded-full"></p>
      <div class="group cursor-pointer px-0 lg:px-3">
        <p class="block group-hover:hidden font-vidaloka">
          <i class="fa-solid text-gray-300 fa-house-chimney"></i>
        </p>
        <a href="#home"
          ><p
            class="hidden group-hover:block font-vidaloka text-white"
            @click="toggle()"
          >
            <i class="fa-solid text-blue-300 fa-house-chimney"></i></p
        ></a>
      </div>
      <p class="w-2 h-2 rounded-full"></p>
      <div class="group cursor-pointer px-0 lg:px-3">
        <p class="block group-hover:hidden font-vidaloka">
          <i class="fa-solid text-gray-300 fa-address-card"></i>
        </p>
        <a href="#about"
          ><p
            class="hidden group-hover:block font-vidaloka text-white"
            @click="toggle()"
          >
            <i class="fa-solid text-blue-300 fa-address-card"></i></p
        ></a>
      </div>
      <p class="w-2 h-2 rounded-full"></p>
      <div class="group cursor-pointer px-0 lg:px-3">
        <p class="block group-hover:hidden font-vidaloka">
          <i class="fa-solid text-gray-300 fa-comments"></i>
        </p>
        <a href="#recommend"
          ><p
            class="hidden group-hover:block font-vidaloka text-white"
            @click="toggle()"
          >
            <i class="fa-solid text-blue-400 fa-comments"></i></p
        ></a>
      </div>
      <p class="w-2 h-2 rounded-full"></p>
      <div class="group cursor-pointer px-0 lg:px-3">
        <p class="block group-hover:hidden font-vidaloka">
          <i class="fa-solid text-gray-300 fa-photo-film"></i>
        </p>
        <a href="#gallery"
          ><p
            class="hidden group-hover:block font-vidaloka text-white"
            @click="toggle()"
          >
            <i class="fa-solid text-blue-400 fa-photo-film"></i></p
        ></a>
      </div>
      <p class="w-2 h-2 rounded-full"></p>
      <div class="group cursor-pointer px-0 lg:px-3">
        <p class="block group-hover:hidden font-vidaloka">
          <i class="fa-solid text-gray-300 fa-folder-open"></i>
        </p>
        <a href="#alblum"
          ><p
            class="hidden group-hover:block font-vidaloka text-white"
            @click="toggle()"
          >
            <i class="fa-solid text-blue-400 fa-folder-open"></i></p
        ></a>
      </div>
      <p class="w-2 h-2 rounded-full"></p>
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
        class="absolute z-20 top-[35%] sm:top-[35%] md:top-[30%] left-[20%] space-y-10 lg:space-y-14"
      >
        <p
          class="text-3xl md:text-3xl lg:text-3xl font-vidaloka font-italic text-white letter-spacing-wide"
        >
          ACTOR/MODAL
        </p>
        <div>
          <p
            class="text-5xl mb-2 lg:text-6xl font-vidaloka font-extrabold text-white letter-spacing-wide"
          >
            MODAL
          </p>
          <p
            class="text-3xl sm:text-5xl lg:text-6xl font-vidaloka font-extrabold text-white letter-spacing-wide"
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
      class="h-auto bg-white grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 my-8"
      id="about"
    >
      <div
        data-aos="fade-up-right"
        class="flex justify-center items-center ml-8 md:ml-12 lg:ml-20"
      >
        <div class="relative mb-10">
          <img
            class="w-auto h-[300px] md:h-[400px] lg:h-[500px] absolute top-10 left-10 hover:top-0 hover:left-0 duration-150 transition-all z-10"
            src="../assets/img16.jpeg"
            alt=""
          />
          <div
            class="bg-slate-500 w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] mx-auto opacity-10"
          ></div>
        </div>
      </div>
      <div
        data-aos="fade-up-left"
        class="mr-10 lg:mr-20 mt-10 ml-16 lg:ml-20 mb-10 space-y-4 md:space-x-6 lg:space-y-8"
      >
        <p
          class="text-2xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-800 font-vidaloka pl-0 md:pl-4"
        >
          The Most Talented Young Tamil Burmeses Model in Myanmar.
        </p>
        <div class="space-y-2 md:space-y-4">
          <p class="text-sm text-gray-600 letter-spacing-text">
            Meet Ramki (Ye Ko), the most talented Tamil Burmese young model in
            Myanmar. Started his career in 2019 with his striking looks and
            charming personality, Ramki has quickly become one of the most
            sought after models in the industry. Despite facing many challenges
            as a Tamil Burmese model in Myanmar, Ramki has managed to break
            barriers and make a name for himself.
          </p>
          <p class="text-sm text-gray-600 letter-spacing-text">
            Ramki's passion for modeling started at a young age and he has
            worked tirelessly to achieve his dreams. Ramki's success has not
            only brought him fame and recognition but has also inspired many
            young people in Myanmar to follow their dreams.
          </p>
          <p class="text-sm text-gray-600 letter-spacing-text">
            Apart from modeling, Ramki is also actively involved in various
            social causes. He uses his platform to raise awareness about
            important issues and to promote diversity and inclusion in the
            industry. Ramki's dedication to his craft and his commitment to
            making a positive impact on society make him a true role model for
            aspiring models and young people everywhere.
          </p>
          <p class="text-sm text-gray-600 letter-spacing-text">
            In conclusion, Ramki's talent, hard work, and dedication have made
            him one of the most successful models in Myanmar. His story is a
            testament to the power of perseverance and the importance of
            following your dreams, no matter how challenging they may seem.
          </p>

          <div class="flex justify-start items-center space-x-6">
            <p class="text-lg md:text-xl font-semibold font-vidaloka">Height</p>
            <p class="w-2 h-2 bg-red-600 rounded-full"></p>
            <p class="text-lg md:text-xl font-semibold font-vidaloka">5' 7"</p>
          </div>
          <div class="flex justify-start items-center space-x-6">
            <p class="text-lg md:text-xl font-semibold font-vidaloka">Weight</p>
            <p class="w-2 h-2 bg-red-600 rounded-full"></p>
            <p class="text-lg md:text-xl font-semibold font-vidaloka mr-4">
              145 lb (65 KG)
            </p>
          </div>
          <div class="flex justify-start items-center space-x-6">
            <p class="text-lg md:text-xl font-semibold font-vidaloka mr-3">
              D.O.B
            </p>
            <p class="w-2 h-2 bg-red-600 rounded-full"></p>
            <p class="text-lg md:text-xl font-semibold font-vidaloka mr-8">
              21-Jan-1992
            </p>
          </div>
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
          MY ALBUM
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
          class="mr-8 md:mr-10 lg:mr-20 mt-10 lg:mt-32 ml-16 lg:ml-20 text-sm sm:text-base md:text-xl lg:text-2xl text-gray-800 font-vidaloka font-italic letter-spacing-text font-semibold"
        >
          HAVE A NEW PROJECT? SEND ME A MESSAGE AT
        </p>

        <div
          class="mr-20 mt-10 lg:mt-14 ml-20 space-x-8 flex justify-start items-start relative z-40"
        >
          <p>
            <a
              href="https://www.facebook.com/ramrasksk?mibextid=ZbWKwL"
              target="_blink"
            >
              <i
                class="fa-brands fa-facebook text-2xl md:text-3xl lg:text-4xl text-gray-500 hover:scale-125 duration-150"
              ></i>
            </a>
          </p>
          <p>
            <a
              href="https://youtube.com/@Ramkiyeko?si=zd4pXO3ZyPo1Siy9"
              target="_blink"
            >
              <i
                class="fa-brands fa-youtube text-2xl md:text-3xl lg:text-4xl text-gray-500 hover:scale-125 duration-150 cursor-pointer"
              ></i>
            </a>
          </p>

          <p>
            <a href="https://twitter.com/Ramki47397383" target="_blink">
              <i
                class="fa-brands fa-twitter text-2xl md:text-3xl lg:text-4xl text-gray-500 hover:scale-125 duration-150"
              ></i>
            </a>
          </p>
        </div>
        <p
          class="mr-8 md:mr-10 lg:mr-20 mt-10 lg:mt-14 ml-16 lg:ml-20 text-sm sm:text-base md:text-xl lg:text-2xl text-gray-800 font-vidaloka font-italic letter-spacing-text font-semibold"
        >
          PERSONAL ACCOUNT
        </p>
        <div
          class="mr-20 mt-10 lg:mt-14 ml-20 space-x-8 flex justify-start items-start relative z-40"
        >
          <p>
            <a
              href="https://www.facebook.com/ramki.minkoko?mibextid=ZbWKwL"
              target="_blink"
            >
              <i
                class="fa-brands fa-facebook text-2xl md:text-3xl lg:text-4xl text-gray-500 hover:scale-125 duration-150"
              ></i>
            </a>
          </p>
          <p>
            <a
              href="https://instagram.com/im_ramki_official?igshid=MzRlODBiNWFlZA=="
              target="_blink"
            >
              <i
                class="fa-brands fa-instagram text-2xl md:text-3xl lg:text-4xl text-gray-500 hover:scale-125 duration-150"
              ></i>
            </a>
          </p>
          <p>
            <a href="tel:+959 541 5762">
              <i
                class="fa-solid fa-mobile-screen-button text-2xl md:text-3xl lg:text-4xl text-gray-500 hover:scale-125 duration-150 cursor-pointer"
              ></i>
            </a>
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

const showNav = ref(true);

const toggle = () => {
  showNav.value = !showNav.value;
};
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
