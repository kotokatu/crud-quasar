<template>
  <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
    <q-card class="column" :style="{ 'height': '100%' }">
      <q-card-section :style="{ 'max-width': '100%' }" :class="cardProps.colsMap.name.classes">
        {{ cardProps.colsMap.name.field(cardProps.row)}}
      </q-card-section>
      <q-separator />
      <q-card-section class="column q-gutter-sm" :style="{ 'width': '100%' }">
        <div>
          <q-avatar
            color="grey-3"
            size="80px"
            v-if="cardProps.row.avatar"
            >
            <img 
              :src="cardProps.row.avatar" 
            />
          </q-avatar>
        </div>
        <div :class="cardProps.colsMap.email.classes">{{ cardProps.colsMap.email.label }}: {{ cardProps.row.email }}</div>
        <div>{{ cardProps.colsMap.birthday.label }}: {{ cardProps.colsMap.birthday.format(cardProps.row.birthday) }}</div>
        <div :class="cardProps.colsMap.site.classes" :style="{ 'width': '100%' }">
          {{ cardProps.colsMap.site.label }}: <a :href="cardProps.row.site" target="_blank">{{ cardProps.row.site }}</a>
        </div>
        <div>{{ cardProps.colsMap.gender.label }}: <q-icon :name="cardProps.colsMap.gender.format(cardProps.row.gender)" size="md" /></div>
        <div>{{ cardProps.colsMap.role.label }}: {{ cardProps.row.role }}</div>
        <div>{{ cardProps.colsMap.notify.label }}: {{ cardProps.colsMap.notify.format(cardProps.row.notify) }}</div>
        <div>{{ cardProps.colsMap.age.label }}: {{ cardProps.colsMap.age.format(cardProps.row.age) }}</div>
        <div>{{ cardProps.colsMap.active.label }}: {{ cardProps.colsMap.active.format(cardProps.row.active) }}</div>
      </q-card-section>
      <q-card-actions align="center" class="q-mt-auto" >
        <q-btn label="Edit" icon="edit" color="positive" push size="10px" @click="$emit('user:edit', cardProps.row)">
          <q-tooltip>Edit user</q-tooltip>
        </q-btn>
        <q-btn label="Delete" icon="delete" color="negative" push size="10px" @click="$emit('user:delete', cardProps.row)">
          <q-tooltip>Delete user</q-tooltip>
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
const props = defineProps({
    cardProps: {
        type: Object,
        required: true
    }
})

const emit = defineEmits(['user:edit', 'user:delete'])

</script>