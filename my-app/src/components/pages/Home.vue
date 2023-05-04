<template>
  <div class="container">
    <div class="header-container">
      <nav>
        <Menubar :model="items" class="p-menubar">
          <router-view/>
        </Menubar>
      </nav>
    </div>
    <div class="content-container">
      <h4>Home Page</h4>
    </div>
  </div>
</template>

<script>
import Menubar from 'primevue/menubar';
import { ref } from 'vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    Menubar,
  },
  data () {
    return {
      items: ref([
        {
          label: 'Home',
          icon: 'pi pi-home',
          to: '/'
        },
        {
          label: 'About',
          icon: 'pi pi-info-circle',
          to: '/'
        },
        {
          label: 'Contact',
          icon: 'pi pi-envelope',
          to: '/'
        },
        {
          label: 'Login',
          icon: 'pi pi-user',
          to: '/login-user',
          end: true
        },
        {
          label: 'Signup',
          icon: 'pi pi-user-plus',
          to: '/register-user',
          end: true
        }
      ])
    }
  }
}
</script>

<style>
.p-menubar {
  justify-content: flex-end;
}

.content-container {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>