import { configureStore } from '@reduxjs/toolkit'
import colorModeReducer from './components/NavBar/colorModeSIice'
export default configureStore({
  reducer: {
    colorMode: colorModeReducer
  },
})