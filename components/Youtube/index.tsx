const Youtube = ({ videoId }: { videoId: string }) => {
  return (
    <iframe
      id="ytplayer"
      typeof="text/html"
      className="aspect-video w-full"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
    />
  );
};

export default Youtube;
