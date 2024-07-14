//
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={14}
        outerSize={10}
        color="120, 120, 120"
        outerAlpha={0.4}
        innerScale={0.8}
        outerScale={6}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </div>
  );
}
