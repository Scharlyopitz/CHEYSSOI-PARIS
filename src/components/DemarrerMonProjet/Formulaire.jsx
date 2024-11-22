import { useState } from "react";

export default function Formulaire() {
  const [informations, setInformations] = useState({
    surface: "",
    message: "",
    firstname: "",
    name: "",
    tel: "",
    email: "",
    postalCode: "",
  });

  const [error, setError] = useState(false);
  const [messageOff, setmessageOff] = useState(false);

  const SuccesMsg = `Message Sent`;
  const ErrorMsg = "Complete all Fields";

  const clearFields = () => {
    setInformations({
      surface: "",
      message: "",
      firstname: "",
      name: "",
      tel: "",
      email: "",
      postalCode: "",
    });
  };

  const refreshMessage = () => {
    setTimeout(() => {
      setmessageOff(false);
    }, 1500);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_is6z0jh";
    const templateId = "template_723rf7y";
    const plublicKey = "Ivv9VH-K6JIKana-R";

    const templateParams = {
      user_message: informations.message,
      user_email: informations.email,
      user_name: informations.name,
      to_name: "Wilhelm le boss",
    };

    const sendEmail = () => {
      emailjs
        .send(serviceId, templateId, templateParams, plublicKey)
        .then((reponse) => {
          if (
            informations.surface !== "" &&
            informations.message !== "" &&
            informations.name !== "" &&
            informations.firstname !== "" &&
            informations.tel !== "" &&
            informations.email !== "" &&
            informations.postalCode !== ""
          ) {
            console.log(reponse);
            clearFields();
            setButtonMessage(SuccesMsg);
            refreshButton();
          } else {
            setButtonMessage(ErrorMsg);
            refreshButton();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    if (
      informations.surface !== "" &&
      informations.message !== "" &&
      informations.name !== "" &&
      informations.firstname !== "" &&
      informations.tel !== "" &&
      informations.email !== "" &&
      informations.postalCode !== ""
    ) {
      clearFields();
      setError(false);
      refreshMessage();
      setmessageOff(true);
      sendEmail();
    } else {
      setError(true);
      setmessageOff(true);
    }
  };

  return (
    <div>
      <h1>Contact Me</h1>

      <form onSubmit={(e) => sendEmail(e)}>
        <p></p>
        <div>
          <label htmlFor="name">
            Full Name <span>*</span>{" "}
          </label>
          <input
            autoComplete="off"
            value={informations.name}
            onChange={(e) =>
              setInformations((prec) => ({ ...prec, name: e.target.value }))
            }
            type="text"
            id="name"
          />
        </div>

        <div>
          <label htmlFor="mail">
            Email <span>*</span>
          </label>
          <input
            autoComplete="off"
            value={informations.email}
            onChange={(e) =>
              setInformations((prec) => ({ ...prec, email: e.target.value }))
            }
            type="email"
            id="mail"
          />
        </div>

        <div>
          <label htmlFor="msg">
            Message <span>*</span>
          </label>
          <textarea
            autoComplete="off"
            value={informations.message}
            onChange={(e) =>
              setInformations((prec) => ({ ...prec, message: e.target.value }))
            }
            id="msg"
          ></textarea>
        </div>

        <button type="submit">
          <div className="submit">
            <p>Send</p>
            <p>Send</p>
          </div>
        </button>
      </form>
    </div>
  );
}
