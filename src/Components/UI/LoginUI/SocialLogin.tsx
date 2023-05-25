import React from 'react';
import jwt_decode from 'jwt-decode';

import { GoogleLogin } from '@react-oauth/google';

interface CredentialResponse {
  credential: string;
}

const SocialLogin = () => {
  const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
    let decoded = jwt_decode(credentialResponse.credential) as {
      name: string;
      email: string;
    };
    // console.log(decoded);
    let { name, email } = decoded;
    console.log('name', name, 'email: ', email);
  };
  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) =>
          handleGoogleLogin(credentialResponse)
        }
        onError={() => {
          console.log('Login Failed');
        }}
        width={'300'}
        text='continue_with'
      />
    </>
  );
};

export default SocialLogin;
