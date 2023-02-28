import React, {
  useState,
  FocusEvent,
  ChangeEvent,
  useEffect,
  SyntheticEvent
} from 'react';
import styled from "styled-components";
import {FeedbackData} from "../types/feedback";
import {useDispatch} from "react-redux";
import {postFeedback} from "../store/action-creators/feedback";
import type {} from 'redux-thunk/extend-redux';

const FormWrapper = styled.form`
  max-width: 630px;
  margin: 40px 0 40px 0;
`;

const FormTittle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 130%;
  color: #3e3e3e;
  margin-bottom: 30px;
`;

const FormLabel = styled.label`
`;

const FormInput = styled.input`
  height: 93px;
  width: 100%;
  font-size: 18px;
  color: #3e3e3e;
  outline: none;
  background: #FFFFFF;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  padding: 0 46px;
  margin-bottom: 8px;
  
  &:invalid {
    border-color: red;
  }
`;

const FormTextarea = styled.textarea`
  height: 189px;
  width: 100%;
  resize: none;
  font-size: 18px;
  color: #3e3e3e;
  outline: none;
  background: #FFFFFF;
  border: 1px solid #DCDCDC;
  border-radius: 10px;
  padding: 31px 46px 10px;
  margin-bottom: 23px;

  &:invalid {
    border-color: red;
  }
`;

const FormButton = styled.button`
  width: 218px;
  height: 73px;
  background: #FAD34F;
  color: #FFFFFF;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 500px;
  
  &:disabled {
    background-color: #DCDCDC;
  }
`;

const Form = () => {
  const [nameInput, setNameInput] = useState<string>('');
  const [emailInput, setEmailInput] = useState<string>('');
  const [massageInput, setMassageInput] = useState<string>('');

  const [isTouchedName, setIsTouchedName] = useState<boolean>(false);
  const [isTouchedEmail, setIsTouchedEmail] = useState<boolean>(false);
  const [
    isTouchedMassage,
    setIsTouchedMassage
  ] = useState<boolean>(false);

  const [nameIsInvalid, setNameIsInvalid] = useState<boolean>(true);
  const [emailIsInvalid, setEmailIsInvalid] = useState<boolean>(true);
  const [
    massageIsInvalid,
    setMassageIsInvalid
  ] = useState<boolean>(true);

  const [isInvalidForm, setIsInvalidForm] = useState<boolean>(true);

  const dispatch = useDispatch();

  const blurHanler = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (e.target.name) {
      case 'email':
        setIsTouchedEmail(true);
        console.log('email input is touched')
        break;
      case 'name':
        setIsTouchedName(true);
        console.log('name input is touched')
        break;
      case 'massage':
        setIsTouchedMassage(true);
        console.log('massage input is touched')
        break;
    }
  };

  const nameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;

    setNameInput(name);

    if (name.length > 3 && name.length < 100) {
      setNameIsInvalid(false);
      console.log('name is valid')
    } else {
      setNameIsInvalid(true);
      console.log('name is invalid')
      console.log(isTouchedName, nameIsInvalid)
    }
  };

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;

    setEmailInput(email);

    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (re.test(String(email).toLowerCase())) {
      setEmailIsInvalid(false);
      console.log('email is valid')
    } else {
      setEmailIsInvalid(true);
      console.log('email is invalid')
    }
  };

  const massageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const massage = e.target.value;

    setMassageInput(massage);

    if (massage.length > 3 && massage.length < 300) {
      setMassageIsInvalid(false);
      console.log('massage is valid')
    } else {
      setMassageIsInvalid(true);
      console.log('massge is invalid')
    }
  };

  useEffect(() => {
    if (nameIsInvalid || massageIsInvalid || emailIsInvalid) {
      setIsInvalidForm(true);
    } else {
      setIsInvalidForm(false);
    }
  }, [nameIsInvalid, massageIsInvalid, emailIsInvalid]);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userFeedback: FeedbackData = {
      name: nameInput,
      email: emailInput,
      massage: massageInput
    }

    dispatch(postFeedback(userFeedback));

    setNameInput('');
    setEmailInput('');
    setMassageInput('');

    setIsTouchedMassage(false);
    setIsTouchedName(false);
    setIsTouchedEmail(false);

    setIsInvalidForm(true);
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormTittle>
        Reach out to us!
      </FormTittle>
      <FormLabel>
        <FormInput
          type={"text"}
          name={'name'}
          placeholder={'Your name*'}
          onBlur={e => blurHanler(e)}
          value={nameInput}
          onChange={e => nameHandler(e)}
          required={(isTouchedName && nameIsInvalid)}
        />
      </FormLabel>

      <FormLabel>
        <FormInput
          type={"email"}
          name={'email'}
          placeholder={'Your e-mail*'}
          onBlur={e => blurHanler(e)}
          value={emailInput}
          onChange={e => emailHandler(e)}
          required={isTouchedEmail && emailIsInvalid}
        />
      </FormLabel>

      <FormLabel>
        <FormTextarea
          name={"massage"}
          placeholder={'Your massage*'}
          onBlur={e => blurHanler(e)}
          value={massageInput}
          onChange={e => massageHandler(e)}
          required={(isTouchedMassage && massageIsInvalid)}
        />
      </FormLabel>

      <FormButton disabled={isInvalidForm}>Send message</FormButton>
    </FormWrapper>
  );
};

export default Form;