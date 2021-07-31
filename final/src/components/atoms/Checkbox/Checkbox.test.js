// import React from 'react';
// import Button from './CustomButton'

// import { cleanup, fireEvent, render, screen} from '@testing-library/react'

// afterEach(cleanup)

// describe('App', () => {
//     test('check the buttom name', () => {
//       const {getByTestId}=render(<Button label="Click Me"/>)
//       const name = getByTestId('button')
//       expect(name.textContent).toBe('Click Me')
//     })
//   })

//   describe('checking the button click', () => {
//     const handleClick = jest.fn();
   
//     it('Checking the click',() => {

//     const {getByTestId} = render(<Button
//             onClick={handleClick}
//         />)
//         expect(getByTestId("button")).toBeTruthy();
//     });

//     it('checking the function call',() => {
//        render(<Button
//         label='Add Book'
//             onClick={handleClick}
//         />)
//         fireEvent.click(screen.getByText(/Add Book/i))
//         expect(handleClick).toHaveBeenCalledTimes(1);
//     })
// });


import React from "react";
import CheckboxWithGreenCheck from "./CheckBox";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("checkbox renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<CheckboxWithGreenCheck />);
    expect(asFragment()).toMatchSnapshot();
  });

  // test("checkbox can be clicked", () => {
  //   let checked = false;
  //   const handleChange = jest.fn();

  //   const { container } = render(
  //     <CheckBox
  //       checked={checked}
  //       onChange={handleChange}
  //       data-testid="checkBox"
  //     />
  //   );
  //   screen.getByTestId("checkBox");
  //   userEvent.click(container.querySelector("input"));
  //   expect(handleChange).toHaveBeenCalled();
  // });
});












//This is HimaSai's Code


// import React from "react";
// import CheckBox from "./CheckBox";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";

// describe("checkbox renders correctly", () => {
//   test("should match snapshot", () => {
//     const { asFragment } = render(<CheckBox />);
//     expect(asFragment()).toMatchSnapshot();
//   });

//   test("checkbox can be clicked", () => {
//     let checked = false;
//     const handleChange = jest.fn();

//     const { container } = render(
//       <CheckBox
//         checked={checked}
//         onChange={handleChange}
//         data-testid="checkBox"
//       />
//     );
//     screen.getByTestId("checkBox");
//     userEvent.click(container.querySelector("input"));
//     expect(handleChange).toHaveBeenCalled();
//   });
// });
