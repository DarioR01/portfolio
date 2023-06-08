import { NextResponse } from "next/server";
import sanitizeHtml from "sanitize-html";
const nodemailer = require("nodemailer");

type ContactDetails = {
  email: string;
  first: string;
  last: string;
  message: string;
};

function formValid(body: ContactDetails) {
  return body.email && body.first && body.last && body.message;
}

const headingAttributes = ["align", "class", "dir", "id", "style"];

const sanitizeMail = (html: string) => {
  return sanitizeHtml(html, {
    allowedTags: [
      "a",
      "b",
      "br",
      "div",
      "font",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "hr",
      "img",
      "label",
      "li",
      "ol",
      "p",
      "span",
      "strong",
      "table",
      "td",
      "th",
      "tr",
      "u",
      "ul",
    ],
    allowedAttributes: {
      a: ["class", "href", "id", "style", "target"],
      b: ["class", "id", "style"],
      br: ["class", "id", "style"],
      div: ["align", "class", "dir", "id", "style"],
      font: ["class", "color", "face", "id", "size", "style"],
      h1: headingAttributes,
      h2: headingAttributes,
      h3: headingAttributes,
      h4: headingAttributes,
      h5: headingAttributes,
      h6: headingAttributes,
      hr: ["align", "size", "width"],
      img: [
        "align",
        "border",
        "class",
        "height",
        "hspace",
        "id",
        "src",
        "style",
        "usemap",
        "vspace",
        "width",
      ],
      label: ["class", "id", "style"],
      li: ["class", "dir", "id", "style", "type"],
      ol: ["class", "dir", "id", "style", "type"],
      p: ["align", "class", "dir", "id", "style"],
      span: ["class", "id", "style"],
      strong: ["class", "id", "style"],
      table: [
        "align",
        "bgcolor",
        "border",
        "cellpadding",
        "cellspacing",
        "class",
        "dir",
        "frame",
        "id",
        "rules",
        "style",
        "width",
      ],
      td: [
        "abbr",
        "align",
        "bgcolor",
        "class",
        "colspan",
        "dir",
        "height",
        "id",
        "lang",
        "rowspan",
        "scope",
        "style",
        "valign",
        "width",
      ],
      th: [
        "abbr",
        "align",
        "background",
        "bgcolor",
        "class",
        "colspan",
        "dir",
        "height",
        "id",
        "lang",
        "scope",
        "style",
        "valign",
        "width",
      ],
      tr: ["align", "bgcolor", "class", "dir", "id", "style", "valign"],
      u: ["class", "id", "style"],
      ul: ["class", "dir", "id", "style"],
    },
    selfClosing: ["img", "br", "hr"],
    allowedSchemes: ["http", "https", "mailto", "tel", "sms"],
    allowedSchemesAppliedToAttributes: ["href", "src"],
    allowProtocolRelative: false,
  });
};

export const POST = async (request: Request) => {
  const body = (await request.json()) satisfies ContactDetails;

  if (!formValid(body)) {
    return NextResponse.json(
      { error: "Unprocessable Content" },
      { status: 422 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.FROM_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const html = `<p>From: ${sanitizeMail(body.first)} ${sanitizeMail(
    body.last
  )}</p> <p>Email: ${sanitizeMail(body.email)}</p> <p>${sanitizeMail(
    body.message
  )}</p>`;

  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: "Blog Contact",
      html,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 201 }
    );
  }

  return NextResponse.json({ error: "Created success" }, { status: 201 });
};
