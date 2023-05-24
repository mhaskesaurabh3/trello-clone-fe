import React from 'react';
import './LoginPage.css';
import TrelloLogo from '../../../assets/trello-logo.png';
import LoginInput from './LoginInput';

const LoginPage = () => {
  return (
    <>
      <div className='login_ui flex justify-center flex-col items-center'>
        <div className='trello_logo'>
          <img className='w-48' src={TrelloLogo} alt='trello-logo' />
        </div>
        <div className='login_fields'>
          <LoginInput />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
