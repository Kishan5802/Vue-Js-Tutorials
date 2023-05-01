<template>
<div class="container">
  <div class="content-container">
    <Card class="card-container">
      <template #content>
        <form class="form-container">
          <div class="form-content-container">
            <div class="card flex em">
              <label class="labels firstname-label">Firstname</label><br />
              <span class="p-input-icon-left text-center">
                <i class="pi pi-user" />
                <!-- <InputText v-model="value1" placeholder="Search" /> -->
                <InputText id="firstname" aria-describedby="firstname-help" placeholder="Type your Firstname" />
              </span>
            </div><br />
            <div class="card flex em">
              <label class="labels lastname-label">Lastname</label><br />
              <span class="p-input-icon-left text-center">
                <i class="pi pi-user" />
                <!-- <InputText v-model="value1" placeholder="Search" /> -->
                <InputText id="lastname" aria-describedby="lastname-help" placeholder="Type your Lastname" />
              </span>
            </div><br />
            <div class="card flex em">
              <label class="labels username-label">Username</label><br />
              <span class="p-input-icon-left text-center">
                <i class="pi pi-user" />
                <!-- <InputText v-model="value1" placeholder="Search" /> -->
                <InputText id="username" aria-describedby="username-help" placeholder="Type your Username" />
              </span>
            </div><br />
            <div class="card flex em">
              <label class="labels email-label">Email</label><br />
              <span class="p-input-icon-left text-center">
                <i class="pi pi-envelope" />
                <!-- <InputText v-model="value1" placeholder="Search" /> -->
                <InputText id="email" aria-describedby="email-help" placeholder="Type your email" />
              </span>
            </div><br />
            <div class="card flex ps">
              <label class="labels password-label">Password</label><br />
              <span class="p-input-icon">
                <span class="p-input-icon-left">
                  <i class="pi pi-lock" />
                  <InputText :type="inputType" placeholder="Enter password" style="padding-right: 35px;" />
                </span>
              </span>
              <span class="p-input-icon-right" style="display: inline-block;margin-bottom: 5px;">
                <i class="pi" :class="[inputType==='text' ? 'pi-eye' : 'pi-eye-slash']" @click="togglePassword" />
              </span>
              <!-- <Password id="password" /> -->
            </div>
            <div class="card flex justify-content-center-sm">
              <Button label="Login" id="btnsignup" />
            </div> <br /><br />
            <div class="card flex justify-content-center-sm">
              <Button label="Already have an account" link id="btnhaveacc" @click="onNotHavingAccount" />
            </div>
          </div>
        </form>
      </template>
    </Card>
  </div>
</div>
</template>

<script>
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
// import Password from 'primevue/password';
import Button from 'primevue/button';
// import axios from 'axios'
// import { ref } from "vue";
export default {
  name: 'SignUpForm',
  components: {
    Button,
    InputText,
    // Password,
    Card,
  },
  data() {
    return {
      // password: '',
      inputType: 'password',
      showPassword: false
    }
  },
  methods: {
    togglePassword() {
      if (this.inputType === 'password') {
        this.inputType = 'text';
      } else {
        this.inputType = 'password';
      }
    }
  }
}
</script>

<style>
.card-container {
  display: flex;
  margin: auto;
}

.content-container {
  display: flex;
  text-align: center;
  justify-content: center;
  height: 100vh;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.form-container {
  width: 400px;
}

.form-content-container {
  justify-content: center;
}

.labels {
  width: 280px;
  display: inline-block;
  text-align: left;
}

#btnsignup {
  margin-top: 15px;
  width: 280px;
}
</style>
