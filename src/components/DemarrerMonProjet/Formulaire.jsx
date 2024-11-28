import { useState } from "react";
import emailjs from "@emailjs/browser";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  const SuccesMsg = `Email envoyé`;
  const ErrorMsg = "Veuillez remplir tout les champs";

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

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   const serviceId = "service_s2gudpp";
  //   const templateId = "template_vj885kk";
  //   const plublicKey = "Ivv9VH-K6JIKana-R";

  //   const templateParams = {
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

  const titleSection = "Démarrer mon projet";

  return (
    <div className="formulaire">
      <form onSubmit={(e) => sendEmail(e)}>
        <div className="title">
          <span>Travaillons ensemble.</span>
          <div className="titleSection">
            {titleSection.split(" ").map((word, i) => {
              return <h2 key={i}>{word}</h2>;
            })}
          </div>
        </div>
        <span
          className="message"
          style={{
            opacity: messageOff ? 1 : 0,
            color: error ? "#ff0000" : "#43d35f8c",
          }}
        >
          {error ? ErrorMsg : SuccesMsg}
        </span>
        <div className="middle">
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
          <p>Envoyer</p>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </form>
    </div>
  );
}

function Nom({ informations, setInformations }) {
  return (
    <div>
      <label htmlFor="name">
        Nom <span>*</span>{" "}
      </label>
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
      <label htmlFor="firstName">
        Prénom <span>*</span>{" "}
      </label>
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
      <label htmlFor="surface">
        Surface <span>*</span>{" "}
      </label>
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
      <label htmlFor="tel">
        Tel. <span>*</span>{" "}
      </label>
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
      <label htmlFor="mail">
        Email <span>*</span>
      </label>
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
      <label htmlFor="postalCode">
        Code Postal <span>*</span>{" "}
      </label>
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
      <label htmlFor="msg">
        Message <span>*</span>{" "}
      </label>
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
