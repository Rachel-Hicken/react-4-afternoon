import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList'

export default(
    <div>
        <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/about' component={About}/>
            <Route path='/classlist/:class' component={ClassList}/>
        </Switch>
    </div>
)