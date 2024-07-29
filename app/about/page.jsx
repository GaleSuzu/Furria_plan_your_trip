import Link from "next/link";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <section>
        <h2>
          <strong>Furrìa</strong>
        </h2>
        <h3>
          <strong>"Chi siamo"</strong>
        </h3>
        <p>
          Siamo un gruppo di viaggiatori e sviluppatori che hanno unito le loro
          passioni per creare <strong>Furrìa</strong>, l'app che semplifica la
          pianificazione dei viaggi. Grazie alla nostra esperienza nel settore
          del turismo e alle nostre competenze tecniche, abbiamo sviluppato una
          piattaforma completa e personalizzabile che ti accompagnerà in ogni
          tua avventura. La nostra visione Il nostro obiettivo è quello di
          rivoluzionare il modo in cui le persone pianificano e vivono i loro
          viaggi. Vogliamo creare una community di viaggiatori che si scambino
          consigli e esperienze, e che insieme possano esplorare il mondo in
          modo più consapevole e sostenibile. Perché Furrìa? Perché crediamo che
          ogni viaggio sia un'opportunità per crescere e imparare. Perché
          vogliamo che tu possa vivere esperienze autentiche e indimenticabili.
          Perché siamo appassionati di tecnologia e vogliamo utilizzare le
          nostre competenze per migliorare la tua vita."
        </p>
      </section>
      <h2>The Developers</h2>
      <section>
        <div>
          <div>
            <Image
              //src="../app/public/Images/noi/Susanna.jpg"
              alt=""
              width={200}
              height={170}
            />
            <h3>Susanna Palmeri</h3>
            <p>Full stack Developer</p>
            <div>
              <Link href="https://github.com/GaleSuzu">
                <Image src="./gitHub.svg" alt="GitHub" width={40} height={40} />
              </Link>
              <Link href="https://www.linkedin.com/in/susanna-palmeri">
                <Image
                  src="./linkedin.svg"
                  alt="linkedin"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
          <div>
            <Image
              //src="./app/public/Images/noi/Roberta.jpg"
              alt="Roberta Favuzza"
              width={200}
              height={170}
            />
            <h3>Roberta Favuzza</h3>
            <p>Full stack Developer</p>
            <div>
              <Link href="https://github.com/robertafavuzza">
                <Image src="./gitHub.svg" alt="GitHub" width={40} height={40} />
              </Link>
              <Link href="">
                <Image
                  src="./linkedin.svg"
                  alt="linkedin"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>

          <div>
            <Image src="" alt="" width={200} height={170} />
            <h3>Giuseppe Neri</h3>
            <p>Full stack Developer</p>
            <div>
              <Link href="https://github.com/GiuseppeSonny">
                <Image src="./gitHub.svg" alt="GitHub" width={40} height={40} />
              </Link>
              <Link href="https://www.linkedin.com/in/giuseppe-neri23/">
                <Image
                  src="./linkedin.svg"
                  alt="linkedin"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>

          <div>
            <Image
              // src="../app/public/Images/noi/Paolo.jpg"
              alt=""
              width={200}
              height={170}
            />
            <h3>Paolo Caramia</h3>
            <p>Full stack Developer</p>
            <div>
              <Link href="https://github.com/Paolo131084">
                <Image src="./gitHub.svg" alt="GitHub" width={40} height={40} />
              </Link>
              <Link href="http://www.linkedin.com/in/paolo-caramia">
                <Image
                  src="./linkedin.svg"
                  alt="linkedin"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>

          <div>
            <Image src="" alt="" width={200} height={170} />
            <h3>Alberto Palmeri</h3>
            <p>Full stack Developer</p>
            <div>
              <Link href="https://github.com/Alb4rto">
                <Image src="./gitHub.svg" alt="GitHub" width={40} height={40} />
              </Link>
              <Link href="">
                <Image
                  src="./linkedin.svg"
                  alt="linkedin"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
            <div></div>
          </div>

          <Link href="/">
            <button text="Home" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
