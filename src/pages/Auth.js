import React, { useState } from 'react';
import PageHeader from '../components/page-layout/PageHeader';
import LoginForm from '../features/user/LoginForm';
import RegisterForm from '../features/user/RegisterForm';

const Auth = () => {
  return (
    <div className="container mx-auto">
      <PageHeader heading="Vigor Authentication" />
      <div className="grid grid-cols-2 gap-4">
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
};

export default Auth;
