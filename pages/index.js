import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import Plyr from "plyr";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const player = new Plyr("#player");
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Bring Back Ed.</title>
        <meta
          name="description"
          content="A simple website dedicated to bringing back everyone's favorite
                bowling alley lawyer, Ed."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.plyr.io/3.6.8/plyr.css" />
      </Head>

      <main className={styles.main}>
        <Container>
          <Row>
            <Col>
              <h1>Bring Back Ed.</h1>
              <p className="lead">
                A simple website dedicated to bringing back everyone&apos;s
                favorite bowling alley lawyer, Ed.
              </p>
              <p>Under construction. More coming soon...</p>
            </Col>
            <Col>
              <video
                id="player"
                playsInline
                controls
                // data-poster="/path/to/poster.jpg"
              >
                <source
                  src="https://objectstorage.ap-sydney-1.oraclecloud.com/n/sdyckdmonbaf/b/ed-bucket-20210831-0807/o/Season%201%2FEd.S01E01.Pilot.mp4"
                  type="video/mp4"
                />

                {/* <track
                  kind="captions"
                  label="English captions"
                  src="/path/to/captions.vtt"
                  srclang="en"
                  default
                /> */}
              </video>
            </Col>
          </Row>
        </Container>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
