import Banner from "./Banner";
import Nabvar from "./Nabvar";
import Row from "./Row";
import send from "./send";

function App() {
  
  return (
    <div className="app">
      <Nabvar/>
      <Banner/>
      <h2>Heading</h2>
      <Row title="Netflix Originals" fetch={send.fetchNetflixOriginals} large={true} />
      <Row title="Trending Movies" fetch={send.fetchTrending} />
      <Row title="Top Rated Movies" fetch={send.fetchTopRated} />
      <Row title="Action Movies" fetch={send.fetchActionMovies } />
      <Row title="Romance Movies" fetch={send.fetchRoanceMovies} />
      <Row title="Horror Movies" fetch={send.fetchHorrorMovies} />
      <Row title="Documentaries" fetch={send.fetchDocumentaries } />
      <Row title="Comedy Movies" fetch={send.fetchComedyMovies } />
    </div>
  );
}

export default App;
