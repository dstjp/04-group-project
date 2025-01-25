export const Icon = ({onClick, type, url, alt}) => {
  return (
    <button onClick={onClick} type={type}>
      <img src={url} alt={alt} />
    </button>
  );
};
