import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Profile from '../Profile/Profile'
import Filters from '../Filters/Filters'
import RepoList from '../Repo-list/Repo-list'
import Search from '../Search/Search'
import {getUser, getRepos} from '../../services/users';

function App() {

  const [userData, setUserData] = useState({});
  const [repoData, setReposData] = useState([]);
  const params = useParams();
  let user = params.user;

  if(!user){
    user = 'cesarcash';
  }

  useEffect(() => {

    getUser(user)
    .then(({data,isError}) => {
      if(isError){
        console.error('No encontramos el usuario')
        return;
      }
      setUserData(data)
    })

    getRepos(user)
    .then(({data,isError}) => {
      if(isError){
        console.error('No encontramos los repositorios');
        return;
      }
      setReposData(data);
    })

  }, [user])

  return (

    <Layout>
      <Profile {...userData} />
      <Filters />
      <RepoList repoList={repoData} />
      <Search />
    </Layout>

  );
  
}

export default App
