import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Dummy user check (replace with DB in real use)
  const dummyUser = {
    email: "test@example.com",
    password: "123456",
  };

  if (email === dummyUser.email && password === dummyUser.password) {
    return NextResponse.json({ message: "Login successful!" }, { status: 200 });
  } else {
    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 }
    );
  }
}
