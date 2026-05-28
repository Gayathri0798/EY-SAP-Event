import "../styles/banner.css";

export default function Banner({
  title,
  subtitle,
  heading,
  buttonText,
  image
}) {
  return (
    <div className="banner">

      <div className="banner-left">
        <h1>{title}</h1>
        <div className="banner-heading">{heading}</div>
        <p>{subtitle}</p>

        <button className="banner-btn">
          {buttonText}
        </button>
      </div>

      <div className="banner-right">
        <img src={image} alt="banner visual" />
      </div>

    </div>
  );
}
