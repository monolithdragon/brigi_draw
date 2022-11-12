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

const SingUpForm = () => {
  const { switchToSignIn } = React.useContext(AccountContext);

  const initialState = {
    name: '',
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
      <FormContainer onSubmit={onSubmit}>
        <Input type="text" name="username" placeholder="Name..." onChange={onChange}/>
        <Input type="email" name="email" placeholder="Email..." onChange={onChange}/>
        <Input type="password" name="password" placeholder="Password..." onChange={onChange}/>
        <Input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password..."
        />
      </FormContainer>
      <Marginer direction="vertical" spacing="1.6em" />
      <SubmitButton type="submit">Submit</SubmitButton>
      <Marginer direction="vertical" spacing="1em" />
      <MutedLink href="#">Already have an account?</MutedLink>
      <BoldLink href="#" onClick={switchToSignIn}>
        SignIn
      </BoldLink>
    </Box>
  );
};

export default SingUpForm;
