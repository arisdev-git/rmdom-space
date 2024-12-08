const RandomGif = ({ gif, className }) => {
  return (
    <div className={className}>
      <img src={gif} alt="Random GIF" />
    </div>
  );
};

export default RandomGif;
