import Layout from '../Layout/Layout'
import Profile from '../Profile/Profile'
import Filters from '../Filters/Filters'
import RepoList from '../Repo-list/Repo-list'
import Search from '../Search/Search'

function App() {

  const repoList = [
    {
        name: 'Mi primer proyecto de React',
        id: 123
    },
    {
        name: 'Mi segundo proyecto de React',
        id: 345
    }
  ]

  return (

    <Layout>
      <Profile />
      <Filters />
      <RepoList repoList={repoList} />
      <Search />
    </Layout>

  );
  
}

export default App
