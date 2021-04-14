<template>
  <div class="grid sm:grid-cols-2 mx-4">
    <label class="flex justify-center md:justify-start md:ml-4">{{ text }}</label>
    <div class="flex justify-center">
      <input class="border rounded-lg px-2 py-1 w-48 sm:w-56" type="text" disabled>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputDisable',
  props: {
    text: String
  },

  methods: {
    setText() {
      
    }
  },
}
</script>

<style>

</style>