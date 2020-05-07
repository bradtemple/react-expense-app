import React from 'react'
import { Router, Link, NavLink, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import AddExpensePage from '../components/AddExpensePage.js'
import EditExpensePage from '../components/EditExpensePage.js'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js'
import HelpPage from '../components/HelpPage.js'
import NotFoundPage from '../components/NotFoundPage.js'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
    </div>
    <Switch>
      <Route path="/" component={LoginPage} exact={true} />
      <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
      <PrivateRoute path="/create" component={AddExpensePage} />
      <PrivateRoute path="/edit/:id" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
    
  </Router>
)

export default AppRouter