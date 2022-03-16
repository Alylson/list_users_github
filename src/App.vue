<template>
  <div class="app">
    <TableUsers />
  </div>
</template>

<script>
import TableUsers from '@/components/github/TableUsers.vue';

export default {
  name: 'App',
  components: {
    TableUsers
  }
}
</script>