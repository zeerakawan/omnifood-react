const Logo = ({ href, src, className, alt }) => {
  return (
    <a href={href}>
      <img src={src} className={className} alt={alt} />
    </a>
  );
};

export default Logo;
