<template>
  <div>
    Сколько создать?
    <input type="number" v-model="forms.count" @change="create"/>
  </div>

  <inputForms
      v-for="index in forms.count"
      :key="index"
      :index="index"
      @addInput="addInput"
  />

  <button @click="add">+</button>
</template>

<script>
import inputForms from '@/components/inputForms';
import {components} from "@/inputs/components";

export default {
  name: 'App',
  components: {
    inputForms
  },
  data() {
    return {
      forms: {
        count: 0,
        components: []
      },
      schema: {
        ...components
      }
    }
  },
  methods: {
    addInput(index, type) {
      this.forms.components[index] = this.schema[type];
      console.log(this.forms.components)
    },
    create() {
      for (let i = 1; i <= this.forms.count; i++) {
        this.forms.components[i] = this.schema['email'];
      }
    },
    add() {
      this.forms.count++;
      this.forms.components.push(this.schema['email']);
    }
  }
}
</script>

<style>

</style>
