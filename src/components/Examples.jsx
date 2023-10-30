import TabButton from "./TabButton";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
export default function Examples() {
  const [seletcedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };
  return (
    <Section title="Examples" id="examples">
      <menu>
        <TabButton
          isSelected={seletcedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={seletcedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={seletcedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={seletcedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {!seletcedTopic ? (
        <p>Please select a topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[seletcedTopic].title}</h3>
          <p>{EXAMPLES[seletcedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[seletcedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
