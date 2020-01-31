import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('should Render', () => {
    const renderResult = render(<App />);
    expect(renderResult).toBeTruthy();
  });

  test('should have cheeky remark', () => {
    const { getByText } = render(<App />);
    const cheekyRemark = getByText(/All this from a container/i);
    expect(cheekyRemark).toBeInTheDocument();
  });
});
