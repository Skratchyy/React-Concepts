import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core concepts!</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => {
          return <CoreConcept key={concept.title} {...concept} />;
        })}
      </ul>
    </section>
  );
}
