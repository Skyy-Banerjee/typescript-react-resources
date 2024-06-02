import List from "./components/generics/List";

function App() {
  const people = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Alice', lastName: 'Johnson' },
    { firstName: 'Robert', lastName: 'Brown' },
    { firstName: 'Emily', lastName: 'Davis' }
  ];

  return (
    <div>
      <List
        items={["☕", "🎃", "🎸", "📖"]}
        onClick={(item) => console.log(item)}
        renderItem={(item) => <span>{item}</span>} // Specifying renderItem for string items
      />
      <List
        items={[1, 2, 3, 4]}
        onClick={(item) => console.log(item)}
        renderItem={(item) => <span>{item}</span>} // Specifying renderItem for number items
      />
      <List
        items={people}
        onClick={(item) => console.log(item)}
        renderItem={(item) => <span>{item.firstName} {item.lastName}</span>} // Specifying renderItem for object items
      />
    </div>
  );
}

export default App;
