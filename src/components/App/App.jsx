import Layout from '../Layout/Layout'
import Profile from '../Profile/Profile'
import Filters from '../Filters/Filters'
import RepoList from '../Repo-list/Repo-list'
import Search from '../Search/Search'
import repoData from '../repo-data'

function App() {

  return (

    <Layout>
      <Profile />
      <Filters />
      <RepoList repoList={repoData} />
      <Search />
    </Layout>

  );
  
}

export default App
