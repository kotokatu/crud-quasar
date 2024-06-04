<template>  
    <div class="q-pa-lg form-container">
      <h5 class="text-center q-ma-xs">{{ title }}</h5>
      <q-form @submit="handleSubmit">
        <q-input
          label="Enter your name *"
          hint="First name"
          v-model="formData.firstName"
          :error="!!errors?.firstName"
          v-bind="attributes.input"
        >
          <template #error>
            {{ errors.firstName[0] }}
          </template>
        </q-input>

        <q-input
          label="Enter your last name *"
          hint="Last name"
          v-model="formData.lastName"
          :error="!!errors?.lastName"
          v-bind="attributes.input"
        >
          <template #error>
            {{ errors.lastName[0] }}
          </template>
        </q-input>

        <q-input
          v-model="formData.email"
          label="Enter your email"
          hint="Email"
          :error="!!errors?.email"
          v-bind="attributes.input"
        >         
          <template #error>
            {{ errors.email[0] }}
          </template>
        </q-input>

        <q-input
          v-model="formData.site"
          label="Enter your site URL"
          hint="Site"
          :error="!!errors?.site"
          v-bind="attributes.input"
        >
          <template #error>
            {{ errors.site[0] }}
          </template>
        </q-input>

        <q-input
          v-model="formData.avatar"
          label="Enter your avatar URL"
          hint="Avatar"
          v-bind="attributes.input"
        />

        <q-field 
          label="Birthday"  
          :error="!!errors?.birthday"
          v-bind="attributes.field"
          bottom-slots
        >
          <VueDatePicker class="q-pt-sm" text-input format="dd.MM.yyyy" v-model="formData.birthday" />
          <template #error>
            {{ errors.birthday[0] }}
          </template>
        </q-field>

        <q-field 
          label="Gender" 
          v-bind="attributes.field"
        >
          <q-radio v-for="item in GENDERS" v-model="formData.gender" :val="item" :label="item" />
        </q-field>

        <q-select 
          label="Role" 
          v-model="formData.role" 
          :options="ROLES" 
          v-bind="attributes.field"
        />

        <q-field 
          label="Notify" 
          v-bind="attributes.field"
        >
          <div class="q-gutter-sm flex align-center" :style="[{color: '#000'}]">
            <q-checkbox v-for="item in NOTIFICATIONS" dense v-model="formData.notify" :val="item" :label="item" />
          </div>
        </q-field>

        <q-field 
          v-bind="attributes.field"
          label="Age" 
        >
          <q-slider track-size="8px" dense v-model="formData.age" :min="0" :max="120" label/>
        </q-field>

        <q-field 
          label="Status" 
          v-bind="attributes.field"
        >
          <q-toggle class="q-mt-xs" :style="[{color: '#000'}]"
            v-model="formData.active"
            label="Active"
            />
        </q-field>

        <div class="q-pt-xs flex justify-center">
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Cancel"color="primary" outline class="q-ml-sm" v-close-popup />
        </div>
      </q-form>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import '@vuepic/vue-datepicker/dist/main.css'
import VueDatePicker from '@vuepic/vue-datepicker';
import { GENDERS, NOTIFICATIONS, ROLES } from '@/constants';
import { validateForm } from '@/validation';

const emit = defineEmits(['handleSubmit'])
const props = defineProps({
  userData: {
    type: Object,
    required: true
  }
})

const attributes = {
  input: {
    'class': 'q-mt-sm',
    'filled': true,
    'stack-label': true,
    'hide-hint': true,
    'bottom-slots': true
  },
  field: {
    'class': 'q-mt-xs q-pa-xs', 
    'borderless': true, 
    'stack-label': true, 
  }
}

const formData = ref({ ...props.userData })
const errors = ref(null)

const title = computed(() => {
  return formData.value.id
    ? `Edit user ${formData.value.firstName} ${formData.value.lastName}`
    : 'Create user'
})

const handleSubmit = () => {
  errors.value = validateForm(formData.value)
  if (!errors.value) {
    emit('handleSubmit', formData.value)
  }
}

</script>

<style lang="scss">

.form-container {
  width: 400px;
  padding: 30px;
  background-color: rgb(245, 245, 245);
    &_heading {
    padding: 15px;
    margin-bottom: 0;
    text-align: center;
    font-weight: normal;
    background-color: rgb(127, 159, 228);
  }

  @media screen and (max-width: 400px) {
    width: 95%;    
  }
}
</style>