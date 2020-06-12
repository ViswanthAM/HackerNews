import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouter } from './app/AppRouter.js';
import 'semantic-ui-css/semantic.min.css';
import './style/Style.less'

const container = document.querySelector('#container');
ReactDOM.render( <AppRouter/>, container )
