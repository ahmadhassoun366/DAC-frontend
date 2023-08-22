import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [refreshToken, setRefreshToken] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [managerId, setManagerId] = useState(null);
    const [accountantId, setAccountantId] = useState(null);
    const [error, setError] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [accountType, setAccountType] = useState('');

    const history = useNavigate();

    const login = async (email, password) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_JOB_API_URL}/users/token`, {
                email,
                password
            });
            const { refresh, access } = response.data;
            setIsAuthenticated(true);
            setRefreshToken(refresh);
            setAccessToken(access);
            console.log("refresh token is " + refresh);
            console.log("access token is " + access);
            setError('');

            if (refresh) {
                const decodedToken = jwt_decode(refresh);
                console.log("decoded", decodedToken);
                const userId = decodedToken.user_id;
                console.log('User ID:', userId);

                setUserId(userId)
                localStorage.setItem('userId', userId);
            }

            if (userId) {
                const managerResponse = await axios.get(`${process.env.REACT_APP_JOB_API_URL}/users/api/manager/${userId}/`);
                console.log("manager", managerResponse.data);
                if (managerResponse.data.length > 0) {
                    console.log("Manager Logged In Successfully");
                    setManagerId(managerResponse.data[0].id)
                    localStorage.setItem('managerId', managerResponse.data[0].id);
                    history.push('/dashboard');
                }

                else {
                    // User is a accountant
                    console.log("Accountant Logged In Successfully");
                    history.push('/accountant-dashboard');
                    const accountantResponse = await axios.get(`${process.env.REACT_APP_JOB_API_URL}/users/api/accountant/${userId}/`);
                    setAccountantId(accountantResponse.data[0].id);
                    console.log(accountantResponse.data[0].id)
                    localStorage.setItem('accountantId', accountantResponse.data[0].id);
                    localStorage.setItem('isAuthenticated', true.toString());
                    console.log('heyy:', localStorage.getItem('isAuthenticated'));
                }
            }
        } catch (error) {
            if (error.response.status === 401)
                alert('Invalid email or password.');
        }
    };
    const handleSignUp = async (e) => {
        e.preventDefault();

        if (accountType === 'recruiter') {
            // Registration Data for recruiter
            const registrationData = {
                first_name,
                last_name,
                phone,
                email,
                password,
            };
            await fetch(`${process.env.REACT_APP_JOB_API_URL}/users/api/recruiter_register/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(registrationData),
            }).then((response) => response.json())
                .then((data) => {
                    setFirst_name('');
                    setLast_name('');
                    setPassword('');
                    setPhone('');
                    setConfirmPassword('');
                    console.log(data);
                })
                .catch((error) => { console.error(error); });
        }
        else if (accountType === 'jobseeker') {
            // Registration Data for Job Seeker
            const registrationData = {
                first_name,
                last_name,
                phone,
                email,
                password,
            };
            await fetch(`${process.env.REACT_APP_JOB_API_URL}/users/api/seeker_register/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(registrationData),
            }).then((response) => response.json())
                .then((data) => {
                    setFirst_name('');
                    setLast_name('');
                    setPassword('');
                    setPhone('');
                    setConfirmPassword('');
                    console.log(data);
                })
                .catch((error) => { console.error(error); });
        }
    };


    return (
        <AuthContext.Provider value={{
            login,
            handleSignUp,
            isAuthenticated,
            setIsAuthenticated,
            refreshToken,
            setRefreshToken,
            accessToken,
            setAccessToken,
            userId,
            setUserId,
            managerId,
            setManagerId,
            accountantId,
            setAccountantId,
            error, setError,
            first_name, setFirst_name, last_name, setLast_name, phone, setPhone, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword
        }}>
            {children}
        </AuthContext.Provider>
    );
};