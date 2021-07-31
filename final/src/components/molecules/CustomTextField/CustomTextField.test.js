import { render, screen, cleanup } from '@testing-library/react';
import CustomTextField from './CustomTextField';


afterEach(cleanup)

describe('CustomTextField Rendered', () => {
  test('CustomTextField should be rendered', () => {
    render(<CustomTextField/>);
    const element = screen.getByTestId('cutomtextfield')
    expect(element).toBeTruthy();
  });
});