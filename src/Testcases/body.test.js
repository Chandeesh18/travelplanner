import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Body from '../Components/Mainpage/body';

describe('Body component', () => {
  it('renders welcome message and button when user is authenticated', () => {
    const localStorageMock = {
      getItem: jest.fn().mockReturnValue('user@example.com'),
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    render(
      <Router>
        <Body />
      </Router>
    );

    expect(screen.getByText(/Welcome to A2Z Travel Plan/i)).toBeInTheDocument();
    expect(screen.getByText(/Your Next Journey, Optimized/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /create trip/i })).toBeInTheDocument();
  });

  it('renders welcome message and button when user is not authenticated', () => {
    const localStorageMock = {
      getItem: jest.fn().mockReturnValue(null),
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    render(
      <Router>
        <Body />
      </Router>
    );
    expect(screen.getByText(/Welcome to A2Z Travel Plan/i)).toBeInTheDocument();
    expect(screen.getByText(/Your Next Journey, Optimized/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /get started/i })).toBeInTheDocument();
  });
});
