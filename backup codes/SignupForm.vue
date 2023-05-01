<template>
<div class="container">
  <div class="header-container">
    <h3>Registration Form</h3>
  </div>
  <div class="content-container">
    <form class="form-container">
      <div class="flex flex-column gap-2">
        <label for="firstname">Firstname</label>&nbsp;
        <InputText id="firstname" v-model="form.firstname" aria-describedby="firstname-help" />
      </div><br />
      <div class="flex flex-column gap-2">
        <label for="lastname">Lastname</label>&nbsp;
        <InputText id="lastname" v-model="form.lastname" aria-describedby="lastname-help" />
      </div><br />
      <div class="flex flex-column gap-2">
        <label for="email">Email</label>&nbsp;
        <InputText id="email" v-model="form.email" aria-describedby="email-help" />
      </div><br />
      <div class="card flex justify-content-center">
        <label for="password">Password</label>&nbsp;
        <Password toggleMask id="password" v-model="form.pwd" />
      </div><br />
      <!-- <div class="flex flex-column gap-2">
          <label for="password">Password</label>&nbsp;
          <InputText id="password" v-model="form.pwd" aria-describedby="password-help" />
        </div><br /> -->
      <div class="card flex justify-content-center">
        <Button label="Submit" @click="onSubmit" />
      </div> <br /><br />
      <div class="card flex justify-content-center">
        <Button label="Already have an Account" link @click="onAlreadySignup" />
      </div>
      <!-- <div class="p-chips-token-label">
        <label></label>
        <Chips v-model="form"/>
      </div> -->
    </form>
  </div>
</div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import axios from 'axios'
// import { ref } from "vue";
export default {
  name: 'SignUpForm',
  components: {
    Button,
    InputText,
    Password,
  },
  data() {
    return {
      // form: ref(),
      form: {
        firstname: '',
        lastname: '',
        email: '',
        pwd: ''
      },
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      console.log(this.form);
      let result = await axios.post('http://localhost:3000/users', this.form);
      if (result.status === 201) {
        alert('Submitted successfully');
        this.form.firstname = ''
        this.form.lastname = ''
        this.form.email = ''
        this.form.pwd = ''
        this.$router.push({
          name: 'Login'
        });

      } else {
        console.log('Error');
      }
    },
    async onAlreadySignup(event) {
      event.preventDefault();
      this.$router.push({
        name: 'Login'
      });
    }
  }
}
</script>

<style>
.container {
  text-align: center;
}
</style>
