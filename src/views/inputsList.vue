<template>
  <div class="form_container">
    <inputForms
        v-for="item in components"
        :key="item.index"
        :item="item"
        @addInput="addInput"
        @removeInput="removeInput"
    />

    <button class="add" @click="add">add</button>
    <button class="send" @click="send">отправить на бэк</button>
  </div>
</template>

<script>
import {components} from "@/inputs/components";
import inputForms from "@/components/inputForms";

export default {
  name: "inputsList",
  components: {
    inputForms
  },
  data() {
    return {
      components: [],
      number: this.$route.params.number,
      schema: components
    }
  },
  created() {
    for (let i = 1; i <= this.$route.params.number; i++) {
      this.components.push({
        index: i,
        type: this.schema['email']
      });
    }
  },
  methods: {
    addInput(index, type, content) {
      let schema = this.schema;
      this.components = this.components.map(
          function (t) {
            if (t.index === index) {
              t.type = schema[type];
              t.content = content;
            }
            return t;
          });
    },
    removeInput(index) {
      this.components = this.components.filter(t => t.index !== index);
    },
    add() {
      this.number++;
      this.components.push({
        index: this.number,
        type: this.schema['email']
      });
    },
    send() {
      console.log(this.components)
    }
  }
}
</script>

<style scoped>

</style>