import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './pages/home/Home'
import Login from './pages/user/Login'
import PrivateRoute from './utilities/PrivateRoute'
import AuthorPage from './pages/author/AuthorPage'
import WorkEdit from './pages/work/WorkEdit'
import WorkDelete from './pages/work/WorkDelete'
import AuthorEdit from './pages/author/AuthorEdit'
import TestsPage from './pages/tests/TestsPage'
import SingleTestPage from './pages/tests/SingleTestPage'
import QuestionCreate from './pages/questions/QuestionCreate'
import QuestionEdit from './pages/questions/QuestionEdit'
import QuestionDelete from './pages/questions/QuestionDelete'
import ErrorPage from './pages/errros/ErrorPage'
import TestCreate from './pages/tests/TestCreate'
import TestDelete from './pages/tests/TestDelete'
import AuthorAddWork from './pages/author/AuthorAddWork'
import CreditsPage from './pages/credits/CreditsPage'
import CreditCreate from './pages/credits/CreditCreate'
import CreditsEdit from './pages/credits/CreditsEdit'
import CreditsDelete from './pages/credits/CreditsDelete'
import PageNotFound from './pages/errros/PageNotFound'

function handleChange() {
    console.log('hi')
}

const Routes = (history) => (
  <Switch onChange={handleChange}>
    <Route exact path='/administration' component={Home}/>
    <Route path='/administration/user/login' component={Login}/>

    <PrivateRoute exact path={'/administration/authors/:name'} component={AuthorPage}/>
    <PrivateRoute path={'/administration/authors/edit/:name'} component={AuthorEdit}/>
    <PrivateRoute path={'/administration/authors/:id/add-work'} component={AuthorAddWork}/>

    <PrivateRoute path={'/administration/work/edit/:id'} component={WorkEdit}/>
    <PrivateRoute path={'/administration/work/delete/:id'} component={WorkDelete}/>

    <PrivateRoute exact path={'/administration/tests'} component={TestsPage}/>
    <PrivateRoute exact path={'/administration/tests/add'} component={TestCreate}/>

    <PrivateRoute path={'/administration/tests/add-answer/:id'} component={QuestionCreate} />
    <PrivateRoute path={'/administration/tests/edit/:id'} component={SingleTestPage}/>
    <PrivateRoute path={'/administration/tests/delete/:id'} component={TestDelete}/>

    <PrivateRoute exact path={'/administration/question/edit/:id'} component={QuestionEdit}/>
    <PrivateRoute exact path={'/administration/question/delete/:id'} component={QuestionDelete}/>

    <PrivateRoute exact path={'/administration/credits'} component={CreditsPage}/>
    <PrivateRoute exact path={'/administration/credits/create'} component={CreditCreate}/>
    <PrivateRoute exact path={'/administration/credits/edit/:id'} component={CreditsEdit}/>
    <PrivateRoute exact path={'/administration/credits/delete/:id'} component={CreditsDelete}/>

    <PrivateRoute exact path={'/administration/error'} component={ErrorPage}/>

    <Route component={PageNotFound}/>
  </Switch>
)

export default Routes
