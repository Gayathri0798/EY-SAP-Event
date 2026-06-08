import "../styles/chatbot.css";

export default function ChatbotIcon() {
  return (
    <div className="chatbot-btn" onClick={() => window.open("https://pulse-chatbot-ui.cfapps.eu10-004.hana.ondemand.com/", "_blank")}>
      <img src="/images/chatbot.png" alt="Chatbot Icon" className="chatbot-icon" />
    </div>
  );
}
