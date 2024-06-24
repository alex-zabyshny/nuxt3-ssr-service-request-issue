<script setup lang="ts">
const email = ref("");

const url = process.client
  ? "http://localhost:3001/user" // Request by domain (in browser)
  : "http://localhost:3002/user"; // Request by internal VPC ip (during SSR)

const res = await useFetch<{ email: string }>(url);

if (res.data) {
  email.value = unref(res.data)?.email || "";
}
</script>

<template>
  <div>
    <div v-if="email">
      <p>{{ email }}</p>
    </div>
  </div>
</template>
