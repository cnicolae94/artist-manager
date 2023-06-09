import { Link, Outlet } from "react-router-dom";
import ButtonContainer from "../../components/buttons-container/button-container.component";
import { Header } from "../../components/header/header.component";

const Home = () => {
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
