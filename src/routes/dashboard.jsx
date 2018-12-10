import Dashboard from 'views/Dashboard/Dashboard.jsx'
import Icons from 'views/Icons/add_prescription.jsx'
import Maps from 'views/Maps/Maps.jsx'

import UserPage from 'views/UserPage/UserPage.jsx'

var dashRoutes = [
  {
    path: '/dashboard',
    name: 'Home',
    icon: 'nc-icon nc-bank',
    component: Dashboard
  },
  {
    path: '/add_prescription',
    name: 'Add Prescription',
    icon: 'nc-icon nc-simple-add',
    component: Icons
  },
  {
    path: '/maps/:doctor_id',
    name: 'View Prescription',
    icon: 'nc-icon nc-album-2',
    component: Maps
  },
  {
    path: '/user-page',
    name: 'Help',
    icon: 'nc-icon nc-alert-circle-i',
    component: UserPage
  },

  { redirect: true, path: '/', pathTo: '/dashboard', name: 'Dashboard' }
]
export default dashRoutes
