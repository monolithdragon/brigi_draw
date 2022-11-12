import SignInForm from 'components/SignInForm';
import SignUpForm from 'components/SignUpForm';
import { AccountContext } from 'contexts/AccountContext';
import React from 'react';

import Backdrop, { backdropVariants, expandingTransition } from './Backdrop';
import Box from './Box';
import HeaderContainer from './HeaderContainer';
import HeaderText from './HeaderText';
import InnerContainer from './InnerContainer';
import SmallText from './SmallText';
import TopContainer from './TopContainer';

const Account = () => {
  const [isExpanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState('signin');  

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignIn = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive('signin');
    }, 400);
  };

  const switchToSignUp = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive('signup');
    }, 400);
  };

  const contextValue = { switchToSignIn, switchToSignUp };

  return (
    <AccountContext.Provider value={contextValue}>
      <Box>
        <TopContainer>
          <Backdrop
            initial={false}
            animate={isExpanded ? 'expanded' : 'collapsed'}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === 'signin' && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>Back</HeaderText>
              <SmallText>Please sign in to continue</SmallText>
            </HeaderContainer>
          )}
          {active === 'signup' && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign up to continue</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === 'signin' && <SignInForm />}
          {active === 'signup' && <SignUpForm />}
        </InnerContainer>
      </Box>
    </AccountContext.Provider>
  );
};

export default Account;
