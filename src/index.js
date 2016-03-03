import './global.css'

if(__DEV__) {
  console.log('this will only log in development mode');
} else if (__PROD__) {
  console.log('this will only log in production mode');
}