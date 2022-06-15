import 'regenerator-runtime/runtime'
import React from 'react'

import {login, logout, get_greeting, set_greeting} from './assets/js/near/utils'
import getConfig from './assets/js/near/config'
// import { SignUp } from './pages/signup/signup';
import { Main } from './pages/main/main';
import { SignUp } from './pages/signup/signup';
import { Layout } from './components';
import './assets/css/global.scss';


export default function App() {
  return (
    <Layout>
      <Main/>
    </Layout>
  )
}
