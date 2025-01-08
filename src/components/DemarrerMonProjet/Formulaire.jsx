import { useState, useRef } from "react";
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
  const [messageOff, setMessageOff] = useState(false);
  const form = useRef(); // Référence pour le formulaire

  const SuccesMsg = `Email envoyé`;
  const ErrorMsg = "Veuillez remplir tous les champs";

  const serviceId = "service_tjalamp"; // Votre Service ID
  const templateId = "template_mmgax0o"; // Votre Template ID
  const publicKey = "1D3G6tTYZEn1Zjd5H"; // Votre Public Key

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
      setMessageOff(false);
    }, 1500);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      informations.surface !== "" &&
      informations.message !== "" &&
      informations.name !== "" &&
      informations.firstname !== "" &&
      informations.tel !== "" &&
      informations.email !== "" &&
      informations.postalCode !== ""
    ) {
      emailjs
        .sendForm(serviceId, templateId, form.current, publicKey)
        .then((response) => {
          console.log("E-mail envoyé avec succès :", response.text);
          clearFields();
          setError(false);
          refreshMessage();
          setMessageOff(true);
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi :", error);
          setError(true);
          setMessageOff(true);
        });
    } else {
      setError(true);
      setMessageOff(true);
    }
  };

  return (
    <div className="formulaire">
      <form ref={form} onSubmit={sendEmail}>
        <div className="middle">
          <Formules informations={informations} setInformations={setInformations} />
          <Nom informations={informations} setInformations={setInformations} />
          <Prenom informations={informations} setInformations={setInformations} />
          <Surface informations={informations} setInformations={setInformations} />
          <Telephone informations={informations} setInformations={setInformations} />
          <Mail informations={informations} setInformations={setInformations} />
          <CodePostal informations={informations} setInformations={setInformations} />
          <Message informations={informations} setInformations={setInformations} />
        </div>
        <button type="submit">
          <div className="container">
            <p>Envoyer</p>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </button>
        {/* Message de confirmation placé ici sous le bouton */}
        <span
          className="message"
          style={{
            opacity: messageOff ? 1 : 0,
            color: error ? "#e90505" : "#07a726",
          }}
        >
          {error ? ErrorMsg : SuccesMsg}
        </span>
      </form>
    </div>
  );
}

function Formules({ informations, setInformations }) {
  return (
    <div>
      <label htmlFor="formule">Choisir une <a href="#formules">formule</a></label>
      <select
        name="formule" // Ajout du name
        value={informations.formule}
        onChange={(e) => setInformations((prec) => ({ ...prec, formule: e.target.value }))}
        id="formule"
      >
        {FormulesData.map((formule, i) => (
          <option key={i} value={formule.name}>{formule.name}</option>
        ))}
      </select>
    </div>
  );
}

function Nom({ informations, setInformations }) {
  return (
    <div>
      <label htmlFor="name">Nom</label>
      <input
        name="nom" // Ajout du name
        placeholder="Votre Nom"
        autoComplete="off"
        value={informations.name}
        onChange={(e) => setInformations((prec) => ({ ...prec, name: e.target.value }))}
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
        name="prenom" // Ajout du name
        placeholder="Votre Prénom"
        autoComplete="off"
        value={informations.firstname}
        onChange={(e) => setInformations((prec) => ({ ...prec, firstname: e.target.value }))}
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
        name="surface" // Ajout du name
        placeholder="La Surface en m²"
        autoComplete="off"
        value={informations.surface}
        onChange={(e) => setInformations((prec) => ({ ...prec, surface: e.target.value }))}
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
        name="telephone" // Ajout du name
        placeholder="Votre Téléphone"
        maxLength={10}
        autoComplete="off"
        value={informations.tel}
        onChange={(e) => setInformations((prec) => ({ ...prec, tel: e.target.value }))}
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
        name="email" // Ajout du name
        placeholder="Votre Email"
        autoComplete="off"
        value={informations.email}
        onChange={(e) => setInformations((prec) => ({ ...prec, email: e.target.value }))}
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
        name="code_postal" // Ajout du name
        placeholder="Votre Code Postal"
        maxLength={5}
        autoComplete="off"
        value={informations.postalCode}
        onChange={(e) => setInformations((prec) => ({ ...prec, postalCode: e.target.value }))}
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
        name="message" // Ajout du name
        autoComplete="off"
        placeholder="Décrivez votre projet"
        value={informations.message}
        onChange={(e) => setInformations((prec) => ({ ...prec, message: e.target.value }))}
        id="msg"
      ></textarea>
    </div>
  );
}
