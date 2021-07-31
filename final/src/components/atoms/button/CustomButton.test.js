//This is our code



import React from 'react';
import Mybutton from './CustomButton'

import { cleanup, fireEvent, render, screen} from '@testing-library/react'

afterEach(cleanup)

describe('App', () => {
    test('check the buttom name', () => {
      const {getByTestId}=render(<Mybutton text = "Click Me"/>)
      const name = getByTestId('button')
      expect(name.textContent).toBe('Click Me')
    })
  })


  describe('Checking the Button Click', () =>{
    const handleClick = jest.fn();

    it('Checking the Click', () => {
      const {getByTestId} = render(<Mybutton
        onClick = { handleClick }
      />)
      expect(getByTestId("button")).toBeTruthy();
    });


    it('Checking the Function Call', () => {
      render(<Mybutton text = 'Add Job' onClick = {handleClick} />)

      fireEvent.click(screen.getByText(/Add Job/i))
      expect(handleClick).toHaveBeenCalledTimes(1);
    })
  })



















//This is Hima Sai's Code



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