<template>
  <h1>This comes from the main app</h1>
  <button @click="logout">Logout</button>
</template>

<script setup>
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthenticationStore } from "@plugin/stores/AuthenticationStore";

const { isAuthenticated } = storeToRefs(useAuthenticationStore());

const router = useRouter();

console.log(router);

const logout = () => {
  isAuthenticated.value = false;
  router.push("/plugin");
};
</script>
