import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

export default api;

/**
 * ios com Emulador: localhost
 * ios com dispositivo fisico: ip da máquina 
 * 
 * Android com emulador: 
 *  - localhost: adb reverse tcp:3000 tcp:3000 (expose de porta)
 * Android localhost emulator: 10.0.2.2 (Android Studio)
 * Emulador Genymotion: 10.0.3.2 
 * Android físico : IP DA MAQUINA
 */