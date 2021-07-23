<template>
  <div class="py-3 bg-gray-100 flex items-center justify-center">
    <router-link to="/" class="px-2" v-slot="{ isActive }">
      <span :class="{ 'text-purple-500': isActive }">Buttons</span>
    </router-link>
    <router-link to="/inputs" class="px-2" v-slot="{ isActive }">
      <span :class="{ 'text-purple-500': isActive }">Inputs</span>
    </router-link>
    <router-link to="/menus" class="px-2" v-slot="{ isActive }">
      <span :class="{ 'text-purple-500': isActive }">Menus</span>
    </router-link>
    <router-link to="/checkbox" class="px-2" v-slot="{ isActive }">
      <span :class="{ 'text-purple-500': isActive }">Checkbox & Radios</span>
    </router-link>
    <router-link to="/dialogs" class="px-2" v-slot="{ isActive }">
      <span :class="{ 'text-purple-500': isActive }">Dialogs</span>
    </router-link>
    <router-link to="/selects" class="px-2" v-slot="{ isActive }">
      <span :class="{ 'text-purple-500': isActive }">Selects</span>
    </router-link>
    <router-link to="/tab" class="px-2" v-slot="{ isActive }">
      <span :class="{ 'text-purple-500': isActive }">Tab</span>
    </router-link>
  </div>
  <router-view />
</template>

<style lang="scss"></style>
