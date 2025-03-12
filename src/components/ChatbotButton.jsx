import { useState } from "react";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chatbot-container">
      {/* Bouton d'ouverture du chatbot */}
      <button className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
        <IoChatbubbleEllipsesSharp size={30} />
      </button>

      {/* Fenêtre du chatbot (s'affiche seulement si isOpen est true) */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Assistant Virtuel</span>
            <button onClick={() => setIsOpen(false)}>❌</button>
          </div>
          <div className="chatbot-body">
            <p>Bonjour ! Comment puis-je vous aider ?</p>
          </div>
        </div>
      )}
    </div>
  );
}
