<template>
  <div>
    <div class="inputFields">
      <div>
        <p>Имя</p>
        <input
            type="text"
            v-model="name"
        >
      </div>
      <div>
        <p>Номер телефона</p>
        <input
          type="text"
          v-model="number"
        >
      </div>
    </div>
    <br>
    <hr>
    <ul>
      <li v-for="(fieldLocal, index) in fieldLocals" v-bind:key="index">
        <input type="text"
               v-model="fieldLocal.name"
               @focus="editField(fieldLocal)"
               @keyup.esc="fieldCancel(fieldLocal)"
        >
        <input type="text"
               v-model="fieldLocal.text"
               @focus="editField(fieldLocal)"
               @keyup.esc="fieldCancel(fieldLocal)"
        >
        <div>
          <button v-on:click="fieldCancel(fieldLocal)" style="margin-right: 5px">Отменить</button>
          <button v-on:click="delField(index)" style="background: #FF5733;">Удалить</button>
        </div>
      </li>
    </ul>
    <br>
    <hr>
    <h5>Добавление полей</h5>
    <br>
    <div class="inputFields">
      <input v-model="fieldName" placeholder="Введите название">
      <input v-model="fieldText" placeholder="Введите значение">
      <button v-on:click="addField" style="background: #41AA3C;">Добавить поле</button>
    </div>
    <br>
    <div class="bottom-buttons">
      <hr>
      <button v-on:click="saveContact" style="margin-right: 5px">Сохранить и выйти</button>
      <button v-on:click="cancel" style="margin-left: 5px; background: #FF5733;">Отменить и выйти</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Change',
  data: function () {
    return { // Записываем данные контакта с Store
      name: this.$store.state.contacts[this.$route.params.id].name,
      number: this.$store.state.contacts[this.$route.params.id].number,
      id: this.$route.params.id,
      fieldLocals: [...this.$store.state.contacts[this.$route.params.id].fields],
      fieldName: '',
      fieldText: '',
      editFields: '',
      beforeEditingCache: ''
    }
  },
  methods:{
    addField() { // Добавляем поля
      if(this.fieldName === '' || this.fieldText === '')
        return 0
      this.fieldLocals.push({name: this.fieldName, text: this.fieldText})
      this.fieldName = this.fieldText = ''
    },
    delField(i) { // Удаляем поле
      this.fieldLocals.splice(i,1)
    },
    editField(fieldEditing){ // Редактируем поля
      this.beforeEditingCache = Object.assign({}, fieldEditing);
      this.editFields = fieldEditing
    },
    fieldCancel(fieldEditing){ // Отменяем редактирование поля
      if(confirm('Отменить изменения поля?')) {
        Object.assign(fieldEditing, this.beforeEditingCache);
        this.editFields = this.editText = this.beforeEditingCache = null;
      }
      else
        return 0
    },
    backToHome() {
      this.$router.push('/')
    },
    cancel(){
      if(confirm('Отменить изменения?'))
        this.backToHome()
      else
        return 0
    },
    saveContact() { // Сохраняем измененные поля, имя и номер
      this.$store.commit('editContact', {
        i: this.$route.params.id,
        name: this.name,
        number: this.number,
        fields: this.fieldLocals
      })
      this.backToHome()
    }
  }
}
</script>
<style>
hr{
  margin-bottom: 20px;
}
.bottom-buttons{
  margin-top: 40px;
}
ul{
  padding: 0;
}
</style>