import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import SearchPage from './pages/Search/SearchPage'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import Room from './pages/Room/Room'
import Overview from './pages/Account/Overview'
import Profile from './pages/Account/Profile'
import Favorite from './pages/Account/Favorite'
import Booking from './pages/Account/Booking'
import HistoryBooking from './pages/Account/HistoryBooking'
//SearchPage->SearchResult
//rooms->itemDetail/:id
// use Redux Provider

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search-page' component={SearchPage} /> 
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/room-detail' component={Room} />
          <Route path='/account/overview/' component={Overview} />
          <Route path='/account/profile/' component={Profile} />
          <Route path='/account/favorite/' component={Favorite} />
          <Route path='/account/booking/' component={Booking} />
          <Route path='/account/history-booking/' component={HistoryBooking} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
