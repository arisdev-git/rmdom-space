const RandomGif = ({ gif, className }) => {
  return (
    <img
      src={gif}
      alt="Random GIF"
      className={className}
      style={{
        width: '140%', 
        height: 'auto', 
      }}
    />
  );
};

export default RandomGif;