# Happy Tummy - A Food Order Application Using ReactJs

> It's is a food ordering browser application built using ReactJs. This was created while I was learning React.

```
Features Need to Develop (MVP)
```
+ User can see the available Items
+ User can Add Items in their cart
+ User can select Payment option as COD
+ User can view their ordered Item

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

| [Live Application (👆)](https://krish-happy-tummy-1e3785.netlify.app/) |
| ------ |  

+ ### Learnings:
    + Property (props) chaning
    + wrap children with custom component
    + How to manage state using React context
    + use of state hook 'useReducer()'
    + How to use 'useRef()' to get a element referance. And also learn the use of fowardRef in React library.
    + How to use useEffect
    + How to make a Http request.
## ✨ My Thought Process ✨

```
Phase 1 : Identify and Create a basic Components
```
+ Header Section followed by a banner image.
    + Left side Logo OR Application Name
    + Cart Details

```
Phase 2 : Render a Dummy List of Item 
```
+ Create a separate component for each Item (Meal)
+ Create a component to group all available Item 
+ Create a Parent component to hold both the component

```
Phase 3 : Adding a form component to select Items
```
+ Created a separate MealItemForm component
+ Included a number Input box component as a child of Form Component.

```
Phase 4 : Adding a Modal to show Cart details
```
+ Created a Cart component with dummy cart data.
+ created a Modal component to wrap the Cart Component.
+ Modal component consist of Backdrop and ModalOverlay which is implemented by using reactPortal
+ through props chaning implemented the Modal open & close functionality

```
Phase - 5 : Adding Items to the cart dynamically
```
+ Created a Cart context including a Cart Provider to hold the Cart state globally
+ In cart Context I created a Items array
    + by checking items id (makes Item unique), add function handler will add Items to Cart


```
Phase - 6 : Working to make Cart Add and Delete button actionable
```
+ bind the item and item id with each Handler
+ using cartContext and with some array handling logic it's done


```
Phase - 7 : Moving "Meals" Data To The Backend (Firebase)
```
+ Created a realtime database.
+ use 'fetch' method to call the api, which will return a promise. 
+ Once we get the meals data, set it to meals state using useState hook.

```
Phase - 8: Added a checkout Form
```
+ Created a Checkout component with will visible when user click order button. Handled by state hook.
+ take the form data through useRef and did some basic validation

```
Phase - 9: send data to backend (firebase realtime database for simplicity)
```
+ Capture the user address details
+ from cart context get the order details
+ Show the success message by handling state and  using HTTP POST method send the data to backend.


<p align="center">
<img alt="GIF" src="https://github.com/krishdu/Happy-Tummy/blob/master/happy-tummy-v1.gif?raw=true" width="800" height="400"/>
</p>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
