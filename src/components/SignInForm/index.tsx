import Marginer from 'components/Marginer';
import { AccountContext } from 'contexts/AccountContext';
import { useForm } from 'hooks/useForm';
import React from 'react';

import BoldLink from './BoldLink';
import Box from './Box';
import FormContainer from './FormContainer';
import Input from './Input';
import MutedLink from './MutedLink';
import SubmitButton from './SubmitButton';

const SignInForm = () => {
  const { switchToSignUp } = React.useContext(AccountContext);

  const initialState = {
    email: '',
    password: '',
  };

  const handleSubmit = async () => {
    // send "values" to database
  };

  const { onChange, onSubmit, values } = useForm(
    handleSubmit, 
    initialState
  );  

  return (
    <Box>
      <FormContainer onSubmit={handleSubmit}>
        <Input type="email" name="email" placeholder="Email..." onChange={onChange}/>
        <Input type="password" name="password" placeholder="Password..." onChange={onChange}/>
      </FormContainer>
      <Marginer direction="vertical" spacing="1em" />
      <MutedLink href="#">Forgot your password?</MutedLink>
      <Marginer direction="vertical" spacing="1.6em" />
      <SubmitButton type="submit">Submit</SubmitButton>
      <Marginer direction="vertical" spacing="1em" />
      <MutedLink href="#">Don't have an account?</MutedLink>
      <BoldLink href="#" onClick={switchToSignUp}>
        SignUp
      </BoldLink>
    </Box>
  );
};

export default SignInForm;
