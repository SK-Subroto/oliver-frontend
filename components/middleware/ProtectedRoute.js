import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
    const router = useRouter();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/signin');
        }
    }, [isAuthenticated]);

    return isAuthenticated ? children : null;
};

export default ProtectedRoute;
