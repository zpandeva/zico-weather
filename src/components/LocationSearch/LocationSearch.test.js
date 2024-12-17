import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LocationSearch from './LocationSearch';

describe('<LocationSearch />', () => {
  test('it should mount', () => {
    render(<LocationSearch />);
    
    const locationSearch = screen.getByTestId('LocationSearch');

    expect(locationSearch).toBeInTheDocument();
  });
});