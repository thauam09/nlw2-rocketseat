import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import teacherForm from './pages/teacherForm';
import teacherList from './pages/teacherList';

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route path="/study" component={teacherList} />
      <Route path="/give-classes" component={teacherForm} />
    </BrowserRouter>
  )
}

export default Routes;