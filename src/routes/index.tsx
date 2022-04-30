import React from 'react';
import {useAuth} from '../contexts/AuthContext';
import {LoadingScreen} from '../screens/LoadingScreen';
import {AuthRoutes} from './auth.routes';
import {PublicRoutes} from './public.routes';

export const Routes: React.FC = () => {
  const {loading, user, signOut} = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  return user ? <AuthRoutes /> : <PublicRoutes />;
};
