import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Components/Footer';

describe('Footer component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('renders the logo and the quote', () => {
    render(<Footer />);

    expect(screen.getByText('A2Z Trip planner')).toBeInTheDocument();
    expect(screen.getByText('\"Traveling – it leaves you speechless, then turns you into a storyteller.\" - Ibn Battuta')).toBeInTheDocument();
  });

  it('renders the social media icons', () => {
    render(<Footer />);
  });
});
