<template>
  <div class="container">
    <h2>Users</h2>
    <p>Users registered with website.</p>
    <div class="row justify-content-center gap-3" v-if="users">
      <div v-for="user in users" class="card" data-bs-theme="dark" style="width: 18rem" :key="user.userID">
        <img :src="user.profileUrl" class="card-img-top" alt="profilepic" />
        <div class="card-body">
          <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
          <p class="card-text">
            <span>Email address: {{ user.emailAdd }}</span>
          </p>

        </div>
      </div>
    </div>
    <div v-else class="row">
        <Spinner/>
    </div>
    
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
export default {
    components: {
        Spinner
    },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style scoped></style>
