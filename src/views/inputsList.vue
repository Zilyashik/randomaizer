<template>
  <div class="form_container">
    <inputForms
        v-for="item in components"
        :key="item.index"
        :item="item"
        @addInput="addInput"
        @removeInput="removeInput"
    />
    <button class="button_add" @click="add">+</button>
    <button class="button_send" @click="send">Сохранить</button>
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
.form_container{
  display: flex;
  flex-direction: column;
}
.button_add,
.button_send{
  text-decoration: none;
  background-color: #CA3432;
  border: none;
  border-radius: 15px;
  margin-top: 10px;
  width: 100%;
  height: 40px;
  color: white;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.button_add{
  background-color: rgba(58, 196, 125, 1);
}
.button_send:hover{
  background-color: darkred;
}
.button_add:hover{
  background-color: seagreen;
}
.button_add:active,
.button_send:active{
  background-color: salmon;
}
</style>