import { FormEvent, useState } from "react";
import Button from "../layout/Button";
import PatternRing from "../layout/PatternRing";
import InputBox from "./InputBox";
import ErrorMessage from "./ErrorMessage";

const ContactForm = () => {
  const [nameInput, setNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [messageInput, setMessage] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const isFieldEmpty = (input: string) => {
    return input.length <= 0;
  };
  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (isFieldEmpty(nameInput)) {
      setNameError("This field is required.");
    } else {
      setNameError("");
    }

    if (isFieldEmpty(emailInput)) {
      setEmailError("This field is required.");
    } else if (
      !emailInput
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      setEmailError("Invalid email address.");
    } else setEmailError("");

    if (isFieldEmpty(messageInput)) {
      setMessageError("This field is required.");
    } else {
      setMessageError("");
    }

    if (
      !isFieldEmpty(nameInput) &&
      !isFieldEmpty(emailInput) &&
      !isFieldEmpty(messageInput) &&
      emailInput
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      setSubmitted(true);
      setNameInput("");
      setEmailInput("");
      setMessage("");
    }
  };

  return submitted ? (
    <div className="h-96 pt-24 md:text-3xl uppercase text-green max-md:text-center md:w-[35%]">
      Thanks,
      <br />I will get back to you soon!
    </div>
  ) : (
    <form
      className="relative mt-10 flex w-full flex-col gap-8 md:w-[35%]"
      onSubmit={handleFormSubmit}
    >
      <InputBox>
        <input
          placeholder="NAME"
          className={`${
            nameError
              ? "border-b-red-500  placeholder:text-red-500"
              : "placeholder:text-white"
          } border-b-2 bg-transparent p-4`}
          value={nameInput}
          id="name"
          name="name"
          onChange={(e) => setNameInput(e.target.value)}
        />
        <ErrorMessage>{nameError}</ErrorMessage>
      </InputBox>
      <InputBox>
        <input
          placeholder="EMAIL"
          className={`${
            emailError
              ? "border-b-red-500 placeholder:text-red-500"
              : "placeholder:text-white"
          } border-b-2 bg-transparent p-4`}
          value={emailInput}
          id="email"
          name="email"
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <ErrorMessage>{emailError}</ErrorMessage>
      </InputBox>
      <InputBox>
        <textarea
          placeholder="MESSAGE"
          id="message"
          name="message"
          className={`${
            messageError
              ? "border-b-red-500 placeholder:text-red-500"
              : "placeholder:text-white"
          } resize-none border-b-2 bg-transparent p-4`}
          rows={5}
          value={messageInput}
          onChange={(e) => setMessage(e.target.value)}
        />
        <ErrorMessage>{messageError}</ErrorMessage>
      </InputBox>
      <div className="mb-28 mt-2 flex w-1/2 justify-end self-end">
        <Button>
          <button className="text-xl uppercase" type="submit">
            Send Message
          </button>
        </Button>
      </div>

      <PatternRing className="absolute -left-[60%] bottom-[27%] z-0 sm:-left-[100%] sm:bottom-[5%] md:hidden" />
    </form>
  );
};

export default ContactForm;
