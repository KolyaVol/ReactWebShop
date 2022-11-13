import AppRouter from "./Router/AppRouter";
import Footer from "./UI/Footer/Footer";
import Header from "./UI/Header/Header";
import styles from './App.module.css'


function App() {
  return (
    <div className={styles.app}>
      <Header></Header>
      <AppRouter/>
      <Footer></Footer>
    </div>
  );
}
 
export default App;
