// import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin';
import { useEffect,useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {  
  const [book,setbook] = useState([])
  useEffect(() => {
		const apiUrl = `books`;
		fetch(apiUrl)
			.then((data) => data.json())
			.then((data) => {
				setbook(data);
			});
	}, []);
  return(
    <>
        
       <Router>
        
        <Switch>
          <Route exact path="/admin">
          <Signin />
          </Route>

          <Route exact path="/">
          <h3><nav className="float-end mx-5">
              <Link to="/admin">Admin</Link>
        </nav></h3><br/>
        <h2 align="center">List Of Books</h2>
        <table class="table">
             <thead>
            <tr>
            <th scope="col">Id</th>
             <th scope="col">Name of Book</th>
             <th scope="col">Author of Book</th>
             <th scope="col">Publisher of Book</th>
             </tr>
             </thead>

             {book.map((item)=>
             
             <tr className="my-2">
             <td>{item.id}</td>
             <td>{item.name}</td>
             <td>{item.author}</td>
             <td>{item.publisher}</td>
             </tr>
             )}
             </table>
             </Route>
             </Switch>
      </Router>
    </>
  )
}

export default App;
