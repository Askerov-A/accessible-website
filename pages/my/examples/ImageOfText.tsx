export default function ImageOfText() {
  return (
    <div>
      <div>
        <h5>Bad</h5>
        <img src="/image_with_text.jpg" alt="" />
      </div>

      <div>
        <h5>Good</h5>
        <img
          src="/image_without_text.png"
          alt="Sean Bean‘s Lord of the Rings speech is plastered all over the internet."
        />
      </div>
    </div>
  );
}
