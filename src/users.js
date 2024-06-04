import { getFromLocalStorage, saveToLocalStorage } from '@/helpers/storage';
import { ref } from 'vue'
import { uid } from 'quasar'


const storedUsers = getFromLocalStorage('users')
const users = ref(storedUsers ? JSON.parse(storedUsers) : [])

const defaultUserData = {
  id: null,
  lastName: '',
  firstName: '',
  email: '',
  site: '',
  avatar: '',
  birthday: '',
  gender: 'Male',
  role: 'User',
  notify: [],
  age: 0,
  active: true
}

const saveUser = (userData) => {
  if (userData.id === null) {
      users.value.push({ ...userData, id: uid() })
    } else {
      const index = users.value.findIndex((user) => user.id === userData.id)
  
      if (index > -1) {
        users.value[index] = userData
      }
    }
  
  saveToLocalStorage('users', JSON.stringify(users.value))
}


const deleteUser = (userData) => {
  users.value = users.value.filter((user) => user.id !== userData.id)
  saveToLocalStorage('users', JSON.stringify(users.value))
}

export { users, defaultUserData, saveUser, deleteUser }