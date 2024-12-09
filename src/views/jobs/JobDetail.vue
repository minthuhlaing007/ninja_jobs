<template>
  <h1>Job Detail Page</h1>
  <p>Job id is : {{ id }}</p>
</template>

<script>
export default {
  // data() {
  //   return{
  //     id:this.$route.params.id
  //   }
  // }
  props: ["id"],
};
</script>

<style></style>
