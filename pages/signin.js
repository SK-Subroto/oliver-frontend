import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SIGNIN } from "../store/slices/authSlice.js";
import axios from 'axios';
import { useRouter } from 'next/router.js';

export default function Login() {
    const [identifier, setIdentifierl] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            identifier: identifier,
            password: password,
        };
        console.log(data);
        axios
            .post("https://apiv4.singularitybd.co/api/v4/login", data)
            .then((res) => {
                const user = res.data;
                console.log(res.data);
                dispatch(SIGNIN({ user: user.data, token: user.access_token }));
                router.push("/");
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input className='border' type="text" onChange={(e) => setIdentifierl(e.target.value)} />
            </label>
            <label>
                Password:
                <input className='border' type="password" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button className='bg-blue-400' type="submit">Login</button>
        </form>
    );
}
