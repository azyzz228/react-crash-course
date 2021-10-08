import { Router, Route, Link, Switch } from 'react-router-dom'
import AllMeetupsScreen from './screen/AllMeetupsScreen'
import FavoritesScreen from './screen/FavoritesScreen'
import NewMeetupScreen from './screen/NewMeetupScreen'
import Layout from './components/Layout'

function App() {
  return (

    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsScreen />

        </Route>

        <Route path="/favorites" exact>
          <FavoritesScreen />

        </Route>

        <Route path="/new-meetup" exact>
          <NewMeetupScreen />

        </Route>
      </Switch>
    </Layout>

  );
}

export default App;
