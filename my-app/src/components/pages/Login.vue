<template>
<div class="container">
  <div class="header-container">
    <h3>Login Form</h3>
  </div>
  <div class="content-container">
    <Card class="card-container">
      <template #content>

        <form class="form-container">
          <div class="card flex em">
            <label class="text-left">Email</label><br />
            <span class="p-input-icon-left">
              <i class="pi pi-user" />
              <!-- <InputText v-model="value1" placeholder="Search" /> -->
              <InputText id="email" aria-describedby="email-help" />
            </span>
          </div><br />
          <div class="card flex ps">
            <label>Password</label><br />
            <InputText id="pwd" toggleMask aria-describedby="pwd-help" />
            <!-- <Password id="password" /> -->
          </div>
          <!-- <div class="flex flex-column gap-2 row">
              <label>Email</label>&nbsp;
              <InputText id="email" aria-describedby="email-help" />
            </div><br />
            <div class="card flex justify-content-center">
              <label>Password</label>&nbsp;
              <InputText id="pwd" toggleMask aria-describedby="pwd-help" />
              <Password id="password" />
            </div><br /> --><br />
          <div class="card flex justify-content-center">
            <Button label="Submit" />
          </div> <br />
          <div class="card flex justify-content-center">
            <Button label="Don't have an Account" link @click="onNotHavingAccount" />
          </div>
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
    }
  }
}
</script>

<style>
.card-container {
  display: flex;
  justify-content: center;
  margin: auto;
  width: max-content;
}

.em {
  text-align: left;
}

.ps {
  text-align: left;
}

.pi-search {
  color:white;
}
</style>
