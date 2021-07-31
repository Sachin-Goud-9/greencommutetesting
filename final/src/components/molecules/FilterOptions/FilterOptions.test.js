import { render, screen, cleanup } from '@testing-library/react';
import FilterOptions from './FilterOptions';

afterEach(cleanup)

describe('Grid Rendered', () => {
  test('maindivinfilteroptions', () => {
    render(<FilterOptions selected={[]}/>);
    const element = screen.getByTestId('maindivinfilteroptions')
    expect(element).toBeTruthy();
  });
  test('maingridinfilteroptions', () => {
    render(<FilterOptions selected={[]}/>);
    const element = screen.getByTestId('maingridinfilteroptions')
    expect(element).toBeTruthy();
  });
  test('innergridinfilteroptions', () => {
    render(<FilterOptions selected={[]}/>);
    const element = screen.getByTestId('innergridinfilteroptions')
    expect(element).toBeTruthy();
  });
  test('innerdivinfilteroptions', () => {
    render(<FilterOptions selected={[]}/>);
    const element = screen.getByTestId('innerdivinfilteroptions')
    expect(element).toBeTruthy();
  });
  test('buttoninfilteroptions', () => {
    render(<FilterOptions selected={[]}/>);
    const element = screen.getByTestId('buttoninfilteroptions')
    expect(element).toBeTruthy();
  });
  test('buttoninfilteroptions', () => {
    render(<FilterOptions selected={[]}/>);
    const name = getByTestId('buttoninfilteroptions')
    expect(name.textContent).toBe('Click Me')
  })
});