// install -> import -> use;
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashBoardPage = () => (
    <div>
        This is from my dashboard compoenent
    </div>
)

const AddExpensePage = () => (
    <div>
        This is from my add expense compoenent
    </div>
)

const EditExpensePage = () => (
    <div>
        This is from my Edit expense compoenent
    </div>
)

const HelpExpensePage = () => (
    <div>
        This is from my Help expense compoenent
    </div>
)



const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashBoardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpExpensePage} />
        </div>

    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById("app"));

/// media/gilwell/Windows/Tutorials/First Quarter/REACT/The Complete React Developer Course (w Hooks and Redux)/9. React-Router
// 5. Setting up a 404.mp4
