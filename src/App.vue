<template>
  <div class="random_container">
    <div class="random_number">
      Напишите кол-во полей
      <input type="number" v-model="forms.count" @change="create" class="number"/>
      <button @click="add" class="button">Add</button>
      <button @click="del" class="button">Delete</button>
    </div>

    <div class="form_container">
      <inputForms
          v-for="index in forms.count"
          :key="index"
          :index="index"
          @addInput="addInput"
      />
    </div>
  </div>

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
    },
    del() {
      this.forms.count--;
      this.forms.components.pop(this.schema['email']);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
*{
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;
}
  .random_container{
    border: 3px solid green;
    width: 700px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }
  .random_number {
    border: 3px solid salmon;
    width: 150px;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 50px 90px 0 0 ;
    text-align: center;
    line-height: 15px;
    font-size: 15px;
  }
  .number{
    border: 1px solid black;
    height: 30px;
    border-radius: 10px;
    margin-top: 10px;
    padding-left: 10px;
  }
  .button{
    text-decoration: none;
    background-color: #CA3432;
    border: none;
    border-radius: 10px;
    margin-top: 10px;
    height: 30px;
    color: white;
    letter-spacing: 1px;
    cursor: pointer;
  }
  .button:hover{
    background-color: darkred;
  }
  .button:active{
    background-color: salmon;

  }
</style>
