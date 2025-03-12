import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div id="contactPage" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">CONTACTEZ-NOUS</h1>
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <p className="text-lg text-gray-700 mb-4">TElEPHONE : <a href="tel:+33123456789" className="text-blue-500 hover:underline">+33 7 81 16 56 22</a></p>
        <p className="text-lg text-gray-700">EMAIL : <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">cheyssoiparis@gmail.com</a></p>
      </div>
      
    </div>
  );
}
