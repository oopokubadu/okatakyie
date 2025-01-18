import React, { useCallback, useReducer, useRef, useState } from "react";
import { sendEmail } from "../../../../util/email";
import Button from "../../../Button";
import ContactFailedModal from "../../../ContactFailedModal";
import ContactSuccessModal from "../../../ContactSuccessModal";
import TextField from "../../../TextField";

const FORM_FIELDS = [
  {
    label: "What should I call you?",
    placeholder: "Please identify yourself...",
    name: "fullName",
    initialValue: "",
    fieldType: "textInput",
    type: "text",
  },
  {
    label: "Email Address",
    placeholder: "Enter your email address",
    name: "email",
    initialValue: "",
    fieldType: "textInput",
    type: "email",
  },
  {
    label: "What is on your mind?",
    placeholder: "Please enter your message",
    name: "message",
    initialValue: "",
    fieldType: "textArea",
    type: "text",
  },
];

// const initialState = FORM_FIELDS.reduce((acc, cur) => {
//   acc[cur.name] = { value: cur.initialValue, errors: [] };
//   return acc;
// }, {});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETVALUE":
      return {
        ...state,
        [action.payload.name]: {
          value: action.payload.value,
          errors: [...state[action.payload.name].errors],
        },
      };

    case "ADDERROR":
      return {
        ...state,
        [action.payload.name]: {
          value: state[action.payload.name].value,
          errors: [...state[action.payload.name].errors, action.payload.error],
        },
      };

    default:
      return state;
  }
};

function ContactForm() {
  // const [formState, dispatch] = useReducer(reducer, initialState);

  // const handleOnChange = (name, value) => {
  //   dispatch({ type: "SETVALUE", payload: { name, value } });
  // };

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState();

  const form = useRef(null);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    try {
      setSending(true);
      await sendEmail(form.current);
      form.current.reset();
      setSent(true);
    } catch (error) {
      console.log(error);
      setSent(false);
    } finally {
      setSending(false);
    }
  }, []);

  console.log("sent::", sent);

  return (
    <>
      <div className="max-w-[620px] xl:max-w-[430px] mx-auto py-[92px]">
        <h2>Let&apos;s get in touch!</h2>
        <form ref={form} onSubmit={handleSubmit}>
          {FORM_FIELDS.map((item) => (
            <TextField
              key={item.name}
              label={item.label}
              placeholder={item.placeholder}
              fieldType={item.fieldType}
              name={item.name}
              type={item.type}
              required
              // value={formState[item.name].value}
              // onChange={(e) => handleOnChange(item.name, e.target.value)}
            />
          ))}

          <Button type="submit" className="w-full mt-[10px]" disabled={sending}>
            {sending ? "Sending Message..." : "Send Message"}
          </Button>
        </form>
      </div>
      <ContactSuccessModal show={sent} onClose={() => setSent(undefined)} />
      <ContactFailedModal
        show={sent === false}
        onClose={() => setSent(undefined)}
      />
    </>
  );
}

export default ContactForm;
