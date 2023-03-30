import React from "react";
import Head from "next/head";

import * as C from "../components";

export default function Login() {
  return (
    <>
      <Head>
        <title>Surgeries Plans - Login</title>
        <meta
          name="description"
          content="Organization to Doctors and Instrumentators Surgeries Plans"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-700 h-auto p-5 min-h-screen  overflow-x-auto">
        <section className="container px-4 mx-auto">
          <div className="py-6">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
              <div
                className="hidden lg:block lg:w-1/2 bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1550831106-2747f0d6a81c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80s')",
                }}></div>
              <div className="w-full p-8 lg:w-1/2">
                <h2 className="text-6xl font-semibold text-gray-700 text-center">
                  👨🏾‍⚕️👩🏽‍⚕️
                </h2>
                <h1 className="text-2xl font-semibold text-gray-700 text-center">
                  Surgeries Plans
                </h1>
                <p className="text-sm text-gray-600 text-center">
                  Up your surgeries organization to another level
                </p>
                <C.LoginForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
