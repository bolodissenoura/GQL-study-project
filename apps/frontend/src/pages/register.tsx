import React from "react";
import Head from "next/head";

import * as C from "../components";

export default function Register() {
  return (
    <>
      <Head>
        <title>Surgeries Plans - SignUp</title>
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
              <div className="w-full p-8 lg:w-1/2">
                <h2 className="text-6xl font-semibold text-gray-700 text-center">
                  👨🏾‍⚕️👩🏽‍⚕️
                </h2>
                <h1 className="text-2xl font-semibold text-gray-700 text-center">
                  Surgeries Plans
                </h1>
                <p className="text-sm text-gray-600 text-center">
                  Create your account for free ✅
                </p>
                <C.RegisterForm />
              </div>
              <div
                className="hidden lg:block lg:w-1/2 bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
                }}></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
