function App() {
  return (
    <div
      css={{
        backgroundColor: 'hotpink',
        '&:hover': {
          color: 'lightgreen',
        },
      }}
    >
      <h1>Hellow</h1>
    </div>
  );
}

export default App;
