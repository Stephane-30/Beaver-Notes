import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './pages/Index.vue';
import Note from './pages/note/_id.vue';
import Settings from './pages/Settings.vue';
import SettingsIndex from './pages/settings/Index.vue';
import SettingsAppearance from './pages/settings/Appearance.vue';
import SettingsShortcuts from './pages/settings/Shortcuts.vue';
import SettingsAbout from './pages/settings/About.vue';
import privacysecurity from './pages/settings/privacysecurity.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/note/:id',
    name: 'Note',
    component: Note,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    children: [
      {
        name: 'index',
        path: '',
        component: SettingsIndex,
      },
      {
        path: 'appearance',
        name: 'Settings-Appearance',
        component: SettingsAppearance,
      },
      {
        path: 'shortcuts',
        name: 'Settings-Shortcuts',
        component: SettingsShortcuts,
      },
      {
        path: 'privacysecurity',
        name: 'Settings-privacysecurity',
        component: privacysecurity,
      },
      {
        path: 'about',
        name: 'Settings-About',
        component: SettingsAbout,
      },
    ],
  },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
