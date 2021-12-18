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

+ ### Learnings:
    + Property (props) chaning
    + wrap children with custom component
    + How to manage state using React context
    + use of state hook 'useReducer()'
    + How to use 'useRef()' to get a element referance. And also learn the use of fowardRef in React library.
    + How to use useEffect
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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
