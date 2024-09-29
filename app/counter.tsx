"use client";

import Head from "next/head";

export default function About() {
  let make = [10, 30, 40];
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      {make.map((item) => item)}

      <main>
        <h1>About Our Company</h1>
        <p>We are dedicated to providing the best service.</p>
        <a href="/">Go back to Home</a>
      </main>
    </div>
  );
}
