import React,  { useState }  from 'react'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import logo from './kind_logo.png';
import Broker from './components/broker'
import Client from './components/client'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import theme from './theme';
import { ThemeProvider} from '@material-ui/core/styles';
import './App.css';



function App() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (_e, newCurrentTab) => {
    setCurrentTab(newCurrentTab);
  };
  return (
    <ThemeProvider theme={theme}>
      <img src={logo} alt="logo" className="logo" />
      <Tabs
        value={currentTab}
        indicatorColor="primary"
        textColor="secondary"
        onChange={handleChange}
        centered
      >
        <Tab label="Client referrals" component={Link} to="/client" />
        <Tab label="Broker/Agent referrals" component={Link} to="/broker" />
      </Tabs>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/client" /> }
        />
        <Route path="/client" component={Client} />
        <Route path="/broker" component={Broker} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
