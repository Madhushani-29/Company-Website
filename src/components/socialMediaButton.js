const SocialMediaButton = ({ icon, url }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <img
        src={icon}
        alt="Instagram"
        style={{ height: "42px", width: "42px" }}
      />
    </a>
  );
};

export default SocialMediaButton;
