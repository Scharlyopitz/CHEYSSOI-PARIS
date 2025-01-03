import { useState } from "react";
import emailjs from "@emailjs/browser";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FormulesData from "../../assets/FormulesData.json";

export default function Formulaire() {
  const [informations, setInformations] = useState({
    formule: "Chey",
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

  const SuccesMsg = `Email envoyé`;
  const ErrorMsg = "Veuillez remplir tout les champs";

  const clearFields = () => {
    setInformations({
      formule: "Chey",
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

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   const serviceId = "service_s2gudpp";
  //   const templateId = "template_vj885kk";
  //   const plublicKey = "Ivv9VH-K6JIKana-R";

  //   const templateParams = {
  //     formule: informations.formule,
  //     name: informations.name,
  //     firstname: informations.firstname,
  //     tel: informations.tel,
  //     email: informations.email,
  //     surface: informations.surface,
  //     postalCode: informations.postalCode,
  //     message: informations.message,
  //   };

  //   const sendEmail = () => {
  //     emailjs
  //       .send(serviceId, templateId, templateParams, plublicKey)
  //       .then((reponse) => {
  //         if (
  //           informations.surface !== "" &&
  //           informations.message !== "" &&
  //           informations.name !== "" &&
  //           informations.firstname !== "" &&
  //           informations.tel !== "" &&
  //           informations.email !== "" &&
  //           informations.postalCode !== ""
  //         ) {
  //           console.log(reponse);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   if (
  //     informations.surface !== "" &&
  //     informations.message !== "" &&
  //     informations.name !== "" &&
  //     informations.firstname !== "" &&
  //     informations.tel !== "" &&
  //     informations.email !== "" &&
  //     informations.postalCode !== ""
  //   ) {
  //     clearFields();
  //     setError(false);
  //     refreshMessage();
  //     setmessageOff(true);
  //     sendEmail();
  //   } else {
  //     setError(true);
  //     setmessageOff(true);
  //   }
  // };

  return (
    <div className="formulaire">
      <form onSubmit={(e) => sendEmail(e)}>
        <span
          className="message"
          style={{
            opacity: messageOff ? 1 : 0,
            color: error ? "#e90505" : "#07a726",
          }}
        >
          {error ? ErrorMsg : SuccesMsg}
        </span>
        <div className="middle">
          <Formules
            informations={informations}
            setInformations={setInformations}
          />
          <Nom informations={informations} setInformations={setInformations} />
          <Prenom
            informations={informations}
            setInformations={setInformations}
          />

          <Surface
            informations={informations}
            setInformations={setInformations}
          />
          <Telephone
            informations={informations}
            setInformations={setInformations}
          />
          <Mail informations={informations} setInformations={setInformations} />
          <CodePostal
            informations={informations}
            setInformations={setInformations}
          />
          <Message
            informations={informations}
            setInformations={setInformations}
          />
        </div>
        <button type="submit">
          <div className="container">
            <p>Envoyer</p>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </button>
      </form>
    </div>
  );
}

function Formules({ informations, setInformations }) {
  return (
    <div>
      <label htmlFor="formule">
        Choisir une <a href="#formules">formule</a>
      </label>

      <select
        value={informations.formule}
        onChange={(e) =>
          setInformations((prec) => ({ ...prec, formule: e.target.value }))
        }
        id="formule"
      >
        {FormulesData.map((formule, i) => {
          return (
            <option key={i} value={formule.name}>
              {formule.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

function Nom({ informations, setInformations }) {
  return (
    <div>
      <label htmlFor="name">Nom</label>
      <input
        placeholder="Votre Nom"
        autoComplete="off"
        value={informations.name}
        onChange={(e) =>
          setInformations((prec) => ({ ...prec, name: e.target.value }))
        }
        type="text"
        id="name"
      />
    </div>
  );
}

function Prenom({ informations, setInformations }) {
  return (
    <div>
      <label htmlFor="firstName">Prénom</label>
      <input
        placeholder="Votre Prénom"
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
  );
}

function Surface({ informations, setInformations }) {
  return (
    <div>
      <label htmlFor="surface">Surface</label>
      <input
        placeholder="La Surface en m²"
        autoComplete="off"
        value={informations.surface}
        onChange={(e) =>
          setInformations((prec) => ({
            ...prec,
            surface: e.target.value,
          }))
        }
        type="text"
        id="surface"
      />
    </div>
  );
}

function Telephone({ informations, setInformations }) {
  return (
    <div>
      <label htmlFor="tel">Tel.</label>
      <input
        placeholder="Votre Téléphone"
        maxLength={10}
        autoComplete="off"
        value={informations.tel}
        onChange={(e) =>
          setInformations((prec) => ({ ...prec, tel: e.target.value }))
        }
        type="tel"
        id="tel"
      />
    </div>
  );
}

function Mail({ informations, setInformations }) {
  return (
    <div>
      <label htmlFor="mail">Email</label>
      <input
        placeholder="Votre Email"
        autoComplete="off"
        value={informations.email}
        onChange={(e) =>
          setInformations((prec) => ({
            ...prec,
            email: e.target.value,
          }))
        }
        type="email"
        id="mail"
      />
    </div>
  );
}

function CodePostal({ informations, setInformations }) {
  return (
    <div>
      <label htmlFor="postalCode">Code Postal</label>
      <input
        placeholder="Votre Code Postal"
        maxLength={5}
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
  );
}

function Message({ informations, setInformations }) {
  return (
    <div>
      <label htmlFor="msg">Message</label>
      <textarea
        autoComplete="off"
        placeholder="Décrivez votre projet"
        value={informations.message}
        onChange={(e) =>
          setInformations((prec) => ({
            ...prec,
            message: e.target.value,
          }))
        }
        id="msg"
      ></textarea>
    </div>
  );
}
