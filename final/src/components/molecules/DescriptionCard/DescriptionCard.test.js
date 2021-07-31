import { render, screen, cleanup } from '@testing-library/react';
import DescriptionCard from './DescriptionCard';


afterEach(cleanup)

describe('Typography Rendered', () => {
  test('Head Typography In Descriptioncard', () => {
    render(<DescriptionCard/>);
    const element = screen.getByTestId('headtypographyindescriptioncard')
    expect(element).toBeTruthy();
  });
  test('Body Typography In Descriptioncard', () => {
    render(<DescriptionCard/>);
    const element = screen.getByTestId('bodytypographyindescriptioncard')
    expect(element).toBeTruthy();
  });
});