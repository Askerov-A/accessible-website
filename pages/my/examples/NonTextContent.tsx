export default function NonTextContent() {
  return (
    <div>
      <h4>Media files</h4>

      <h5>Image</h5>
      <figure>
        <img src="/running_dog.webp" alt="It is a running dog" />
        <figcaption>The happy dog is running on grass</figcaption>
      </figure>

      <div>
        <h5>Video</h5>
        <video controls>
          <source src="/video_with_puppy.mp4" type="video/mp4" />
          <track
            src="/video_with_puppy_subtitles_en.vtt"
            kind="captions"
            srcLang="en"
            label="English"
          />
          Sorry, your browser doesn't support embedded videos.
        </video>

        <p>Puppy can't contain his excitement when owner comes home</p>
        <p>Watch how this Shibu Inu reacts when his owner comes home. Adorable!</p>
      </div>

      <h5>Video (YouTube)</h5>
      <figure>
        <iframe
          title="Watch how this Shibu Inu reacts when his owner comes home. Adorable!"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/byDZTO1aNkQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        <figcaption>Puppy can't contain his excitement when owner comes home</figcaption>
      </figure>

      <h5>Audio</h5>
      <div>
        <audio controls>
          <source src="count_from_1_to_4.mp3" type="audio/mpeg" />
          <track kind="captions" src="/count_from_1_to_4.vtt" srcLang="en" label="English" />
        </audio>
      </div>
    </div>
  );
}
