import { NextResponse } from "next/server";

type ContactDetails = {
  email: string;
  first: string;
  last: string;
  message: string;
};

const formValid = (body: ContactDetails) => {
  return body.email && body.first && body.last;
};

export const POST = async (request: Request) => {
  const body = (await request.json()) satisfies ContactDetails;

  if (!formValid(body)) {
    return NextResponse.json(
      { error: "Unprocessable Content" },
      { status: 422 }
    );
  }

  console.log(body);
};
