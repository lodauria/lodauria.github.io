import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import AudioSpeedUpPage from './pages/AudioSpeedUp';
import HomePage from './pages/HomePage';
import { Affix, Sidebar } from 'rsuite';
import SidenavInstance from './layout/Sidenav'

interface State {
  activeMenu: string;
}

class App extends React.Component <{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      activeMenu: ""
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Container>
          <Sidebar>
            <Affix>
              <SidenavInstance activeMenu={this.state.activeMenu} />
            </Affix>
          </Sidebar>
          <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/pages/AudioSpeedUp' Component={AudioSpeedUpPage} />
          </Routes>
        </Container>
      </BrowserRouter>
    );
  }
}


export default App;
