export const Icon = ({onClick, type, url, alt, className}) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      <img src={url} alt={alt} />
    </button>
  );
};
