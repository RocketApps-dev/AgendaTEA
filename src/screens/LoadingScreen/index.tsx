import React from 'react';
import {Container, ActivityIndicator} from './styles';

export const LoadingScreen: React.FC = () => {
  return (
    <Container>
      <ActivityIndicator />
    </Container>
  );
};
