import AppRouter from "./Router/AppRouter";
import Footer from "./UI/Footer/Footer";
import Header from "./UI/Header/Header";



function App() {
  return (
    <div className="App">
      <Header></Header>
      <AppRouter/>
      <Footer></Footer>
    </div>
  );
}

export default App;
