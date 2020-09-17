<template>
  <div>
    <div class="inputFields">
      <div>
        <input
          type="text"
          v-model="name"
          placeholder="Введите имя контакта"
          v-on:keyup.enter="addContact()"
        >
      </div>
      <div>
        <input
          type="number"
          v-model="number"
          placeholder="Введите номер телефона контакта"
          v-on:keyup.enter="addContact()"
        >
      </div>
      <button
        type="submit"
        v-on:click="addContact()"
      >
        <img src="../assets/add.svg" alt="Add contact"
           height="20px"
           width="20px">
    </button>
    </div>
    <ul>
      <li v-for="(storeContact, index) in storeContacts"
          v-bind:key="index"
      >
        <div>{{ storeContact.name }}</div>
        <div class="number">{{ storeContact.number }}</div>
        <div class="buttons">
          <button v-on:click="delContact(index)">Удалить</button>
          <router-link :to="{name: 'Change', params: {id: index}}" tag="button">Информация</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Contacts',
  data(){
    return{
      name: '',
      number: ''
    }
  },
  methods: {
    addContact(){ // Добавление контакта
      if(this.name === '' || this.number === '')
        return 0
      this.$store.commit('addContact', {name: this.name, number: this.number, fields: []}) // пушим в Store
      this.name = this.number = ''
    },
    delContact(id){ // Удаление контакта
      if(confirm('Удалить контакт?'))
        this.$store.commit('delContact', id)
      else
        return 0
    }
  },
  computed: {
    storeContacts() { // берем массив контактов с Store
        return this.$store.state.contacts
    }
  }
}
</script>
<style>
li, .inputFields{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
li{
  margin: 10px 0 10px 0;
}
li>:nth-child(1), li>:nth-child(2){
  align-self: center;
}
input {
  font-size: 16px;
  padding: 10px;
  display: block;
  width: 300px;
  border: 1px solid #ccc;
}
input:focus {
  outline: none;
}
button{
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;
  color: #FFF;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
}
button:active {
  -ms-transform: translateY(4px);
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
</style>