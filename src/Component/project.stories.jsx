import React from 'react'
import Project from './Project'
import { within } from '@storybook/testing-library';
import userEvent from '@testing-library/user-event';
import { expect } from '@storybook/jest';
import ImageOne from '../assets/apple-watch.jpg'
import ImageTwo from '../assets/headphone.jpg'
import ImageThree from '../assets/game-pad.jpg'


export default {
    title: 'Components/Project',
    component: Project,
    parameters: { docs: { page: null } },
  };

  const Template = (args) => <Project {...args} />

  export const Default =() => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
    <Project
    image={ImageOne}
    name="Smart Watch"
    description="Stylish and versatile smartwatch designed to keep you connected and on track."
    price="$500"
    bgColor="rgb(40, 71, 40)"
    />
    <Project
    image={ImageTwo}
    name="Headphone"
    description="Premium wireless headphones delivering immersive sound and all-day comfort."
    price="$300"
    bgColor="rgb(30, 113, 190)"
    />
    <Project
    image={ImageThree}
    name="Game pad"
    description="Ergonomic game pad designed for precision control and an enhanced gaming experience."
    price="$700"
    bgColor="rgb(114, 6, 114)"
    />
    </div>
  );

  export const SingleProduct = Template.bind({});
  SingleProduct.args = {
    image:ImageOne,
    name:"Smart Watch",
    description:"Stylish and versatile smartwatch designed to keep you connected and on track.",
    price:"$500",
    bgColor:"rgb(40, 71, 40)",
  }

  export const DiscountedProduct = Template.bind({});
  DiscountedProduct.args = {
    image:ImageTwo,
    name:"Headphone (Discount)",
    description:"Premium wireless headphones delivering immersive sound and all-day comfort.",
    price:"$250 (2% off)",
    bgColor:"rgb(169, 180, 247)",
  }

  export const OutOfStockProduct = Template.bind({});
  OutOfStockProduct.args = {
    image:ImageThree,
    name:"Game pad (out of stock)",
    description:"Ergonomic game pad designed for precision control and an enhanced gaming experience.",
    price:"sold",
    bgColor:"rgb(146, 35, 103)",
  }


 // Interaction test for Add To Cart functionality 
 export const AddToCartTest = Default.bind({}); 
 AddToCartTest.play = async ({ canvasElement }) => { 
    const canvas = within(canvasElement); 
    
    console.log("Rendered HTML:", canvasElement.innerHTML); 
    
    // Find the 'Add To Cart' button(s) 
    const addToCartButtons = canvasElement.querySelectorAll('.cart'); 
    
    if (addToCartButtons.length === 0) { 
        throw new Error('Add To Cart button(s) not found'); 
    } 
    
    // Simulate clicking the first 'Add To Cart' button 
    await userEvent.click(addToCartButtons[0]); 

    let logMessage = "";
    const originalConsoleLog = console.log;

    console.log = (message) => {
        logMessage = message;
        originalConsoleLog(message);
    };

    await userEvent.click(addToCartButtons[0]);

    expect(logMessage).toBe('Smart Watch added to cart');

    console.log = originalConsoleLog
    
};