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

  const [successMessage, setSuccessMessage] = useState(""); // Pour afficher un message de confirmation
  const [error, setError] = useState(false);
  const form = useRef();

  // Informations EmailJS
  const serviceId = "service_dh5nqhr"; // Remplacez par votre Service ID
  const templateIdFormulaire = "template_igtxnhb"; // Template ID pour recevoir les formulaires
  const templateIdRemerciement = "template_6ajp3yl"; // Template ID pour le remerciement
  const publicKey = "Lk2BmntWXLBiDTYpp"; // Clé publique

  // Validation de l'adresse email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Efface les champs après soumission
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

  // Envoie de l'email de remerciement au client
  const sendThankYouEmail = (clientEmail) => {
    emailjs
      .send(
        serviceId,
        templateIdRemerciement,
        {
          client_email: clientEmail, // Adresse email du client
        },
        publicKey
      )
      .then((response) => {
        console.log("Email de remerciement envoyé :", response.text);
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'email de remerciement :", error);
      });
  };

  // Envoie du formulaire
  const sendEmail = (e) => {
    e.preventDefault();

    if (!isValidEmail(informations.email)) {
      setSuccessMessage("Veuillez entrer une adresse email valide.");
      setError(true);
      setTimeout(() => setSuccessMessage(""), 3000);
      return;
    }

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
        .sendForm(serviceId, templateIdFormulaire, form.current, publicKey)
        .then((response) => {
          console.log("Formulaire envoyé :", response.text);

          // Envoie l'email de remerciement
          sendThankYouEmail(informations.email);

          setSuccessMessage("Votre formulaire a bien été soumis !");
          setError(false);
          clearFields();
          setTimeout(() => setSuccessMessage(""), 3000);
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi du formulaire :", error);
          setSuccessMessage("Une erreur s'est produite lors de l'envoi. Veuillez réessayer.");
          setError(true);
          setTimeout(() => setSuccessMessage(""), 3000);
        });
    } else {
      setSuccessMessage("Veuillez remplir tous les champs.");
      setError(true);
      setTimeout(() => setSuccessMessage(""), 3000);
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
            <p>ENVOYER</p>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </button>

        {successMessage && (
          <p
            style={{
              color: error ? "red" : "green",
              fontWeight: "bold",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
}

// Composants des champs
function Formules({ informations, setInformations }) {
  return (
    <div>
      <label htmlFor="formule">Formule</label>
      <select
        name="formule"
        value={informations.formule}
        onChange={(e) => setInformations((prec) => ({ ...prec, formule: e.target.value }))}
        id="formule"
      >
        {FormulesData.map((formule, i) => (
          <option key={i} value={formule.name}>
            {formule.name}
          </option>
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
        name="nom"
        placeholder="VOTRE NOM"
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
        name="prenom"
        placeholder="VOTRE PRÉNOM"
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
        name="surface"
        placeholder="SURFACE EN m²"
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
        name="telephone"
        placeholder="VOTRE NUMÉRO DE TÉLÉPHONE"
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
      <label htmlFor="email">Email</label>
      <input
        name="email"
        placeholder="VOTRE ADRESSE COURRIEL"
        value={informations.email}
        onChange={(e) => setInformations((prec) => ({ ...prec, email: e.target.value }))}
        type="email"
        id="email"
      />
    </div>
  );
}

function CodePostal({ informations, setInformations }) {
  return (
    <div>
      <label htmlFor="postalCode">Code Postal</label>
      <input
        name="code_postal"
        placeholder="VOTRE CODE POSTAL"
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
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        placeholder="DÉCRIVEZ VOTRE PROJET"
        value={informations.message}
        onChange={(e) => setInformations((prec) => ({ ...prec, message: e.target.value }))}
        id="message"
      ></textarea>
    </div>
  );
}
