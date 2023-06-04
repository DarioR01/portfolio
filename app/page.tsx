"use client";

import Link from "next/link";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Instagram, LinkedIn, GitHub } from "./socialSVG";
import style from "./index.module.css";

const Home = () => {
  return (
    <>
      <Container className="d-flex flex-column">
        <Row>
          <Col
            className={`d-flex flex-column order-2 align-items-center justify-content-center col-md ${style.Col_unset_order}`}
          >
            <Image alt="image" src="/profile.png" />
          </Col>
          <Col
            className={`d-flex flex-column order-1 justify-content-center col-md ${style.Col_unset_order}`}
          >
            <h1>
              <p className="blockquote-footer mb-0 initialism">HELLO</p>
              <span className="display-1">
                <strong>
                  I&#39;m <span className="text-primary">Dario</span> Russo
                </strong>
              </span>
            </h1>

            <p className="mb-5 blockquote">
              This is Dario Russo Web Developer based in London, looking for a
              job around my area. Writing more and more and more more more more
              more more more more more more more. Please wrap ffs. yay :D
            </p>

            <div className="mb-5">
              <Button variant="primary" size="lg">
                DOWNLOAD CV
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <footer className={`${style.footer_margin}`}>
        <Container>
          <Link className={style.footer_links} href="">
            <LinkedIn />
          </Link>
          <Link className={style.footer_links} href="">
            <GitHub />
          </Link>
          <Link className={style.footer_links} href="">
            <Instagram />
          </Link>
        </Container>
      </footer>
    </>
  );
};

export default Home;
