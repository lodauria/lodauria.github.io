/* IoT Individual Project Post*/
function IoTInd() {
  return (
    <div className="post-container">
      <h1>Internet of Things Individual Project</h1>
      <p>Completed in July 2021</p>

      <a href="https://github.com/lodauria/IoT_Individual_Project">
        View on GitHub
      </a>
      <a href="https://youtu.be/HOkv7nlomJc">YouTube video demo</a>

      <h2>Description</h2>

      <p>
        During the Internet of Things course I have realized as individual
        assignment a complete IoT system.
      </p>

      <p>
        The IoT system developed is based on the idea of making university rooms
        smarter. By monitoring the light condition and time at which the rooms
        projectors are used is possible to automatically adjust the curtains and
        the lights so to reduce energy waste and provide students the best
        possible rooms conditions.
      </p>

      <p>
        The device software has been developed using RIOT-OS and C++ scripts,
        while the cloud components were developed using Python scripts
        integrated in AWS Cloud.
      </p>

      <p>
        Even if the system was quite small, the simple prototype worked as
        expected.
      </p>
    </div>
  );
}

/*  IoT Group Project Post*/
function IoTGroup() {
  return (
    <div className="post-container">
      <h1>Internet of Things Group Project</h1>
      <p>Completed in July 2021</p>

      <a href="https://github.com/lodauria/IoT_Group_Project">View on GitHub</a>
      <a href="https://youtu.be/_4xa47vLS9I">YouTube video demo</a>

      <h2>Description</h2>

      <p>
        As final evaluation for the Internet of Things course we were divided in
        group of three to develop an IoT system in the context of Blue Growth.
      </p>

      <p>
        During summer touristic marinas are full of amateur sailors that
        reserved a docking spot for spending the night. Since in many cases
        these people don't know well the place, reaching the correct docking
        spot in the marina can be stressful and dangerous given the big traffic.
        The IoT system proposed uses an automatic boat identification method and
        some LCD screens to generate easily readable specific signage for each
        boat entering the marina.
      </p>

      <p>
        The devices software have been developed using RIOT-OS and C++ scripts,
        while the cloud components were developed using Python scripts
        integrated in AWS Cloud. STM32 Nucleo boards have been used as devices
        together with a Raspberry Pi for the camera device.
      </p>

      <p>
        The final system prototype required several hours of work but achieved
        amazing results considering that it was developed from scratch by three
        people.
      </p>
    </div>
  );
}

/* Robohand Post*/
function Robohand() {
  return (
    <div className="post-container">
      <h1>Interactive Graphics group project</h1>
      <p>Developed in July 2020</p>

      <a href="https://github.com/lodauria/IG_Project_Robohand">
        View on GitHub
      </a>
      <a href="https://lodauria.github.io/IG_Project_Robohand/robohand.html">
        Demo web page
      </a>

      <h2>Description</h2>

      <p>
        As final project for the Interactive Graphics course we were asked to
        develop in groups of two a web interface of our choice.
      </p>

      <p>
        We decided to develop the Robohand web interface. Robohand is a simple
        graphic interface that allows the user to configure a custom robotic end
        effector, starting from humanoid hand or robotic hand. The user can
        change the number of fingers and phalanxes, alter the length of fingers,
        change the materials or select an existing preset. The user experience
        is enhanced with sounds and animations.
      </p>

      <p>
        In this project we used standard WebGL together with two libraries
        (MVnew.js and InitShaders.js) taken from the textbook examples.
      </p>

      <p>
        The final result was elegant and functional, it had well satisfied all
        the requirements.
      </p>

      <img
        src="https://github.com/lodauria/IG_Project_Robohand/raw/main/webpage_screen.png"
        alt="not found"
      ></img>
    </div>
  );
}

/* AudioSpeedUp Post*/
function AudioSpeedUp() {
  return (
    <div className="post-container">
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
    </div>
  );
}

/* IRCar Post*/
function IRCar() {
  return (
    <div className="post-container">
      <h1>Lego car controlled with IR</h1>
      <p>Developed in March 2018</p>

      <a href="https://github.com/lodauria/IRCar_Lego_Arduino">
        View on GitHub
      </a>
      <a href="https://youtu.be/qfQm9lA7alI">YouTube tutorial</a>

      <h2>Description</h2>

      <p>
        As optional project for the Reti Logiche course we were asked to create
        an electronic system using Arduino.
      </p>

      <p>
        In a group of two we created with Legos a remote controlled car that
        uses an Arduino Uno board to control the electronic components, in
        particular a DC motor, a servomotor and a IR receiver. The remote
        control is performed using a Wii Nunchuk connected to another Arduino
        Uno that communicates with the car through an infrared LED. The main
        feature is that to control the car it can be used ether the joystick or
        the accelerometers of the Wii Nunchuk.
      </p>

      <p>
        For the realization of the Lego car the help of another friend was
        precious. After designing the prototype we sketched the whole model
        inside Lego Digital Designer so to generate the Lego instructions. Since
        we used Arduino Uno boards all the code was written using the Arduino
        IDE with an external IR library.
      </p>

      <p>
        The final result was not only functional, but also it was also very good
        looking. For this reason we decided to create a video tutorial to allow
        others to build their own IR-controlled Lego car.
      </p>

      <img
        src="https://github.com/lodauria/IRCar_Lego_Arduino/raw/master/image.jpg"
        alt="not found"
      ></img>
    </div>
  );
}

/* Post not found message*/
function NotFound() {
  return (
    <div className="post-container">
      <h3>The post selected does not exist</h3>
    </div>
  );
}

/* Function to select the post from the postName key*/
function SelectPost(postName: string) {
  var Post;

  switch (postName) {
    case "IoT_Individual_Project":
      Post = IoTInd;
      break;

    case "IoT_Group_Project":
      Post = IoTGroup;
      break;

    case "IG_Project_Robohand":
      Post = Robohand;
      break;

    case "AudioSpeedUp":
      Post = AudioSpeedUp;
      break;

    case "IRCar_Lego_Arduino":
      Post = IRCar;
      break;

    default:
      Post = NotFound;
      break;
  }

  return Post();
}

export default SelectPost;
