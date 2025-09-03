import { Navigate } from 'react-router-dom';

const ProtectRouter = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Example check, replace with real auth logic

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  } else {
    return children;
  }
}
export default ProtectRouter;