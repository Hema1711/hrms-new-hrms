import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'All Employees',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Employee Registration',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Performance Record',
        link: '/pages/forms/records',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'Recruitment Management',
    link: '/pages/profile',
  },
  {
    title: 'Contract Details',
    link: '/pages/contract',
  },
  {
    title: 'Leave Management',
    link: '/pages/leave',
  },
  {
    title: 'Payroll Automation',
    link: '/pages/payroll',
  },
  {
    title: 'Manage Departments',
    link: '/pages/events',
  },
];
