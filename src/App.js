import './App.css';
import 'bootstrap'
import "bootstrap/scss/bootstrap.scss"
import AddPost from './Components/AddPost';
import ListPost from './Components/ListPost'
import Comment from './Components/Comment'
import ListComment from './Components/ListComment';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
function App() {
  return (
    <div className="App">
      <AddPost />
      <ListPost/>
      <Comment/>
      <ListComment/>
    </div>
  );
}

export default App;
