<template>
  <div class="p-8">
    <div class="flex border p-2">
      <v-menu :state="state1">
        <v-menu-button as="vButton">
          <span>Open menu</span>
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </v-menu-button>
        <transition name="v-fade">
          <v-menu-items>
            <div class="px-4 py-3 border-b-2 border-gray-500">
              <h2 class="leading-5">Signed in as</h2>
              <p class="text-sm font-medium leading-5 text-gray-400 truncate">
                tom@example.com
              </p>
            </div>
            <v-menu-item v-slot="{ active }" :closeOnClick="false">
              <label
                class="flex flex-1 items-center p-2"
                :class="{ 'bg-purple-500': active }"
              >
                <v-checkbox />
                Item 1
              </label>
            </v-menu-item>
            <v-menu-item v-slot="{ active }" :closeOnClick="false">
              <label
                class="flex flex-1 items-center p-2"
                :class="{ 'bg-purple-500': active }"
              >
                <v-checkbox />
                Item 2
              </label>
            </v-menu-item>
            <v-menu-item disabled class="p-2"> Item 2</v-menu-item>
            <v-menu-separator class="bg-gray-500" />
            <v-menu-item class="p-2"> Item 3</v-menu-item>
          </v-menu-items>
        </transition>
      </v-menu>

      <!-- <div>
      <v-menu :state="state2" class="text-gray-700 ml-2">
        <v-menu-button as="vButton" class="px-2">
          <span class="material-icons-outlined">favorite</span>
        </v-menu-button>
        <v-menu-items class="right-0">
          <v-menu-item class="p-2"
            ><span class="material-icons-outlined mr-2">home</span>
            Home</v-menu-item
          >
          <v-menu-item class="p-2"
            ><span class="material-icons-outlined mr-2">favorite</span>
            Favorites</v-menu-item
          >
          <v-menu-item class="p-2"
            ><span class="material-icons-outlined mr-2">settings</span>
            Settings</v-menu-item
          >
          <v-menu-separator class="bg-gray-500" />
          <v-menu-item class="p-2"> Item 3</v-menu-item>
        </v-menu-items>
      </v-menu>
    </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { useMenu } from '@/index'
import { defineComponent } from 'vue'

export default defineComponent({
  setup (): { state1: any; state2: any } {
    const state1 = useMenu()
    const state2 = useMenu()
    return { state1, state2 }
  }
})
</script>

<style scoped></style>
