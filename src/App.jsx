import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

import "bootstrap/dist/css/bootstrap.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";
import { Card } from "./components/Card";
import { ParallaxBackground } from "./components/ParallaxBackGround";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

function App() {
  const src1 =
    "https://i.imgur.com/NkiLyTo.png";
  const src2 =
  "https://i.imgur.com/Yan6wVl.png";
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
    { offset: 15, backgroundColor: "#800020" },
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
              src="https://i.imgur.com/1zmH1cB.png"
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
            image_link={
              "https://cdn.discordapp.com/avatars/477648390876954649/a_cbb332ed31721487f414df8f80e85942.webp"
            }
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
              "https://cdn.discordapp.com/avatars/412497058721693735/c25fd05e24cf9fb3026a2ab43cbf43ab.webp"
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
              "https://i.imgur.com/QtHw69x.png"
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
              "https://cdn.discordapp.com/avatars/520732301747945492/c7c76ac8083f8e6695bd49d6820f6ddf.webp"
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
              "https://cdn.discordapp.com/avatars/567761794685206531/6cf420350d1bcb31ff8068cf1538b039.webp"
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
              "https://cdn.discordapp.com/avatars/528745155260448799/c8712e0032caaf6e949a8879f01ee429.webp"
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
              "https://cdn.discordapp.com/avatars/198713931131256834/a7d29ce2d48eb4135956a51c1fa3c194.webp"
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
              "https://cdn.discordapp.com/avatars/763164437053702144/617e926983c81c0d1a0f88c3e0bb4a15.webp"
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
              "https://cdn.discordapp.com/avatars/979007861118079006/0491dd2221f70b9643c46463a68cddff.webp"
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
              "https://cdn.discordapp.com/avatars/580434477721976875/0db87f17c0744a39b6c5aa8a591a5a2b.webp"
            }
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
            src="https://i.imgur.com/Ni0avhf.png"
            className="d-none d-lg-block rounded-5 w-30 mb-4 mb-lg-0 shadow-2"
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
            src="https://i.imgur.com/CEXg6Ho.png"
            className="d-none d-lg-block w-30 rounded-5 mb-4 mb-lg-0 shadow-2"
            alt="woman avatar"
            
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
            src="https://cdn.discordapp.com/attachments/617357614338015275/1250665444487204894/AirBalloonFilled.png?ex=666bc476&is=666a72f6&hm=35e7f46e3fc93ca803533f6e67673f3af8c7d11dad0413324674b1b3b5b90b42&"
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
            src="https://i.imgur.com/VuiSPoE.png"
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
            src="https://i.imgur.com/NmTfo0S.png"
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
            src="https://i.imgur.com/ljvmPII.png"
            width="150"
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
