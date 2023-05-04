<template>
<div class="container main-container">
  <!-- <div class="header-container">
    <h3>Login Form</h3>
  </div> -->
  <div class="content-container">
    <Card class="card-container">
      <template #content>
        <div class="header-container">
          <h3>Login Form</h3>
        </div>

        <form class="form-container" style="width: 400px;">
          <div class="form-content-container">
            <div class="card flex em">
              <label style="display: inline-block;text-align: left;width: 280px;">Email</label><br />
              <span class="p-input-icon-left text-center">
                <i class="pi pi-envelope" />
                <!-- <InputText v-model="value1" placeholder="Search" /> -->
                <InputText id="email" aria-describedby="email-help" placeholder="Type your email" v-model="email" />
              </span>
            </div><br />
            <div class="card flex ps">
              <label style="display: inline-block;text-align: left;width: 280px;">Password</label><br />
              <span class="p-input-icon-left">
                <i class="pi pi-lock" />
                <InputText id="pwd" :type="inputType" aria-describedby="pwd-help" placeholder="Type your password" v-model="password" />
              </span>
              <!-- <Password id="password" /> -->
            </div>
            <div class="card flex justify-content-center-sm forpass" style="display: inline-block;text-align: right;width: 280px;">
              <Button label="Forgot Password?" link @click="onForgotPassword" />
            </div> <br />
            <div class="card flex justify-content-center-sm">
              <Button label="Login" id="btnlogin" @click="onLogin" />
            </div> <br /><br />
            <div>
              Or Sign Up Using
              <div>
                <span class="p-input-icon">
                  <Button link id="btngoogle">
                    <i class="pi pi-google" style="font-size: 1.5rem" />
                  </Button>
                </span>
                <span class="p-input-icon">
                  <Button link id="btnfacebook">
                    <i class="pi pi-facebook" style="font-size: 1.5rem" />
                  </Button>
                </span>
                <span class="p-input-icon">
                  <Button link id="btntwitter">
                    <i class="pi pi-twitter" style="font-size: 1.5rem" />
                  </Button>
                </span>
              </div>
            </div><br />
            <div class="card flex justify-content-center-sm">
              <Button label="Don't have an Account?" link id="btndontacc" @click="onNotHavingAccount" />
            </div>
          </div>
        </form>
      </template>
    </Card>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';
// import Password from 'primevue/password';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  components: {
    InputText,
    Button,
    Card,
    // Password,
  },
  data() {
    return {
      email: '',
      password: '',
      inputType: 'password'
    }
  },
  methods: {
    togglePassword() {
      if (this.inputType === 'text') {
        this.inputType = 'password';
      }
    },
    async onNotHavingAccount(event) {
      event.preventDefault();
      this.$router.push({
        name: 'SignUpForm'
      });
    },
    async onForgotPassword(event) {
      event.preventDefault();
    },
    async onLogin() {
      try {
        // console.log(this.password);
        let result = await axios.post('http://localhost:5005/userAuthenticate', {
          email: this.email,
          password: this.password
        });
        console.log(result);
        if (result.data.status === 200) {
          console.log(result.data);
          this.$router.push({
            name: 'Home'
          });
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
  width: 100%;
}

.content-container {
  /* height: 100vh; */
  display: inline-block;
}

.form-content-container {
  justify-content: center;
}

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

#email {
  width: 280px;
}

#btnlogin {
  margin-top: 15px;
  width: 280px;
}

#pwd {
  width: 280px;
}

.sus div {
  margin-top: 15px;
}
</style>
