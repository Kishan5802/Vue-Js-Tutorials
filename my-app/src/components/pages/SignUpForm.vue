<template>
<div class="container main-container">
  <div class="content-container">
    <Card class="card-container">
      <template #content>
        <div class="header-container">
          <h3>Registration Form</h3>
        </div>
        <form class="form-container">
          <div class="form-content-container">
            <div class="card flex em">
              <label class="labels username-label">Username</label><br />
              <span class="p-input-icon-left text-center">
                <i class="pi pi-user" />
                <InputText id="username" aria-describedby="username-help" placeholder="Type your Username" v-model="form.userName" />
              </span>
            </div><br />
            <div class="card flex em">
              <label class="labels email-label">Email</label><br />
              <span class="p-input-icon-left text-center">
                <i class="pi pi-envelope" />
                <InputText id="email" aria-describedby="email-help" placeholder="Type your email" v-model="form.email" />
              </span>
            </div><br />
            <div class="card flex mn">
              <label class="labels mobiles-label">Mobile Number</label>
              <span class="p-input-icon-left text-center">
                <i class="pi pi-phone" />
                <InputText id="phones" aria-describedby="phone-help" placeholder="Type your Phone Number" v-model="form.mobileNo" />
              </span>
            </div><br />
            <div class="card flex ps">
              <label class="labels password-label">Password</label><br />
              <span class="p-input-icon">
                <span class="p-input-icon-left">
                  <i class="pi pi-lock" />
                  <InputText :type="inputType" placeholder="Enter password" style="padding-right: 35px;" v-model="form.password" />
                </span>
              </span>
              <span class="p-input-icon-right" style="display: inline-block;margin-bottom: 5px;">
                <i class="pi" :class="[inputType==='text' ? 'pi-eye' : 'pi-eye-slash']" @click="togglePassword" />
              </span>
            </div>
            <div class="card flex justify-content-center-sm">
              <Button label="Sign Up" id="btnsignup" @click="registerData" />
            </div> <br /><br />
            <div class="card flex justify-content-center-sm">
              <Button label="Already have an account?" link id="btnhaveacc" @click="onHavingAccount" />
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
import axios from 'axios'
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
      showPassword: false,
      form: {
        userName: '',
        mobileNo: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    togglePassword() {
      if (this.inputType === 'password') {
        this.inputType = 'text';
      } else {
        this.inputType = 'password';
      }
    },
    async onHavingAccount(event) {
      event.preventDefault();
      this.$router.push({
        name: 'Login'
      });
    },
    async registerData() {
      console.log(this.form);
      try {
        let result = await axios.post('http://localhost:5005/addUser', {form:this.form});
        console.log(result);
        if (result.data.status === 200) {
          console.log(result.data);
          alert('Success')
        } else {
          console.log(result.data.err);
          alert('Error');
        }
      } catch (err) {
        console.log(err);
        alert('Error');
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
  /* height: 100vh; */
}

.main-container {
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

#firstname {
  width: 280px;
}

#lastname {
  width: 280px;
}

#username {
  width: 280px;
}

#phones {
  width: 280px;
}

@media screen and (max-width: 300px) {
  div.main-container {
    /* font-size: 80px; */
    display: flex;
    margin: auto;
    width: 100%;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 100vh;
  }
}
</style>
