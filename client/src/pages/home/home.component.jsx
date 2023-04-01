import { Link, Outlet } from "react-router-dom";
import { AlbumContainer } from "../../components/artist-container/artist-container.component";
import ButtonContainer from "../../components/buttons-container/button-container.component";
import { Header } from "../../components/header/header.component";

const Home = () => {
  // TODO: CREATE HOMEPAGE WITH INSTRUCTIONS AND ADD
  return (
    <div className="home-container">
      <Link to="/">
        <Header />
      </Link>
      <ButtonContainer />
      <Outlet />
      {/* homepage with instructions under Outlet idk why but it just works */}
    </div>
  );
};

export default Home;
