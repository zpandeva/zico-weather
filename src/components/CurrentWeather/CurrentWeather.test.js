import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CurrentWeather from './CurrentWeather';

describe('<CurrentWeather />', () => {
  test('it should mount', () => {
    render(<CurrentWeather />);
    
    const currentWeather = screen.getByTestId('CurrentWeather');

    expect(currentWeather).toBeInTheDocument();
  });
});