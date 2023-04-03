import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/home/home.component";
import { Route, Routes } from "react-router-dom";
import CreateItemForm from "./components/crud-forms/createitem-form.component";
import SearchItemForm from "./components/crud-forms/searchitem-form.component";
import { AlbumContainer } from "./components/artist-container/artist-container.component";
import PaintingAlbum from "./components/painting-album/painting-album.component";
import Introduction from "./pages/home/introduction.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Introduction />} />
        <Route path="album" element={<AlbumContainer />} />
        <Route path="album/:id" element={<PaintingAlbum />} />
        <Route path="create" element={<CreateItemForm />} />
        <Route path="search" element={<SearchItemForm />} />
      </Route>
    </Routes>
  );
}

export default App;
