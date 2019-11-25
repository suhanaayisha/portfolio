import React from 'react';
import '../styles/index.css';


import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

   const AppRouter = () => (
    <BrowserRouter>
           <div>
                <Navigation/>
               <Switch>
                    <Route path='/' component={Home} exact={true} />
                    <Route path='/about' component={About} />
                    <Route path='/experience' component={Experience} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/skills' component={Skills} />
                    <Route path='/education' component={Education} />
                    <Route path='/contact' component={Contact} />
               </Switch>
           </div>
       </BrowserRouter>
   );
   
   export default AppRouter;