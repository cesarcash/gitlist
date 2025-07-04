import Layout from '../Layout/Layout'
import Profile from '../Profile/Profile'
import Filters from '../Filters/Filters'
import RepoList from '../Repo-list/Repo-list'
import Search from '../Search/Search'

function App() {

  return (

    <Layout>
      <Profile />
      <Filters />
      <RepoList />
      <Search />
    </Layout>

  );
  
}

export default App
