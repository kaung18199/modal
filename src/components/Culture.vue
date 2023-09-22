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
      </div>
      <div class="grid gap-4">
        <div class="relative h-[200px] overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute top-0"
            @click="showImageHandle(img3)"
            :src="img3"
            alt=""
          />
        </div>
        <div class="relative overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition"
            @click="showImageHandle(img4)"
            :src="img4"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div class="relative overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition rounded-lg"
            @click="showImageHandle(img5)"
            :src="img5"
            alt=""
          />
        </div>
        <div class="relative h-[200px] overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition absolute top-0"
            @click="showImageHandle(img6)"
            :src="img6"
            alt=""
          />
        </div>
      </div>
      <div class="grid gap-4">
        <div class="relative overflow-hidden rounded-lg">
          <img
            class="h-auto max-w-full hover:scale-125 duration-105 cursor-pointer transition"
            @click="showImageHandle(img7)"
            :src="img7"
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
import img1 from "../assets/img14.jpeg";
import img2 from "../assets/img15.jpeg";
import img3 from "../assets/img25.jpeg";
import img4 from "../assets/img26.jpeg";
import img5 from "../assets/img27.jpeg";
import img6 from "../assets/img28.jpeg";
import img7 from "../assets/img29.jpeg";

const showImage = ref("");
const categoryModalOpen = ref(false);

const showImageHandle = (imgU) => {
  categoryModalOpen.value = true;
  showImage.value = imgU;
};
</script>
