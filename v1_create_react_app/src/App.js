import "./App.css";
import NavBar from "./components/navBar.jsx";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main";
import ProjectPage from "./components/projectPage";
import ErrorPage from "./components/errorPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/mh1-tutors"
          element={
            <ProjectPage
              title="MH1 Tutors"
              subheading="An online platform that is connecting students of all levels with grinds tutors."
              mainImage="images/projects/mh1-tutors.png"
              storageFolderName="mh1-tutors"
              tools="Typescript, React, NodeJS, AWS, Firebase, Stripe, Bootstrap, REST APIs, Git, GitHub, CI/CD, Full Stack Development, SEO, Entrepreneurship, Management, Marketing, Web Design"
              date="Still Ongoing"
              body={
                <>
                  <p style={{ fontSize: "16px" }}>
                    The longer I worked as a tutor, the more people would
                    recommend me to their friends and family. However, being
                    just a single human, there are only so many hours outside of
                    my internship/work or college that I can teach and help
                    students. I also had friends who were also grinds tutors in
                    various subjects, and sometimes if I didn't have any more
                    space to take on extra students, I would recommend them to
                    my friends, and vice versa. This is where the idea came
                    from.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    Initially, I did have a website hosted via Squarespace which
                    I used as advertising for my services and to sell notes for
                    a few extra bob here and there. I decided to try to add
                    “profiles” for my friends on here (with their approval of
                    course…), and started advertising them that way. It wasn't
                    getting thousands of people viewing it each day, however,
                    the interest was there, and I was able to connect my friends
                    with students who were interested in their tutoring service.
                    Unfortunately, Squarespace is not made for this type of
                    platform, and it was extremely tedious to set up someone's
                    profile. It also didn't allow tutors to login in to a
                    dashboard and edit their profile whenever they pleased. So,
                    I began brainstorming different options.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    There were many drag-and-drop options available on the
                    market, such as BubbleIO etc, or other options like
                    WordPress, however, I had never used these platforms before,
                    and to build something of quality required a large learning
                    curve. Given that I was just finished a{" "}
                    <i>Software Engineering</i> Internship, I thought why not
                    give it a try to make it myself? This way I was building
                    skills that I could use in my job in the future, and it also
                    gives a lot more flexibility and freedom for everything (and
                    there's no fixed monthly fee like on platforms such as
                    Bubble).
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    Before I wrote a line of code, much planning had to go into
                    it. I needed to know a basic design template of what the
                    platform will look like, I had to make flowcharts of how the
                    platform will work, database structure, the tech stack to be
                    used, and many more. On top of that, everything had to be
                    scaleable and should not require manual input from anyone
                    (unless replying to contact emails or fixing bugs/adding
                    features). I also wanted to make it so that tutors or
                    students would not have to constantly log in or use the
                    platform to see if anyone has contacted them for classes.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    The learning curve was immense, and even now (13th May
                    2023), where I would estimate to be about 60% done before a
                    full launch, I'm still learning every day. Whether that is
                    learning to use new hooks in React, finding out how to
                    perform a certain query for my database, optimising and
                    reducing costs with Firebase and AWS, implementing payments
                    via Stripe, and many more. This project has pushed me to
                    improve. Unlike other platforms that charge students
                    subscriptions and tutors commission, MH1 Tutors aims to
                    offer the most value, for the lowest price to every party
                    involved.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    I did not go through this project all by myself. One of my
                    friends who is also a Software Engineer joined me along the
                    journey to help me complete this project. This was a huge
                    boost, and again a new skill as we learned to use teamwork
                    via Agile Methods to be as efficient as possible in getting
                    the platform ready.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    If you made it to the end of this page, I would appreciate
                    it if you could share the platform with anyone you think
                    might be interested. The platform can be viewed from this
                    link:{" "}
                    <a
                      style={{ color: "#999999" }}
                      href="https://www.mh1-tutors.com"
                      target="_blank"
                      rel="noreferrer nofollow noopener"
                    >
                      MH1 Tutors Platform
                    </a>
                  </p>
                </>
              }
              private={true}
            />
          }
        />

        <Route
          path="/wordle"
          element={
            <ProjectPage
              title="Wordle"
              subheading="College Assignment for the 'Object Oriented Programming 1' module in
              DCU"
              mainImage="images/projects/wordle.png"
              storageFolderName="wordle"
              tools="Java, Java Swing"
              date="March 2022"
              body={
                <>
                  <p style={{ fontSize: "16px" }}>
                    This college assignment consisted of two sections. Firstly
                    it was required to create a function which takes in two
                    five-letter words as parameters. One is the guess while the
                    other is the correct word. The function then returns an
                    array of numbers ranging from 0-2. 0 means the letter in
                    that position is not in the word, 1 means it's in the word
                    but in a different position, while 2 means the letter is in
                    the correct position.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    For the second part it was required to make a Graphical User
                    Interface (GUI) which uses the function from before and a
                    Java dictionary class full of 5-letter words. The random
                    word is taken from this dictionary, while the guess is typed
                    into the application by the user. After inputting a 5-letter
                    word, the user presses enter and the app checks the inputted
                    word against the random word and displays the colours based
                    on the array returned by the function mentioned earlier. 0
                    is grey, 1 is yellow and 2 is green.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    At the end, the user can generate a new random word, and if
                    they didn't guess the previous word it will be displayed in
                    a pop up.
                  </p>
                </>
              }
              githubLink="https://github.com/adelin-diac/WORDLE"
            />
          }
        />
        <Route
          path="adelindiac-website"
          element={
            <ProjectPage
              title="Adelin Diac Personal Website"
              subheading="Personal Project"
              mainImage="images/projects/adelindiac-website.png"
              storageFolderName="adelin-website"
              tools="JavaScript, React.js, Bootstrap, Firebase"
              date="September 2022"
              private={true}
              body={
                <>
                  <p style={{ fontSize: "16px" }}>
                    I began this project so that I could practice and continue
                    my learning in Javascript, React and Bootstrap as well as
                    using a database to store files and display them on my
                    website. I prefer to learn by going straight into a project
                    and trying to complete it rather than following tutorials
                    online for projects which have been done many times before.
                    As well as learning a lot while doing the project, it also
                    offers a way for me to display the information on my CV,
                    such as experience and projects, in a more visual way.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    Firstly, I had to think of a layout and a design for how the
                    website should look, as this would allow me to concentrate
                    more on programming rather than designing. I got some
                    inspiration from online sources, and added some of my own
                    preferences and came up with a design.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    To really push myself, I tried to implement re-usable
                    components as much as I could in order to increase the
                    readability of my code and reduce the number of times the I
                    repeat code. I used the same component for each of the
                    project pages which allowed me to be more efficient with my
                    time spent programming.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    Another aim was to keep the page responsive to allow for it
                    to be viewed on mobile devices as well.
                  </p>
                </>
              }
              githubLink={null}
            />
          }
        />
        <Route
          path="pdf-app"
          element={
            <ProjectPage
              title="PDF App"
              subheading="Personal Project to help me with converting images to PDFs"
              mainImage="images/projects/pdf-app.png"
              storageFolderName="pdf-app"
              tools="Python - Tkinter"
              date="May 2022"
              body={
                <>
                  <p style={{ fontSize: "16px" }}>
                    As part of my tutor work thanks to{" "}
                    <a
                      href="https://www.mh1-tutors.com"
                      style={{ color: "#999999" }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      MH1 Tutors
                    </a>
                    , I got a lot of images from students asking me to correct
                    the questions they did and show where they went wrong and
                    how to better answer the questions. To do this I would add
                    the photos onto Notability (the app which I use for notes
                    etc. during the tutoring classes) and write on them.
                    Unfortunately, Notability did not work very well with photos
                    and it would be quite frustrating trying to do it this way.
                    I used to use online PDF converters, however this took
                    longer and sometimes it gave me a daily limit on how many
                    files I could convert. To overcome all these problems, I
                    decided to make my own PDF converter app and I chose to do
                    it with Python since it was a programming language I wanted
                    to learn. I wanted to make it a GUI application, so I
                    researched libraries available for GUI apps in Python and
                    went with Tkinter. I also added a “merging” ability to
                    combine more PDFs into one large file.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    For now, the files are saved into the project directory,
                    either in a folder called “merges” or “conversions”. On the
                    actual GUI, at the moment only the directory of each file is
                    displayed when adding files to be converted, however this
                    can be worked on to make it look nicer.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    The app is complete as far as being able to do what it
                    should. There are many other improvements which can be added
                    on to this app however I haven't really worked on this
                    project in a while.
                  </p>
                </>
              }
              githubLink="https://github.com/adelin-diac/PDF_app"
            />
          }
        />
        <Route
          path="arduino-roulette"
          element={
            <ProjectPage
              title="Arduino - Contactless Roulette"
              subheading="College Project for the 'Digital & Analogue Electronics 1' module in
              DCU"
              mainImage="images/projects/contactless-roulette2.png"
              storageFolderName="contactless-roulette"
              tools="Arduino Programming, Circuit Design"
              date="December 2021"
              body={
                <>
                  <p style={{ fontSize: "16px" }}>
                    Part of the EE223 (Digital and Analogue Electronics 1)
                    module, we had to wire up and program a few simple arduino
                    circuits. For the final part, we were told to use our
                    creativity and design a circuit of our choice. Since I had a
                    spare TCRT5000 sensor from before, I decided to implement
                    something with this since it allows for contactless use
                    (which was an essential during Covid). I first wired up the
                    circuit and ensured each LED worked when activating the
                    sensor. Once this was working, it was time to write the
                    code.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    In the code, the variable V2 represents the voltage across
                    the phototransistor in the TCRT5000 sensor. When something
                    was brought close to the sensor, the voltage would drop from
                    its initial value of 5V. I picked that once the voltage fell
                    below 3.5V, then the circuit would be activated, as anything
                    higher would cause the sensor to activate when it wasn't
                    intended to.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    As an extra to this, in my spare time I worked on a soldered
                    version of this circuit so I could practice my soldering
                    skills. This version can be seen in the images on this page.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    Upon completion, some of the improvements I've realised
                    could be made is that, firstly, there is no need for all the
                    resistors. I could have had just one resistor on the cathode
                    side of all resistors and it would have worked the same.
                    Some improvements could also be made to the code to make it
                    neater, and to make the circuit run smoother. For example,
                    the speed of the rotations could slow down as the circuit
                    gets closer and closer to showing the “winning” LED.
                  </p>
                </>
              }
              githubLink="https://github.com/adelin-diac/Arduino-Contactless-Roulette"
            />
          }
        />
        <Route
          path="cao-points-calculator"
          element={
            <ProjectPage
              title="Leaving Cert CAO Points Calculator"
              subheading="A Calculator for Leaving Cert Students to figure out how many CAO points they got in their exams"
              mainImage="images/projects/cao-points-calculator.png"
              storageFolderName="cao-points-calculator"
              tools="React, Firebase, Bootstrap, Responsive Design"
              date="January 2023"
              private={true}
              body={
                <>
                  <p style={{ fontSize: "16px" }}>
                    After a semester of Arduino, C++ and electronics, I wanted
                    to refresh my web development and ReactJS skills before
                    going on to work on some larger projects. My approach to
                    learning any sort of skill is to build projects that are
                    actually useful to myself and others. In this scenario, I
                    wanted something that was not incredibly complex, and could
                    be completed over a weekend, or in the evenings. My approach
                    to building React apps is to focus on re-usable components,
                    and writing clean and readable code, while not complicating
                    the file structure.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    The applcation is fully responsive so it can be viewed on
                    any device without affecting the user experience.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    This project can be viewed and tested by clicking on{" "}
                    <a
                      style={{ color: "#999999" }}
                      href="https://points.mh1-tutors.com"
                      target="_blank"
                      rel="noreferrer nofollow noopener"
                    >
                      this link
                    </a>
                    .
                  </p>
                </>
              }
            />
          }
        />
        <Route
          path="electronics"
          element={
            <ProjectPage
              title="2nd Year Electronics"
              subheading="For some of my college modules, we were required to construct various circuits as part of the labs"
              mainImage="images/projects/electronics-0-99-counter.jpg"
              storageFolderName="college-electronics"
              tools="C, PIC16F690, Circuit Design"
              date="April 2022"
              // private={false}
              body={
                <>
                  <h5
                    style={{
                      fontWeight: "bold",
                      color: "rgba(255,255,255,0.7)",
                      letterSpacing: "2px",
                    }}
                  >
                    Event Counter
                  </h5>
                  <p style={{ fontSize: "16px" }}>
                    The Event Counter circuit is composed of a PIC16F690 chip,
                    an Infrared LED and a Photodiode. The photodiode detects
                    whether there is still IR light coming from the LED or not,
                    and the chip was programmed so that if the diode no longer
                    detects IR light, it would trigger off the interrupt routine
                    of the chip, which increases the count of the events. This
                    number was then displayed on the two 7-segment displays.
                  </p>
                  <h5
                    style={{
                      fontWeight: "bold",
                      color: "rgba(255,255,255,0.7)",
                      letterSpacing: "2px",
                    }}
                  >
                    Temperature Display
                  </h5>
                  <p style={{ fontSize: "16px" }}>
                    The Temperature display circuit uses a PIC16F690 and a LM35
                    temperature sensor. The voltage reading on the middle pin of
                    the LM35 corresponded with a certain temperature. Each 10mV
                    is 1 degree Celsius. Tthe Analogue to Digital converter
                    ability of the PIC16F690 was used to turn the voltage into a
                    10-bit value between 0 and 1023 and then converted into the
                    temperature reading which was displayed on the two 7-segment
                    displays.
                  </p>
                  <h5
                    style={{
                      fontWeight: "bold",
                      color: "rgba(255,255,255,0.7)",
                      letterSpacing: "2px",
                    }}
                  >
                    LDR Light Level
                  </h5>
                  <p style={{ fontSize: "16px" }}>
                    The LDR Light Level circuit is a very simple one made using
                    an Arduino and a Light Dependent Resistor (LDR). The
                    resistance of the LDR changes depending on the light level
                    it detects. This resistance value is read by the Arduino
                    using one of its analogue pins and then a number between 0
                    and 9 was displayed on the 7-segment display. 9 means
                    maximum light level, while 0 means no light level. The red
                    and green LEDs were also used. They were lit up depending on
                    the light level detected by the LDR. (The brighter the room,
                    the brighter the green LED got and the red was the
                    opposite).
                  </p>
                  <h5
                    style={{
                      fontWeight: "bold",
                      color: "rgba(255,255,255,0.7)",
                      letterSpacing: "2px",
                    }}
                  >
                    Octal Counter
                  </h5>
                  <p style={{ fontSize: "16px" }}>
                    The final circuit that can be seen is in the video on this
                    page. It is an octal counter made using only logic gates.
                    This circuit shows the octal number on the two 7-segment
                    displays, but also shows the binary representation of the
                    number on the right display using the four LEDs in the
                    middle. This can be a little difficult to see in the video,
                    however if an LED is on it represents a 1, whereas if its
                    off, it represents a 0.
                  </p>
                </>
              }
              githubLink={null}
            />
          }
        />
        <Route
          path="/third-year-electronics"
          element={
            <ProjectPage
              title="3rd Year Electronics"
              subheading="As Part of the EE319 Module in College, we were required to complete 5 electronic tasks using an MSP432 microcontroller programmed using Arduino or C++"
              mainImage="images/projects/ee319-oscilloscope.png"
              storageFolderName="third-college-electronics"
              tools="Arduino, C++, MSP432P401R, Circuit Design, Motors, Analog Circuits, Transformers, Video Editing"
              date="December 2022"
              body={
                <>
                  <h5
                    style={{
                      fontWeight: "bold",
                      color: "rgba(255,255,255,0.7)",
                      letterSpacing: "2px",
                    }}
                  >
                    Task 1 - Inductor & Task 2 - Transfomer
                  </h5>
                  <p style={{ fontSize: "16px" }}>
                    In Task 1 we had to make an Inductor by wrapping copper wire
                    around a plastic casing, and putting the casing over a
                    Ferrite Core.
                    <br />
                    In Task 2, we had to make another one of these inductors on
                    the other side of the plastic casing to make a Transformer.
                    When you connect this to power, you see the amplitude of the
                    voltage change, as well as a slight phase shift between the
                    input and output voltage. Many calculations also had to be
                    done on this transformer.
                  </p>
                  <h5
                    style={{
                      fontWeight: "bold",
                      color: "rgba(255,255,255,0.7)",
                      letterSpacing: "2px",
                    }}
                  >
                    Task 3 - Oscilloscope
                  </h5>
                  <p style={{ fontSize: "16px" }}>
                    This task was composed of two sections. The first required
                    the use of hardware such as resistors and op-amps to scale,
                    shift and amplify the input voltage. This was to ensure the
                    voltage going into the microcontroller would not be too
                    high. The voltage was then read in using{" "}
                    <code style={{ color: "#999999" }}>analogRead()</code> on
                    the microcontroller, and displayed on the Serial Plotter to
                    be able to see the AC voltage wave.
                  </p>
                  <h5
                    style={{
                      fontWeight: "bold",
                      color: "rgba(255,255,255,0.7)",
                      letterSpacing: "2px",
                    }}
                  >
                    Task 4 - Motor Control
                  </h5>
                  <p style={{ fontSize: "16px" }}>
                    In task 4, we were required to build a circuit which would
                    control a brushless DC motor and allow us to take certain
                    measurements to calculate the efficiency of this motor. We
                    first had to build a test circuit and program our MSP
                    according to this. Once we were sure we had it correct, we
                    could connect it to a rig in college. My initial test
                    circuit, connected to a small motor I had can be seen at{" "}
                    <a
                      style={{ color: "#999999" }}
                      target="_blank"
                      rel="noreferrer"
                      href="https://drive.google.com/file/d/1WUFygrU7xUYwCwEiTcx8UAmTxyAldYPl/view?usp=sharing"
                    >
                      this link
                    </a>
                    . The motor was required to lift a small pan connected with
                    a string from the ground up a certain height, and then back
                    down to the ground. The MSP knew how far it has rotated with
                    the use of a rotary encoder which uses an IR sensor and a
                    gear which activates the sensor 12 times per rotation.
                  </p>
                  <h5
                    style={{
                      fontWeight: "bold",
                      color: "rgba(255,255,255,0.7)",
                      letterSpacing: "2px",
                    }}
                  >
                    Task 5 - AC Switching Circuit
                  </h5>
                  <p style={{ fontSize: "16px" }}>
                    Task 5 required to build and program a circuit which just
                    delays the time when an AC voltage is applied to a load.
                    This was done using a TRIAC to identify when the voltage is
                    at a zero-crossing and it would start a delay at that time,
                    then once delay was over, the voltage was apllied to the
                    load.
                  </p>
                  <h5
                    style={{
                      fontWeight: "bold",
                      color: "rgba(255,255,255,0.7)",
                      letterSpacing: "2px",
                    }}
                  >
                    Video Log
                  </h5>
                  <p style={{ fontSize: "16px" }}>
                    The final assignment for this module was to make a video of
                    us explaining each of the tasks completed in a way that
                    would be easy for aspiring Engineers to understand. It was a
                    cool little assignment however having to hear my own voice
                    on video was not enjoyable. The video can be seen at{" "}
                    <a
                      style={{ color: "#999999" }}
                      target="_blank"
                      rel="noreferrer"
                      href="https://drive.google.com/file/d/1r0PUsLUvJpacnmIAqFFqc0EKTmlPjR9l/view"
                    >
                      this link
                    </a>
                    .
                  </p>
                </>
              }
            />
          }
        />
        <Route
          path="/fireman"
          element={
            <ProjectPage
              title="Fireman Robot"
              subheading="College Project for the MM310 - Product Design. It consisted of designing & building a fully automatic mechanical/electrical robot that can climb a ladder on it's own."
              mainImage="images/projects/fireman.jpg"
              storageFolderName="fireman"
              tools="Team Work, Mechanical & Electrical Design, Solidworks"
              date="February 2023"
              body={
                <>
                  <p style={{ fontSize: "16px" }}>
                    This project was not related to software however there were
                    still many skills learned which are useful in a
                    business/workplace. Teamwork was a big skill learned in this
                    project as it was impossible for one person to do
                    everything. This required a lot planning and splitting of
                    tasks, which ties in with the second skill - Project
                    Management. As there were many deadlines in this module, a
                    carefully laid out plan was set out so that all team members
                    knew what they had to have done by certain dates. The main
                    way of managing this was via a Gantt Chart.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    This was a year long module, with the first semester being
                    the design phase, and second semster being the build phase.
                    During the design phase, I worked on the Solidworks (CAD)
                    simulation as well as designing the automation circuit for
                    the climbing mechanism. In the second semester, I worked on
                    building the electro-pneumatic circuit but I also helped on
                    the other sections of the project when required.
                  </p>
                </>
              }
            />
          }
        />
        <Route
          path="/mobile-robotics"
          element={
            <ProjectPage
              title="API Controlled AGV - Mobile Robotics"
              subheading="An AGV which follows a white line and makes API calls when at a checkpoint on the track. The API returns the next position it should go to"
              mainImage="images/projects/mobile-robotics.jpg"
              storageFolderName="mobile-robotics"
              tools="C++, Arduino, APIs, JavaScript, Node-Red, Electronics"
              date="March 2023"
              githubLink="https://github.com/adelin-diac/Automated-Guided-Robot"
              body={
                <>
                  <p style={{ fontSize: "16px" }}>
                    The aim of this project was to work as a team to construct
                    and programme a robot which would follow a white line, and
                    when it reached a checkpoint, it would call an API and send
                    it's current position. The API would then return where the
                    robot should go to next. The track is seen in the image
                    below.
                  </p>
                  <div className="row">
                    <p className="text-center my-3 col-lg-6 col-12">
                      <img
                        alt="track"
                        className="w-75"
                        style={{
                          backgroundColor: "white",
                          // width: "80%",
                          borderRadius: "20px",
                        }}
                        src="https://raw.githubusercontent.com/adelin-diac/Automated-Guided-Robot/master/Path.svg"
                      />
                    </p>
                    <div className="col-lg-6 col-12">
                      <p style={{ fontSize: "16px" }}>
                        The working robot can be seen going through a set route
                        at this{" "}
                        <a
                          style={{ color: "#999999" }}
                          href="https://drive.google.com/file/d/1KGv3Eds257ybBUceZlznLoX5PvUze4JV/view?usp=sharing"
                          target="_blank"
                          rel="noreferrer"
                        >
                          video link
                        </a>
                        . When the robot reaches a checkpoint, it stops and
                        makes the API call and continues it's route once it
                        receives a response with status code 200.
                      </p>
                    </div>
                  </div>
                  <p style={{ fontSize: "16px" }}>
                    One of the sections we were being marked on in this
                    assignment was the innovation. We were required to add
                    something "new" to the robot that would make it stand out
                    from the others. Our innovation was adding the ability to
                    control the robot remotely from a HTML page. We managed to
                    do this by having the microcontroller act as a server and we
                    would make GET requests to it. Depending on the URL of the
                    request, the robot would do certain movement. Our robot was
                    the only one being controlled this way. When testing this
                    functionality out, we placed a phone and recorded the
                    journey of the robot, which can be seen at{" "}
                    <a
                      style={{ color: "#999999" }}
                      href="https://drive.google.com/file/d/18VQWiTTH0rDuN1mG6IPgxtv_HQXViUE-/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      this link
                    </a>
                    . It can also be seen in the video on this page, alongside
                    other robots.
                  </p>
                  <p style={{ fontSize: "16px" }}>
                    You can read a more detailed documentation of the software,
                    and also see the code by visitng the GitHub link below.
                  </p>
                </>
              }
            />
          }
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
