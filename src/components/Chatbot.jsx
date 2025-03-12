import { useState, useRef, useEffect } from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;


const faqList = [
  { question: "Quelles sont les formules disponibles ?", answer: "Nous proposons \"Chey\" (49€/m²) et \"Ssoi\" (69€/m²)." },
  { question: "Quels sont les délais pour un projet ?", answer: "Les projets prennent entre 4 et 8 semaines, selon leur complexité." },
  { question: "Comment puis-je contacter l'équipe ?", answer: "Vous pouvez nous contacter via la page 'Contact', par e-mail à cheyssoiparis@gmail.com ou par téléphone au +33 (0)7 81 16 56 22." },
  { question: "Puis-je voir des réalisations ?", answer: "Oui, consultez la section 'Galerie' pour voir nos projets." }
];

const systemPrompt = `
Tu es l'assistant du site Cheyssoi Paris. Tu connais parfaitement le site et ses services.
Tu peux répondre à toutes les questions sur :
- Les projets disponibles dans la galerie.
- Les formules proposées et leur prix.
- Les délais et matériaux utilisés.
- Comment contacter l'équipe.
- L'histoire et l'engagement du site.
- L'équipe de Cheyssoi Paris et ses membres.
- Détails des projets réalisés.
- Toute autre question en lien avec ce site.

Si une question ne concerne pas le site, dis simplement "Je ne peux répondre qu'aux questions liées à Cheyssoi Paris."

### Formules
Nous proposons deux formules :
- **CHEY** (49€/m²) : CONSEILS, ETUDE PERSONNALISÉE, ACCOMPAGNEMENT, PLANCHE D'AMBIANCES, PLANS 2D & 3D, PRÉSENTATION MATÉRIAUX, SHOPPING LIST, COFFRET LIVRÉ, LIEN AVEC ARTISANS.
- **SSOI** (69€/m²) : Inclut CHEY + GESTION DU CHANTIER.

### Engagements de Cheyssoi Paris
CHEYSSOI PARIS est un studio de design intérieur éthique et écoresponsable, réinventant les espaces en alliant élégance, durabilité et respect de l’environnement.

### Délais et Matériaux
Les projets prennent entre **4 et 8 semaines** selon leur complexité.
Matériaux utilisés : **bois certifié FSC, peintures écologiques, textile naturel**.

### L'équipe de Cheyssoi Paris
- **Tania** : Fondatrice, Designer d'Intérieur.
- **Hoang** : Designer d'Intérieur.
- **Huabing** : Designer d'Intérieur.
- **Gamze** : Designer d'Intérieur.
- **Supriya** : Designer d'Intérieur.
- **Mones** : Développement Web.
- **Scharly** : Développement Web.
- **Etienne** : Développement Commercial.
- **Valentina** : Développement Commercial.

### Projets réalisés
- **Projet Haussmann** : Suite résidentielle luxueuse et durable, inspirée par l'élégance intemporelle de la Place Vendôme. Design raffiné, bois certifié et textiles biologiques.
- **Projet Vosges** : Salon de co-living élégant et durable, favorisant la convivialité et le confort avec des matériaux recyclés et naturels.
- **Projet Montaigne** : Showroom de haute couture éco-responsable, combinant matériaux biosourcés et sophistication.
- **Projet Vendôme** : Espace de travail prestigieux dans un immeuble haussmannien, utilisant bois massif certifié et marbre écologique.

### Informations de contact
- **Page Contact** : Disponible sur le site.
- **E-mail** : cheyssoiparis@gmail.com
- **Téléphone** : +33 (0)7 81 16 56 22
`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Bonjour ! Comment puis-je vous aider ?" }
  ]);
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleFaqClick = (question, answer) => {
    const newMessages = [...messages, { sender: "user", text: question }, { sender: "bot", text: answer }];
    setMessages(newMessages);
  };

  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: systemPrompt },
            ...newMessages.slice(-5).map(msg => ({ role: msg.sender === "user" ? "user" : "assistant", content: msg.text })),
            { role: "user", content: userInput }
          ],
          max_tokens: 200,
        },
        {
          headers: {
            "Authorization": `Bearer ${OPENAI_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );

      const botResponse = response.data.choices[0].message.content;
      setMessages([...newMessages, { sender: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Erreur OpenAI :", error);
      setMessages([...newMessages, { sender: "bot", text: "Désolé, je n'ai pas compris votre demande." }]);
    }
  };

  return (
    <div className="chatbot-wrapper">
      {!isOpen && (
        <button className="chatbot-button" onClick={() => setIsOpen(true)}>💬</button>
      )}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            Assistant Virtuel
            <button className="close-btn" onClick={() => setIsOpen(false)}>❌</button>
          </div>
          <div className="chatbot-body" style={{ overflowY: "auto", maxHeight: "300px" }}>
            <div className="faq-section">
              <strong>Questions fréquentes :</strong>
              {faqList.map((faq, index) => (
                <button key={index} className="faq-button" onClick={() => handleFaqClick(faq.question, faq.answer)}>
                  {faq.question}
                </button>
              ))}
            </div>
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === "user" ? "user-message" : "bot-message"}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-footer">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Écrivez un message..."
            />
            <button onClick={sendMessage}>Envoyer</button>
          </div>
        </div>
      )}
    </div>
  );
}