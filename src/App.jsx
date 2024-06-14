import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import "bootstrap/dist/css/bootstrap.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";
import { Card } from "./components/Card";
import { ParallaxBackground } from "./components/ParallaxBackGround";

import LightBalloon from "./assets/LightBalloon.png";
import GrayBalloon from "./assets/GrayBalloon.png"
import HappyBirthday from "./assets/HappyBirthday.png"
import CuteReimu from "./assets/CuteReimu.png";
import CuterReimu from "./assets/EvenCuterReimu.png";
import Hug from "./assets/m200Hug.png"

import JackAvatar from "./avatars/Jack.webp"
import FlameAvatar from "./avatars/Flame.webp"
import KaiyaAvatar from "./avatars/Kaiya.webp"
import NekoAvatar from "./avatars/Neko.webp"
import MewoAvatar from "./avatars/Mewo.webp"
import StomAvatar from "./avatars/Stom.webp"
import AsaninAvatar from "./avatars/Asanin.webp"
import LolAvatar from "./avatars/Lol.webp"
import MiyukiAvatar from "./avatars/Miyuki.webp"
import CharAvatar from "./avatars/Char.webp"

import FlameScreenshot from "./screenshots/FlameScreenshot.png"
import KaiyaScreenShot from "./screenshots/KaiyaScreenshot.png"
function App() {

  const url = (name, wrap = false) =>
    `${
      wrap ? "url(" : ""
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
      wrap ? ")" : ""
    }`;
  
  const src1 =LightBalloon;
  const src2 =GrayBalloon;
  const alignCenter = { display: "flex", alignItems: "center" };

  const italicTextStyle = {
    fontFamily: "Comic Neue",
    fontSize: "1.6rem",
    lineHeight: "1.4",
    color: "#fff",
  };
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });

  const bgLayers = [
    { offset: 0, backgroundColor: "#454fd6" },
    { offset: 3, backgroundColor: "#4d44bc" },
    { offset: 6, backgroundColor: "#5e2d88" },
    { offset: 9, backgroundColor: "#6f1754" },
    { offset: 12, backgroundColor: "#780c3a" },
    { offset: 15, backgroundColor: "#800c2f" },
    { offset: 18, backgroundColor: "#901525" },
    { offset: 21, backgroundColor: "#982027" },
    { offset: 24, backgroundColor: "#a02a29" },
    { offset: 27, backgroundColor: "#b03f2d" },
  ];
  return (
    <div onClick={() => toggle(!state)}>
      <Parallax pages={30}>
        {bgLayers.map((layer, index) => (
          <ParallaxBackground
            key={index}
            offset={layer.offset}
            factor={3}
            backgroundColor={layer.backgroundColor}
          />
        ))}

        <ParallaxLayer
          offset={0}
          speed={0.15}
          factor={8}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={5}
          speed={0.15}
          factor={8}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={10}
          speed={0.15}
          factor={8}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={15}
          speed={0.15}
          factor={8}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={20}
          speed={0.15}
          factor={8}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={25}
          speed={0.15}
          factor={8}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={15}
          speed={0.15}
          style={{ justifyContent: "center", opacity: 0.4 }}
        >
          {" "}
          <img src={url("cloud")} style={{ display: "block", width: "20%" }} />
          <img src={url("cloud")} style={{ display: "block", width: "10%" }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={21.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={25.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <animated.div
            className={styles.text}
            style={{
              opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
              scale: x.to({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              }),
            }}
          >
            <img
              src={HappyBirthday}
              width="500"
              className="rounded-5 mb-4 mb-lg-0 shadow-2"
            />
          </animated.div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 1, end: 2 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <Card
            message={"Happy birthday! I hope I can join your religion as a member and not a sacrifice 😔 Since we’re still getting to know each other, here's a fun fact about me.. I suck at coming up with birthday messages c:"}
            name={"Jack"}
            kaiyaStyle={italicTextStyle}
            image_link={JackAvatar}
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 4, end: 5 }}
          style={{
            ...alignCenter,
            justifyContent: "flex-end",
          }}
        >
          <Card
            message={
              "Another year to the our lord and savior, wish u good health, stronk income, discover more sauce than ur past self. :3 "
            }
            name={"FlameOnMe"}
            kaiyaStyle={italicTextStyle}
            image_link={
              FlameAvatar
            }
          />
        </ParallaxLayer>
        <ParallaxLayer
          onClick={() => { window.location.href = "https://bit.ly/ubiburthday24" }}
          sticky={{ start: 7, end: 8 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
          clas
        >
          <Card
            message={"hehe hbd hehe..(btw this is not kaiya speaking but there is an easter egg here find it uwu)"}
            name={"Kaiya"}
            kaiyaStyle={italicTextStyle}
            image_link={
              KaiyaAvatar
            }
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 10, end: 11 }}
          style={{
            ...alignCenter,
            justifyContent: "flex-end",
          }}
        >
          <Card
            message={"Happy birthday m200!!! I hope you're doing well and that life is treating as well as you've always treated everyone, and even if we don't talk much anymore I'll always think of you as one of the best friends I've ever had so I wish you a happy birthday and a happy life!"}
            name={"Neko"}
            kaiyaStyle={italicTextStyle}
            image_link={
              NekoAvatar
            }
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 13, end: 14 }}
          style={{
            ...alignCenter,
            justifyContent: "flex-start",
          }}
        >
          <Card
            message={"M2, your birthday is today,And it's in June not in May.But why we celebrating this holy event?It is because you are worth more than just a Cent.Oh Lord, you are the kindest person I know,Always caring and trying to help,And welp,You just have this very special glow.M2,We love you.\nHappy birthday."}
            name={"Mewo"}
            kaiyaStyle={italicTextStyle}
            image_link={
              MewoAvatar
            }
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 16, end: 17 }}
          style={{
            ...alignCenter,
            justifyContent: "flex-end",
          }}
        >
          <Card
            message={
              "happy birfday to you my beloved lord, i hope you have an amazing day and dont inhale too much volcanic ash"
            }
            name={"Stompral"}
            kaiyaStyle={italicTextStyle}
            image_link={
              StomAvatar
            }
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 19, end: 20 }}
          style={{
            ...alignCenter,
            justifyContent: "flex-start",
          }}
        >
          <Card
            message={"Happy Birthday, I hope you have many more years and win the 50/50 on gachas."}
            name={"Asanin"}
            kaiyaStyle={italicTextStyle}
            image_link={
              AsaninAvatar
            }
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 22, end: 23 }}
          style={{
            ...alignCenter,
            justifyContent: "flex-end",
          }}
        >
          <Card
            message={
              "Dear M2, ty for being my editor sla- i mean ty for being such an awesome friend. Ik we haven’t interacted as much this year but you are still as chill and as cool as i remember you to be.ty for always helping me edit my photos without any hesitation and HAPPY BDAY M2!!!"
            }
            name={"Lol3270"}
            kaiyaStyle={italicTextStyle}
            image_link={
              LolAvatar
            }
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 25, end: 26 }}
          style={{
            ...alignCenter,
            justifyContent: "flex-start",
          }}
        >
          <Card
            message={"Happy birthday my friend, i'm hoping for you to have a great year, being healthy and blessed with sustenance in any way shape of form. It's a shame that I'm not as active as before but seeing you in the server having conversation with others made me happy. Hopefully we can catch up to each other soon enough, anyway, happy birthday again mate."}
            name={"Miyuki"}
            kaiyaStyle={italicTextStyle}
            image_link={
              MiyukiAvatar
            }
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 28, end: 29 }}
          style={{
            ...alignCenter,
            justifyContent: "flex-end",
          }}
        >
          <Card
            message={"thanks for everything uwu"}
            name={"monke"}
            kaiyaStyle={italicTextStyle}
            image_link={
              CharAvatar
            }
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.5}
          speed={0.2}
          style={{
            ...alignCenter,
            justifyContent: "flex-start",
            marginLeft: "10%",
       
          }}
        >
          <img
            src={FlameScreenshot}
            className="d-none d-lg-block w-30 rounded-5 mb-4 mb-lg-0 shadow-2"
            
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={7.5}
          speed={0.2}
          style={{
            ...alignCenter,
            justifyContent: "flex-start",
            marginLeft: "60%",
          }}
        >
          <img
            src={KaiyaScreenShot}
            className="d-none d-lg-block rounded-5 w-30 mb-4 mb-lg-0 shadow-2"
          />
      </ParallaxLayer>
       
        <ParallaxLayer
          offset={0.4}
          speed={0.5}
          style={{
            ...alignCenter,
            justifyContent: "flex-start",
            marginLeft: "70%",
          }}
        >
          <img
            src={src2}
            width="200"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={29.2}
          style={{
            ...alignCenter,
            justifyContent: "flex-start",
            marginLeft: "20%",
          }}
        >
          <img
            src={Hug}
            width="140"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.5}
          speed={0.9}
          style={{
            justifyContent: "flex-start",
            marginLeft: "55%",
          }}
        >
          <img src={src1} width="80" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={10.3}
          speed={0.6}
          style={{
            justifyContent: "flex-start",
            marginLeft: "80%",
          }}
        >
          <img src={src2} width="65" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={7.8}
          speed={1.3}
          style={{
            justifyContent: "flex-start",
            marginLeft: "40%",
          }}
        >
          <img src={src1} width="50" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={15.0}
          speed={0.4}
          style={{
            justifyContent: "flex-start",
            marginLeft: "60%",
          }}
        >
          <img src={src2} width="70" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.6}
          speed={0.8}
          style={{
            justifyContent: "flex-start",
            marginLeft: "20%",
          }}
        >
          <img src={src1} width="90" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={11.2}
          speed={1.1}
          style={{
            justifyContent: "flex-start",
            marginLeft: "75%",
          }}
        >
          <img src={src2} width="45" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={9.4}
          speed={0.5}
          style={{
            justifyContent: "flex-start",
            marginLeft: "30%",
          }}
        >
          <img src={src1} width="60" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={14.7}
          speed={1.4}
          style={{
            justifyContent: "flex-start",
            marginLeft: "50%",
          }}
        >
          <img src={src2} width="95" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={5.9}
          speed={0.3}
          style={{
            justifyContent: "flex-start",
            marginLeft: "25%",
          }}
        >
          <img src={src1} width="55" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={18.2}
          speed={0.7}
          style={{
            justifyContent: "flex-start",
            marginLeft: "45%",
          }}
        >
          <img src={src2} width="85" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={12.5}
          speed={1.1}
          style={{
            justifyContent: "flex-start",
            marginLeft: "40%",
          }}
        >
          <img src={src1} width="75" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={6.3}
          speed={0.5}
          style={{
            justifyContent: "flex-start",
            marginLeft: "70%",
          }}
        >
          <img src={src2} width="100" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3.8}
          speed={0.7}
          style={{
            justifyContent: "flex-start",
            marginLeft: "25%",
          }}
        >
          <img src={src1} width="40" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={17.1}
          speed={0.4}
          style={{
            justifyContent: "flex-start",
            marginLeft: "50%",
          }}
        >
          <img src={src2} width="30" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={9.5}
          speed={1.2}
          style={{
            justifyContent: "flex-start",
            marginLeft: "60%",
          }}
        >
          <img src={src1} width="20" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.7}
          speed={0.8}
          style={{
            justifyContent: "flex-start",
            marginLeft: "30%",
          }}
        >
          <img src={src2} width="50" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={13.2}
          speed={0.3}
          style={{
            justifyContent: "flex-start",
            marginLeft: "55%",
          }}
        >
          <img src={src1} width="35" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={8.9}
          speed={1.5}
          style={{
            justifyContent: "flex-start",
            marginLeft: "20%",
          }}
        >
          <img src={src2} width="25" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.1}
          speed={1.6}
          style={{
            justifyContent: "flex-start",
            marginLeft: "45%",
          }}
        >
          <img src={src1} width="15" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={15.4}
          speed={1.0}
          style={{
            justifyContent: "flex-start",
            marginLeft: "75%",
          }}
        >
          <img src={src2} width="60" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.9}
          speed={1.2}
          style={{
            justifyContent: "flex-start",
            marginLeft: "30%",
          }}
        >
          <img src={src2} width="35" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.5}
          style={{
            justifyContent: "flex-start",
            marginLeft: "70%",
          }}
        >
          <img src={src1} width="90" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.6}
          speed={0.9}
          style={{
            justifyContent: "flex-start",
            marginLeft: "40%",
          }}
        >
          <img src={src2} width="80" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.1}
          speed={0.2}
          style={{
            justifyContent: "flex-start",
            marginLeft: "10%",
          }}
        >
          <img src={src2} width="75" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.6}
          speed={1.4}
          style={{
            justifyContent: "flex-start",
            marginLeft: "18%",
          }}
        >
          <img src={src1} width="95" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.3}
          style={{

            ...alignCenter,
            justifyContent: "flex-end",
          }}
        >
          <img
            src={CuterReimu}
            width="170"
            className="me-5 p-3"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={6.4}
          speed={0.9}
          style={{
            justifyContent: "flex-start",
            marginLeft: "18%",
          }}
        >
          <img
            src={CuteReimu}
            width="150"
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
