<template>
  <h1>This comes from the plugin</h1>
  <button @click="login">Login</button>
  <button @click="navigateTo">Main page</button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthenticationStore } from "@plugin/stores/AuthenticationStore";

const { isAuthenticated } = storeToRefs(useAuthenticationStore());

const router = useRouter();

console.log(router);

const login = () => (isAuthenticated.value = true);

const navigateTo = () => {
  router.push("/");
};
</script>
