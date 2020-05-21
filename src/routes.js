import React, {useContext} from 'react'
import AuthRoute from './routes/Auth.routes'
import AppRoute from './routes/App.routes'
import AuthContext from './contexts/authContext'

export default function Routes(){
    const { signed } = useContext(AuthContext)
    return signed ? <AppRoute /> : <AuthRoute />
}
    
