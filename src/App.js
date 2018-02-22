import React from 'react';
import UserList from './organisms/user-list'
/*
class App extends Component {
  render() {
     return(
      <UserList picUrl="http://via.placeholder.com/150x150"/>
    )
  }
   
}*/

const App = (props) => {  
  return(
    <UserList />
  )
}

export default App;