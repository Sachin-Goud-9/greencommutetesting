import { render, screen, cleanup } from '@testing-library/react';
import DescriptionList from './DescriptionList'


afterEach(cleanup)

describe('Typography Rendered', () => {
  test('Title Typography In Descriptionlist', () => {
    render(<DescriptionList/>);
    const element = screen.getByTestId('titletypographyindescriptionlist')
    expect(element).toBeTruthy();
  });
  test('Blur Typography In Descriptionlist', () => {
    render(<DescriptionList/>);
    const element = screen.getByTestId('blurtypographyindescriptionlist')
    expect(element).toBeTruthy();
  });
  test('Bodyname Typography In Descriptionlist', () => {
    render(<DescriptionList/>);
    const element = screen.getByTestId('bodynametypographyindescriptionlist')
    expect(element).toBeTruthy();
  });
  test('Blur Div In Descriptionlist', () => {
    render(<DescriptionList/>);
    const element = screen.getByTestId('blurdivindescriptionlist')
    expect(element).toBeTruthy();
  });
  test('UL for Blur In Descriptionlist', () => {
    render(<DescriptionList/>);
    const element = screen.getByTestId('ulforblurindescriptionlist')
    expect(element).toBeTruthy();
  });
  test('UL for Body In Descriptionlist', () => {
    render(<DescriptionList/>);
    const element = screen.getByTestId('ulforbodyindescriptionlist')
    expect(element).toBeTruthy();
  });
  test('LI for Body In Descriptionlist', () => {
    render(<DescriptionList/>);
    const element = screen.getByTestId('liforbodyindescriptionlist')
    expect(element).toBeTruthy();
  });
  test('LI for Blur In Descriptionlist', () => {
    render(<DescriptionList/>);
    const element = screen.getByTestId('liforblurindescriptionlist')
    expect(element).toBeTruthy();
  });
});