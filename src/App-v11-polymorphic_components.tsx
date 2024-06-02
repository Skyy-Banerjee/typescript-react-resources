//Polymorphic Components
//We don't use very often until and unless we're building a component library or design system at our work.

import { Text } from "./components/polymorphic/Text";

function App() {
  return (
    <div>
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" size="sm" htmlFor="someId" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
