<template>
  <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-300">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-800 sm:text-center">© 2024. All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-800 sm:mt-0">
        <li>
          <router-link :to="{name: 'about'}" class="hover:underline me-4 md:me-6">About</router-link>
        </li>
        <li>
          <router-link :to="{name: 'home'}" class="hover:underline me-4 md:me-6">HomePage</router-link>
        </li>
        <li>
          <router-link :to="{name: 'signin'}" class="hover:underline me-4 md:me-6">SignIn</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>
