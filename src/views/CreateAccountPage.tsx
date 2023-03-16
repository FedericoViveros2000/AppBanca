import React from "react";
import { useCreateAccount } from "../hooks/useCreateAccount";
import BaseGenericForm from "../components/BaseGenericForm";
import CreateAccount from "../components/CreateAccount";
import ModalBasic from "../components/modals/ModalBasic";
import ModalSuccess from "../components/modals/ModalSuccess";

const CreateAccountPage = () => {
  //let { handleChange, handleSubmit, errors } = useForm(validationForm);
  let { handleCreateAccount, createdSuccess, createAccount } =
    useCreateAccount();

  return (
    <>
      <ModalBasic>
        <ModalSuccess/>
      </ModalBasic>
      <BaseGenericForm
        navTitle="Create Account"
        urlBack="/"
        titleForm="Welcome"
        subTitleForm="Hello there, sign up to continue"
        handleSubmit={createAccount}
      >
        <CreateAccount handleCreateAccount={handleCreateAccount} />
      </BaseGenericForm>
    </>
  );
};

export default CreateAccountPage;
