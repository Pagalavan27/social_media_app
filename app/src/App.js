import Header from './Header';
import Nav  from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import About from './About';
import Footer from './Footer';
import EditPost from './EditPost';
import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';


function App() {

  return (
    <div className="App">
      <DataProvider>
        <Header title="AB SOCIAL MEDIA"/>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='post'> 
              <Route index element={<NewPost />}/>
              <Route path=':id' element={<PostPage />} />
            </Route>
            <Route path='/edit/:id' element={<EditPost/>}/>
            <Route path='*' element={<Missing />}/>
            <Route path='about' element={<About />}/>  
          </Routes>
          <Footer />
      </DataProvider>   
    </div>
  );
}

export default App;

