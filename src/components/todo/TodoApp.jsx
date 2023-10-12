import { useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate, useParams, Navigate } from 'react-router-dom'
import HeaderComponent from './HeaderComponent'
import LogoutComponent from './LogoutComponent'
import './TodoApp.css'
import AuthProvider from './security/AuthContext'
import { useAuth } from './security/AuthContext'


function AuthenticatedRoute( {children} ) {
    const authContext = useAuth()

    if (authContext.isAuthenticated) {
        return (
            children
        )
    } else {
        return <Navigate to="/" />
    }
}

export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={ <LoginComponent /> } />
                        <Route path='/login' element={ <LoginComponent /> } />
                        <Route path='/welcome/:username' element={ 
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>    
                         } />

                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodoComponent />
                            </AuthenticatedRoute>  
                        } />

                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>  
                        } />
                        <Route path='*' element={ <ErrorComponent /> }/>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}

function LoginComponent() {

    const [username, setUsername] = useState('topy')
    const [password, setPassword] = useState('')

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();

    const authContext = useAuth()


    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }
    
    function handleSubmit() {
        if (authContext.login(username, password)) {
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            <h1>Time to Login!</h1>
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="Password" name="Password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}


function WelcomeComponent() {

    const { username } = useParams()

    return (
        <div className="Welcome">
            <h1>Welcome { username }!</h1>
            <div>
                Welcome Component
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>
                Apologies for the 404. Reach out to our team at ABC-DEF-GHIJ.
            </div>
        </div>
    )
}

function ListTodoComponent() {

    const todos = {id: 1, description: 'Learn React'}

    return (
        <div className="ListTodoComponent">
            <h1>Things You Want To Do!</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>description</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{todos.id}</td>
                            <td>{todos.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}