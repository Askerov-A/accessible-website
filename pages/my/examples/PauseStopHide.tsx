export default function PauseStopHide() {
  return (
    <>
      <h4>Good</h4>
      <video style={{ width: 200 }} controls>
        <source src="/video_with_puppy.mp4" type="video/mp4" />
      </video>
      <h4>Bad</h4>
      <video style={{ width: 200 }} autoPlay loop muted>
        <source type="video/mp4" src="/video_with_puppy.mp4" />
      </video>
    </>
  );
}
