"use client";

import Link from "next/link";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface ComponentProps {
  title: string;
  date: string;
  description: string;
  slug: string;
  imageSrc: string;
}

const BlogCard = ({
  title,
  date,
  description,
  slug,
  imageSrc,
}: ComponentProps) => {
  return (
    <Card style={{ width: "100%" }}>
      <Row>
        <Col>
          <Card.Img
            className="img-fluid rounded-start"
            variant="top"
            src={imageSrc}
            style={{ maxHeight: "9rem", objectFit: "cover" }}
          />
        </Col>
        <Col xs={9}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <div className="d-flex justify-content-between flex-wrap">
              <Link href={`/blog/${slug}`} className="btn btn-primary">
                View Post
              </Link>
              <time className="align-self-end blockquote-footer mb-0">
                {date}
              </time>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default BlogCard;
