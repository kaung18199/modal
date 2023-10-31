<template>
  <div>
    <div
      data-aos="fade-left"
      class="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 md:px-16 lg:px-20"
    >
      <div class="grid gap-4">
        <div class="relative overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition rounded-lg"
            @click="showImageHandle(img1)"
            :src="img1"
            alt=""
          />
        </div>
        <div class="relative h-[200px] overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute top-0"
            @click="showImageHandle(img2)"
            :src="img2"
            alt=""
          />
        </div>
        <div
          class="relative h-[150px] overflow-hidden rounded-lg flex justify-center"
        >
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute bottom-0"
            @click="showImageHandle(img10)"
            :src="img10"
            alt=""
          />
        </div>
        <div class="relative overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition rounded-lg"
            @click="showImageHandle(img3)"
            :src="img3"
            alt=""
          />
        </div>
        <div class="relative h-[200px] overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute top-0"
            @click="showImageHandle(img11)"
            :src="img11"
            alt=""
          />
        </div>
        <div
          class="relative h-[150px] overflow-hidden rounded-lg flex justify-center"
        >
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute bottom-0"
            @click="showImageHandle(img12)"
            :src="img12"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div class="relative h-[200px] overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute top-0"
            @click="showImageHandle(img6)"
            :src="img6"
            alt=""
          />
        </div>
        <div class="relative h-[150px] overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute bottom-0"
            @click="showImageHandle(img5)"
            :src="img5"
            alt=""
          />
        </div>
        <div class="relative overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition rounded-lg"
            @click="showImageHandle(img4)"
            :src="img4"
            alt=""
          />
        </div>
        <div class="relative h-[200px] overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute top-0"
            @click="showImageHandle(img13)"
            :src="img13"
            alt=""
          />
        </div>
        <div class="relative h-[150px] overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute bottom-0"
            @click="showImageHandle(img15)"
            :src="img15"
            alt=""
          />
        </div>
        <div class="relative overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition rounded-lg"
            @click="showImageHandle(img14)"
            :src="img14"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div class="relative h-[150px] overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute bottom-0"
            @click="showImageHandle(img9)"
            :src="img9"
            alt=""
          />
        </div>

        <div class="relative overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition rounded-lg"
            @click="showImageHandle(img8)"
            :src="img8"
            alt=""
          />
        </div>
        <div class="relative h-[200px] overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute top-0"
            @click="showImageHandle(img7)"
            :src="img7"
            alt=""
          />
        </div>
        <div class="relative h-[150px] overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute bottom-0"
            @click="showImageHandle(img16)"
            :src="img16"
            alt=""
          />
        </div>

        <div class="relative overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition rounded-lg"
            @click="showImageHandle(img18)"
            :src="img18"
            alt=""
          />
        </div>
        <div class="relative h-[200px] overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute top-0"
            @click="showImageHandle(img17)"
            :src="img17"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div class="relative overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition rounded-lg"
            @click="showImageHandle(img21)"
            :src="img21"
            alt=""
          />
        </div>
        <div class="relative h-[200px] overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute top-0"
            @click="showImageHandle(img11)"
            :src="img11"
            alt=""
          />
        </div>
        <div class="relative h-[150px] overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute bottom-0"
            @click="showImageHandle(img12)"
            :src="img12"
            alt=""
          />
        </div>
        <div class="relative overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition rounded-lg"
            @click="showImageHandle(img19)"
            :src="img19"
            alt=""
          />
        </div>
        <div class="relative h-[200px] overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute top-0"
            @click="showImageHandle(img20)"
            :src="img20"
            alt=""
          />
        </div>
        <div class="relative h-[150px] overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute bottom-0"
            @click="showImageHandle(img10)"
            :src="img10"
            alt=""
          />
        </div>
      </div>
    </div>
    <Modal :isOpen="categoryModalOpen" @closeModal="categoryModalOpen = false">
      <DialogPanel
        class="max-w-lg transform overflow-hidden rounded-lg bg-white p-4 text-left align-middle shadow-xl transition-all"
      >
        <div class="flex justify-start relative">
          <DialogTitle
            as="h3"
            class="text-base font-medium leading-6 text-gray-900 mb-5"
          >
          </DialogTitle>
          <p
            class="absolute top-[10px] flex justify-start items-center space-x-3 bg-gray-400/60 hover:bg-gray-800 rounded-full px-3 py-1.5 shadow cursor-pointer"
            @click="categoryModalOpen = false"
          >
            <i class="fa-solid fa-xmark text-xl text-white"></i>
          </p>
        </div>
        <img :src="showImage" class="h-auto" alt="" />
      </DialogPanel>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "./Modal.vue";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";
import img1 from "../assets/tradi/0 (1).JPG";
import img2 from "../assets/tradi/0 (23).JPG";
import img3 from "../assets/tradi/0 (24).JPG";
import img4 from "../assets/tradi/0 (25).JPG";
import img5 from "../assets/tradi/0 (26).JPG";
import img6 from "../assets/tradi/0 (27).JPG";
import img7 from "../assets/tradi/0 (28).JPG";
import img8 from "../assets/tradi/0 (29).JPG";
import img9 from "../assets/tradi/0 (30).JPG";
import img10 from "../assets/tradi/0 (31).JPG";
import img11 from "../assets/tradi/0 (32).jpg";
import img12 from "../assets/tradi/0 (33).jpg";
import img13 from "../assets/tradi/0 (34).jpg";
import img14 from "../assets/tradi/0 (35).jpg";
import img15 from "../assets/tradi/0 (36).jpg";
import img16 from "../assets/tradi/0 (37).jpg";
import img17 from "../assets/tradi/0 (38).jpg";
import img18 from "../assets/tradi/0 (39).JPG";
import img19 from "../assets/tradi/0 (40).JPG";
import img20 from "../assets/tradi/0 (41).JPG";
import img21 from "../assets/tradi/0 (42).JPG";
import img22 from "../assets/tradi/0 (43).JPG";
import img23 from "../assets/tradi/0 (44).JPG";
import img24 from "../assets/tradi/0 (45).JPG";
import img25 from "../assets/tradi/0 (46).JPG";
import img26 from "../assets/tradi/0 (47).JPG";
import img27 from "../assets/tradi/0 (48).JPG";
import img28 from "../assets/tradi/0 (49).JPG";
import img29 from "../assets/tradi/0 (50).JPG";

const showImage = ref("");
const categoryModalOpen = ref(false);

const showImageHandle = (imgU) => {
  categoryModalOpen.value = true;
  showImage.value = imgU;
};
</script>
