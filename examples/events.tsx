import React, { useState } from "react";
import Test from "../components/Test";

function Welcome() {
  const [language, setLanguage] = useState<"french" | "spanish" | "">("");

  return (
    <>
      <select
        value={language as string}
        onChange={(e) => setLanguage(e.target.value as "french" | "spanish")}
      >
        <option value="french">French</option>
        <option value="spanish">Spanish</option>
      </select>

      {language === "french" && <h4>Bonjour</h4>}
      {language === "spanish" && <h4>Hola</h4>}
      {language === "" && <h4>Please select language</h4>}
    </>
  );
}

export default function TestWelcome({ autoStart = false }) {
  return (
    <Test
      autoStart={autoStart}
      Component={() => (
        <main>
          <Welcome />
        </main>
      )}
      tests={[
        Test.hasText("Please select language", { target: "h4" }),

        Test.trigger(
          "change",
          {
            target: {
              // @ts-ignore
              value: "french",
            },
          },
          { target: "select" }
        ),

        Test.hasText("Bonjour", { target: "h4" }),
      ]}
    />
  );
}
