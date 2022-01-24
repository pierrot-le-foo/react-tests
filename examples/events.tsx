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

      {language === "french" && <div>Bonjour</div>}
      {language === "spanish" && <div>Spanish</div>}
    </>
  );
}

export default function TestWelcome({ autoStart = false }) {
  return (
    <Test
      autoStart={autoStart}
      Component={Welcome}
      tests={[
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

        // Test.select("div").hasText("Bonjour"),
      ]}
    />
  );
}
