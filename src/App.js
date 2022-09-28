

class  App() {

  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );

  return (
    <h2>Latutude: </h2>
  );
}



export default App;
