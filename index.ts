// export default {};

const obj = {
  VITE_USE_MOCK: 'true',
  VITE_PUBLIC_PATH: '/',
  VITE_PROXY:
    '[["/basic-api","http://localhost:3000"],["/upload","http://localhost:3300/upload"]]',
  VITE_DROP_CONSOLE: 'false',
  VITE_GLOB_API_URL: '/basic-api',
  VITE_GLOB_UPLOAD_URL: '/upload',
  VITE_GLOB_API_URL_PREFIX: '',
  VITE_PORT: '3100',
  VITE_GLOB_APP_TITLE: 'Vben Admin',
  VITE_GLOB_APP_SHORT_NAME: 'vue_vben_admin',
};

for (const it in obj) {
  console.log('it:', it);
}
