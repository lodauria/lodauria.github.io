/* AudioSpeedUp Post*/
function AudioSpeedUp() {
  return (
    <>
      <h1>Audio Speed Up Android app</h1>
      <p>Developed in April 2020</p>

      <a href="https://github.com/lodauria/AudioSpeedUp">View on GitHub</a>

      <h2>Description</h2>

      <p>
        During 2020 lockdown I have decided to develop a simple Android app
        based on the idea of a friend.
      </p>

      <p>
        Audio Speed Up is an app for reproducing at different speed various
        audio files. You simply have to select a sound to play, such as WhatsApp
        voice notes, and then choose Audio Speed Up from the share button. This
        app has been developed for helping people who are to busy for listening
        to slow voice notes.
      </p>

      <p>
        To develop this app I have used Android Studio for the first time, this
        gave me the opportunity to brush up my Java knowledge.
      </p>

      <p>
        For more than a year the app was available on PlayStore, but after the
        WhatsApp update I have decided to hide it. It has reached a total of
        almost 10.000 downloads if we consider also the GitHub releases, but
        what is most important is that I have learned a lot from this
        experience.
      </p>

      <img
        src="https://github.com/lodauria/AudioSpeedUp/raw/master/PlayStore/screen1.png"
        width="30%"
        alt="not found"
      />
      <img
        src="https://github.com/lodauria/AudioSpeedUp/raw/master/PlayStore/screen2.png"
        width="30%"
        alt="not found"
      />
      <img
        src="https://github.com/lodauria/AudioSpeedUp/raw/master/PlayStore/screen3.png"
        width="30%"
        alt="not found"
      />
    </>
  );
}

/* Robohand Post*/
function IG_Project_Robohand() {
  return (
    <>
      <h1>robohand</h1>
    </>
  );
}

/* Post not found message*/
function NotFound() {
  return (
    <>
      <h3>The post selected does not exist</h3>
    </>
  );
}

/* Function to select the post from the postName key*/
function SelectPost(postName: string) {
  var Post;

  switch (postName) {
    case "AudioSpeedUp":
      Post = AudioSpeedUp;
      break;

    case "IG_Project_Robohand":
      Post = IG_Project_Robohand;
      break;

    default:
      Post = NotFound;
      break;
  }

  return Post();
}

export default SelectPost;
