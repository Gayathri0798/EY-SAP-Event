import "../styles/chatbot.css";

export default function ChatbotIcon() {
  return (
    <div className="chatbot-fab-wrapper" onClick={() => window.open("https://pulse-chatbot-ui.cfapps.eu10-004.hana.ondemand.com/", "_blank")}>
      <img src="/images/profile_sophie.png" height="60" width="60" alt="Chatbot Icon" className="chatbot-icon" />
    </div>
  );
}
