import * as app from 'firebase/app'
import * as Auth from 'firebase/auth'

const firebase = app.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID
})

export const auth = Auth.getAuth()

export { app, Auth }

export default firebase
