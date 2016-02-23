const React = require('react');
const NavBar = require('./NavBar'); 
const TicketList = require('./TicketList'); 
// const NavList = require('./NavList'); 

const linksList = [
  {
    name: "tickets", url: '/'
  },
  {
    name: "repos", url: '/repos'
  }, 
  {
    name: "resources", url: '/resources'
  },
  {
    name: "repoProfile", url: '/repoProfile'
  }
  ];

const App = (props) => (
  <div className='app-shell grey lighten-2'>
    <NavBar links={linksList}/>
    <div className="row">
      <div className="main col-sm-10 container">
        {props.children}
        {// <TicketList issues={props.tickets} />
        }
      </div>
    </div>
  </div>
);
{
// render((
//   <Router history={hashHistory}>
//     <Route path='/' component={App}>
//       <IndexRoute component={TicketList} />
//       <Route path='repos' component={RepoList} />
//       <Route path='repoProfile' component={RepoProfile} />
//       <Route path='resources' component={ResourceList} />
//     </Route>
//   </Router>
// )
}
module.exports = App;