<template>
  <form @submit.prevent="add">
    <input type="number" v-model="count" class="number"/>
    <button type="submit" class="button">Add</button>
  </form>
</template>

<script>

export default {
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    add() {
      this.$router.push({name: 'list', params: {number: this.count}});
    }
  }
}
</script>

<style scoped>

</style>