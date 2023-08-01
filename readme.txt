--------INSTALL VUE & MAKE PROJECT-------

npm init vue@latest

typescript:no / JSX:no, vue-router SPA:yes / Pinia:yes / vitest:yes/ cypress:yes / eslint:yes / prettier:yes

cd cloe-mart (project name)
  npm install -must
  npm run format -optional
  npm run dev -must
-----------------------------------------


---------------- DELETE --------------------------
DELETE folder .vscode
------------------------- ------------------------


------------ {} settings.json ----------------------------------------------------------------------
open setting choose in top-right is called setting.json

and copy this below ---> "settingsSync.ignoredExtensions": ["ms-vscode.sublime-keybindings"],: 
  "editor.formatOnSave": true,
  "liveServer.settings.CustomBrowser": "chrome",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
----------------------------------------------------------------------------------------------------



--------SETTING in .eslintrc.cjs-------------------------------------------------
'@vue/eslint-config-prettier/skip-formatting' --> delete "/skip-formatting" to:
  '@vue/eslint-config-prettier'


COPY THIS CODE and PASTE
env: {
    node: true,
  },

AFTER
parserOptions: {
    ecmaVersion: 'latest',
  },
------------------------------------------------------------------------


----------DISABLING VUE'S RULES-------
Read the Documentations
https://eslint.vuejs.org/rules/multi-word-component-names.html

Copy and paste this rules to .eslintrc.cjs (after env: node true) :

rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-reserved-component-names": "off",

    // delete ␍ eslint prettier/prettier vue fix
    "prettier/prettier": ["error", { endOfLine: "off" }],
  },
-------------------------------------------------------------------------------------------



--------INSTALL TAILWIND CSS-------
npm install -D tailwindcss postcss autoprefixer

--------CREATE TAILWIND postcss.config.cjs-------
npx tailwindcss init -p

--------COPY TO src/assets/base.css Vue-------
@tailwind base;
@tailwind components;
@tailwind utilities;

read the tailwind docs.
-------------------------------------------------------------


--------SETTING main.js-------
import './assets/main.css'; to import './assets/base.css';
can delete src/assets/main.css (optional)

--------GO TO App.vue-------
you can delete Default syntax OR
block all and make it comment (ctrl + /)

--------GO TO ALL DEFAULT FILE-------
you can delete Default syntax OR
block all and make it comment (ctrl + /)




-------------------------- CUSTOM index.js ------------------------------------

import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    // alias: '/home',
    name: 'home',
    component: Home
  },

  {
    path: '/about',
    // alias as an additional path for the component
    // alias: "/about",
    name: 'about',
    component: About,

    // Route Specific Guard
    beforeEnter: (to, from, next) => {
      console.log('Manage Route Guard')
      next()
    }
  },

  //when user set the name of html, and that html doesn't exist, the pages will redirect to home page
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }

  // redirect page, if user set manage in end if the http://localhost:5173/#/manage-music
  // {
  //   path: '/manage',
  //   redirect: { name: 'manage' },
  // },

]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
  // linkExactActiveClass: 'border-b-2 border-yellow-400 transition-all delay-300 duration-500'
})

//Guarding Routes. this guard applies to all routes registered in application (Global Guard)
router.beforeEach((to, from, next) => {
  console.log('Global Guard')
  // console.log(to, from);

  next()
})

export default router
-------------------------- ---------------------- ------------------------------------


-------------------------- DEFAULT index.js ------------------------------------

// import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '../views/Home.vue';

// const router = createRouter({
//   history: createWebHashHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: () => import('../views/Home.vue'),
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/About.vue'),
//     },
//     {
//       path: '/contact',
//       name: 'contact',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/Contact.vue'),
//     },
//   ],
// });

// export default router;


// INSTALL FIREBASE node

npm i firebase@8

// Vee Validate Global Validators
npm install @vee-validate/rules


set up firebase

1.
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

2.
npm install -g firebase-tools

3.
firebase init
	--** firebase-hosting-xxxx

4.
dist

5.
npm run build


6.firebase deploy
	(mendeploy)

7.refresh page 3x


//-----------------------------REAL DATABASE SETTING------------------------
//read documentation:
//https://firebase.google.com/docs/database/security/indexing-data?hl=id
//https://firebase.google.com/docs/database/rest/retrieve-data?hl=id
//stackoverflow
//https://stackoverflow.com/questions/34968413/error-index-not-defined-add-indexon
//https://stackoverflow.com/questions/38590700/firebase-rest-api-filter-query
//https://stackoverflow.com/questions/39092475/how-to-add-index-rules-for-firebase-database


//---------RULES
{
  "rules": {
    "allItems":{
      ".indexOn": ["id", "title", "kelompok","deskripsi","volume","harga","img","quantity","order",]
    },
    "paketLengkap":{
      ".indexOn": ["id", "title", "kelompok","deskripsi","volume","harga","img","quantity","order",]
    },
    "paketMurah":{
      ".indexOn": ["id", "title", "kelompok","deskripsi","volume","harga","img","quantity","order",]
    },
    ".read": true,
   	".write": true  
  }
}

//----DEFAULT RULES
// {
//   "rules": {
//     ".read": "now < 1691766000000",  // 2023-8-12
//     ".write": "now < 1691766000000",  // 2023-8-12
//   }
// }


