import React from 'react'
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom'
import AddExpensePage from '../components/AddExpensePage.js'
import EditExpensePage from '../components/EditExpensePage.js'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js'
import Header from '../components/Header.js'
import HelpPage from '../components/HelpPage.js'
import NotFoundPage from '../components/NotFoundPage.js'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
    </div>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
    
  </BrowserRouter>
)

export default AppRouter