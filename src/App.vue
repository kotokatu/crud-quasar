<template>
  <div class="container">

    <q-btn icon="add" size="sm" color="green-4" class="absolute-top-right q-mt-sm q-mr-sm" @click="startUserCreate">
      <q-tooltip>Create new user</q-tooltip>
    </q-btn>

    <user-list :users="users" @user:delete="deleteUser" @user:edit="startUserEdit" />
    
    <q-dialog v-model="isFormOpen">
      <user-form :userData="editedUser" @handle-submit="handleUserDataSubmit" />
    </q-dialog>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import UserForm from '@/components/AppUserForm.vue'
import UserList from '@/components/AppUserList/AppUserList.vue'
import { defaultUserData, users, saveUser, deleteUser } from '@/users.js'

const isFormOpen = ref(false)
const editedUser = ref(null)

const openForm = () => {
  isFormOpen.value = true
}

const closeForm = () => {
  editedUser.value = null
  isFormOpen.value = false
}

const startUserCreate = () => {
  editedUser.value = defaultUserData
  openForm()
}

const startUserEdit = (user) => {
  editedUser.value = user
  openForm()
}

const handleUserDataSubmit = (userData) => {
  saveUser(userData)
  closeForm()
}

</script>