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

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     const serviceId = "service_is6z0jh";
  //     const templateId = "template_723rf7y";
  //     const plublicKey = "Ivv9VH-K6JIKana-R";

  //     const templateParams = {
  //       user_message: informations.message,
  //       user_email: informations.email,
  //       user_name: informations.name,
  //       to_name: "Wilhelm le boss",
  //     };

  //     const sendEmail = () => {
  //       emailjs
  //         .send(serviceId, templateId, templateParams, plublicKey)
  //         .then((reponse) => {
  //           if (
  //             informations.surface !== "" &&
  //             informations.message !== "" &&
  //             informations.name !== "" &&
  //             informations.firstname !== "" &&
  //             informations.tel !== "" &&
  //             informations.email !== "" &&
  //             informations.postalCode !== ""
  //           ) {
  //             console.log(reponse);
  //             clearFields();
  //             setButtonMessage(SuccesMsg);
  //             refreshButton();
  //           } else {
  //             setButtonMessage(ErrorMsg);
  //             refreshButton();
  //           }
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     };

  //     if (
  //       informations.surface !== "" &&
  //       informations.message !== "" &&
  //       informations.name !== "" &&
  //       informations.firstname !== "" &&
  //       informations.tel !== "" &&
  //       informations.email !== "" &&
  //       informations.postalCode !== ""
  //     ) {
  //       clearFields();
  //       setError(false);
  //       refreshMessage();
  //       setmessageOff(true);
  //       sendEmail();
  //     } else {
  //       setError(true);
  //       setmessageOff(true);
  //     }
  //   };

  return (
    <div className="formulaire">
      <h1>Démarrer mon projet</h1>

      <form onSubmit={(e) => sendEmail(e)}>
        <p></p>
        <div>
          <label htmlFor="firstName">
            Prénom <span>*</span>{" "}
          </label>
          <input
            autoComplete="off"
            value={informations.firstname}
            onChange={(e) =>
              setInformations((prec) => ({
                ...prec,
                firstname: e.target.value,
              }))
            }
            type="text"
            id="firstName"
          />
        </div>
        <div>
          <label htmlFor="name">
            Nom <span>*</span>{" "}
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
          <label htmlFor="postalCode">
            Code Postal <span>*</span>{" "}
          </label>
          <input
            autoComplete="off"
            value={informations.postalCode}
            onChange={(e) =>
              setInformations((prec) => ({
                ...prec,
                postalCode: e.target.value,
              }))
            }
            type="text"
            id="postalCode"
          />
        </div>
        <div>
          <label htmlFor="tel">
            Tel. <span>*</span>{" "}
          </label>
          <input
            autoComplete="off"
            value={informations.tel}
            onChange={(e) =>
              setInformations((prec) => ({ ...prec, tel: e.target.value }))
            }
            type="text"
            id="tel"
          />
        </div>
        <div>
          <label htmlFor="surface">
            Surface <span>*</span>{" "}
          </label>
          <input
            autoComplete="off"
            value={informations.surface}
            onChange={(e) =>
              setInformations((prec) => ({ ...prec, surface: e.target.value }))
            }
            type="text"
            id="surface"
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
            <p>Envoyer</p>
          </div>
        </button>
      </form>
    </div>
  );
}
