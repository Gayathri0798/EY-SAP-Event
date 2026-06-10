import "../styles/banner.css";

export default function Banner({
  title,
  subtitle,
  heading,
  buttonText, 
  onButtonClick
}) {
  return (
   <div className="banner">

  {/* IMAGE */}
  <div className="banner-bg"></div>

  {/* DARK OVERLAY */}
  <div className="banner-overlay"></div>

  {/* CONTENT */}
  <div className="banner-content">
    <h1>{title}</h1>
    <div className="banner-heading">{heading}</div>
    <p>{subtitle}</p>
    

{buttonText && (
          <button className="banner-cta" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}


  </div>

</div>
  );
}
