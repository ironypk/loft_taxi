import React from "react";
import ReactDom from 'react-dom';
import { Router } from 'react-router-dom'
import App from './App'
import { createMemoryHistory } from 'history'
import Welcome from './components/Welcome/Welcome'
import {render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

