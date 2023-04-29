<template>
<div class="container">
  <!-- <div class="header-container">
    <h3>Login Form</h3>
  </div> -->
  <div class="content-container">
    <Card class="card-container">
      <template #content>
        <div class="header-container">
          <h3>Login Form</h3>
        </div>

        <form class="form-container">
          <div>
            <div class="card flex em">
              <label class="text-left">Email</label><br />
              <span class="p-input-icon-left">
                <i class="pi pi-user" />
                <!-- <InputText v-model="value1" placeholder="Search" /> -->
                <InputText id="email" aria-describedby="email-help" placeholder="Type your email" />
              </span>
            </div><br />
            <div class="card flex ps">
              <label>Password</label><br />
              <span class="p-input-icon-left">
                <i class="pi pi-lock" />
                <InputText id="pwd" toggleMask aria-describedby="pwd-help" placeholder="Type your password" />
              </span>
              <!-- <Password id="password" /> -->
            </div>
            <div class="card flex justify-content-center-sm forpass">
              <Button label="Forgot Password" link @click="onForgotPassword" />
            </div> <br />
            <div class="card flex justify-content-center-sm">
              <Button label="Login" />
            </div> <br />
            <div class="">
              Or Sign Up Using
              <div>
                <span class="p-input-icon">
                  <Button label="Forgot Password" link>
                    <i class="pi pi-google" style="font-size: 1.5rem" />
                  </Button>
                </span>
                <span class="p-input-icon">
                  <Button label="Forgot Password" link>
                    <i class="pi pi-facebook" style="font-size: 1.5rem" />
                  </Button>
                </span>
                <span class="p-input-icon">
                  <Button label="Forgot Password" link>
                    <i class="pi pi-twitter" style="font-size: 1.5rem" />
                  </Button>
                </span>
              </div>
            </div><br />
            <div class="card flex justify-content-center-sm">
              <Button label="Don't have an Account" link @click="onNotHavingAccount" />
            </div>
          </div>
          <!-- <div class="flex flex-column gap-2 row">
              <label>Email</label>&nbsp;
              <InputText id="email" aria-describedby="email-help" />
            </div><br />
            <div class="card flex justify-content-center">
              <label>Password</label>&nbsp;
              <InputText id="pwd" toggleMask aria-describedby="pwd-help" />
              <Password id="password" />
            </div><br /> <br /> -->
          <!-- <div class="p-chips-token-label">
            <label></label>
            <Chips v-model="form"/>
          </div> -->
        </form>
      </template>
    </Card>
  </div>
</div>
</template>

<script>
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
  methods: {
    async onNotHavingAccount(event) {
      event.preventDefault();
      this.$router.push({
        name: 'SignUpForm'
      });
    },
    async onForgotPassword(event) {
      event.preventDefault();
    }
  }
}
</script>

<style>
.card-container {
  display: flex;
  justify-content: center;
  margin: auto;
  width: 50%;
}

.em {
  text-align: left;
}

.ps {
  text-align: left;
}

.pi-search {
  color: white;
}

.forpass {
  text-align: right;
}
</style>
