import "../styles/banner.css";

export default function Banner({
  title,
  subtitle,
  buttonText = "Learn more",
  image
}) {
  return (
    <div className="banner">

      <div className="banner-left">
        <h1>{title}</h1>
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
