import { arrayToString } from '@/helpers/utils';
import { date } from "quasar";

const columns = [
    { name: 'name', align: 'center', label: 'Name', field: row => row.firstName + ' ' + row.lastName, classes: 'wrap-text', style: 'max-width: 120px' },
    { name: 'email', align: 'center', label: 'Email', field: 'email', classes: 'wrap-text', style: 'max-width: 120px' },
    { name: 'birthday', align: 'center', label: 'Birthday', field: 'birthday', format: val => date.formatDate(val, "DD.MM.YYYY") },
    { name: 'site', align: 'center', label: 'Site', field: 'site', classes: 'ellipsis', style: 'max-width: 120px'  },
    { name: 'avatar', align: 'center', label: 'Avatar', field: 'avatar' },
    { name: 'gender', align: 'center', label: 'Gender', field: 'gender', format: val => val.toLowerCase() },
    { name: 'role', align: 'center', label: 'Role', field: 'role' },
    { name: 'notify', align: 'center', label: 'Notify', field: 'notify', format: val => arrayToString(val) },
    { name: 'age', align: 'center', label: 'Age', field: 'age', format: val => val || '' },
    { name: 'active', align: 'center', label: 'Active', field: 'active', format:  val => val ? 'Yes' : 'No'},
    { name: 'actions' }
  ]

const customFilter = (rows, filterTerm) => rows.filter(row => {
  if (row.firstName.toLowerCase().includes(filterTerm.toLowerCase()) 
      || row.lastName.toLowerCase().includes(filterTerm.toLowerCase())) {
    return row
  }
})

export { columns, customFilter }