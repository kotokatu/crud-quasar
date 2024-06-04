<template>
  <div class="q-pa-md">
    <q-table 
      :columns="columns"
      :rows="users"
      :filter="filter"
      :filter-method="customFilter"
      :grid="grid"
      row-key="id"
      no-data-label="No data available"
      no-results-label="Nothing found..."
      dense 
    >
      <template #top-right>
        <q-input dense debounce="300" v-model="filter" placeholder="Search">
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-btn
          flat
          dense
          :icon="grid ? 'list' : 'grid_on'"
          @click="grid = !grid"
        >
          <q-tooltip>{{grid ? "List" : "Grid"}}</q-tooltip>
        </q-btn>
      </template>

      <template #body-cell-avatar="props">
        <q-td :props="props">
          <q-avatar 
            color="grey-3"
            size="80px"
          >
            <img v-if="props.value" :src="props.value">
          </q-avatar>
        </q-td>
      </template>

      <template #body-cell-site="props">
        <q-td :props="props">
          <a :href="props.value" target="_blank">{{ props.value }}</a>
        </q-td>
      </template>

      <template #body-cell-gender="props">
        <q-td :props="props">
          <q-icon :name="props.value" size="md" />
        </q-td>
      </template>

      <template #body-cell-actions="props">
        <q-td :props="props">
          <div class="flex justify-center q-gutter-sm">
            <q-btn icon="edit" color="positive" flat round padding="5px" @click="editUser(props.row)">
              <q-tooltip>Edit user</q-tooltip>
            </q-btn>
            <q-btn  icon="delete" color="negative" flat round padding="5px" @click="confirmUserDelete(props.row)">
              <q-tooltip>Delete user</q-tooltip>
            </q-btn>
          </div>
        </q-td>
      </template>

      <template #item="props">
        <list-card :cardProps="props" @user:edit="editUser" @user:delete="confirmUserDelete" />
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar';
import ListCard from './AppUserListCard.vue';
import { ref } from 'vue';
import { columns, customFilter } from '@/grid-data.js'

const $q = useQuasar()

const props = defineProps({
  users: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['user:edit', 'user:delete'])

const grid = ref(false)
const filter = ref('')

const editUser = (user) => {
  emit('user:edit', user)
}

const confirmUserDelete = (user) => {
  $q.dialog({
    title: 'Confirm',
    message: 'Pressing "OK" will delete the user from the database. Continue?',
    cancel: true,
  }).onOk(() => {
    emit('user:delete', user)
  })
}

</script>



