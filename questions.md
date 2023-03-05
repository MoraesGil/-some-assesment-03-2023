1. What is the difference between Component and PureComponent? give an example where it might break my app.

- `PureComponent` does a `shallow comparison` of its props and state with the previous values before re-rendering and you can define this comparision, while `Component` re-renders whenever its props or state chang instead you override the `shouldComponentUpdate` method to do this comparison. `PureComponent` is recommended to enhance efficiency in re-render a large list of complex items and nested, However, using PureComponent can break your app if you rely on object mutations to trigger updates, so if the object reference doesn't change, it won't trigger a re-render even if the properties of the object have changed

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

- Well similar as explained in previous question, PureComponent can break your app if reference doesn't change, for instace, we can update parent component with context and not re-render children component with consistent data.

3. Describe 3 ways to pass information from a component to its PARENT.

- With the native React feature the Context API, we can wrap children components by a context and share common data within those
- Using Redux or similar library of global state management, very similar of context, however contains time-travel debugging and other features.
- With callback function, usually used in high order components, sharing data between both parent and child components, giving the child some extra param back.

4. Give 2 ways to prevent components from re-rendering.

- We can use mentioned `PureComponent` in other hand we have a hook called `memo` who can store the entire component and have as dependency to update an array of params.

5. What is a fragment and why do we need it? Give an example where it might break my app.

- Frament is a way to wrap a group of components without adding an extra DOM element thats improive the performance by reducing number od DOM node used. To create a fragment, you can use the `<React.Fragment></React.Fragment>` tag, or my favorite the shorthand syntax `<> </>`:

```
<React.Fragment>
  <ChildComponent1 />
  <ChildComponent2 />
</React.Fragment>

// or

<>
  <ChildComponent1 />
  <ChildComponent2 />
</>
```

6. Give 3 examples of the HOC pattern.

- Logging HOC

```
 const withLogging = (WrappedComponent) => {
  return (props) => {
    console.log("Rendering component: ", WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
};

// Usage
const MyComponentWithLogging = withLogging(MyComponent);
```

- Conditional Rendering HOC

```
 const withConditionalRendering = (WrappedComponent, condition) => {
  return (props) => {
    return condition(props) ? <WrappedComponent {...props} /> : null;
  };
};

// Usage
const MyComponentWithConditionalRendering = withConditionalRendering(
  MyComponent,
  (props) => props.isVisible
);
```

- Styling HOC

```
 const withStyles = (WrappedComponent, styles) => {
  return (props) => {
    const stylesObj = typeof styles === "function" ? styles(props) : styles;
    return (
      <div style={stylesObj}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

// Usage
const MyComponentWithStyles = withStyles(MyComponent, {
  color: "red",
  fontSize: "20px",
}); 
``` 

7. what's the difference in handling exceptions in promises, callbacks and async...await.
- When working with promises, you can handle exceptions using the catch() method. 
- When using async/await, you can use a try...catch block to handle exceptions.
- When working with callbacks, you can pass a function as an argument that will be called if an error occurs. This is commonly known as an "error-first" callback


8. How many arguments does setState take and why is it async.
- The setState() method in React takes two arguments: an object that represents the new state to set, and an optional callback function to be called after the state has been updated. React will only re-render each setState one by one, so if you have multiple states to update it will happen asynchronous to enhance the performance or React.

9. List the steps needed to migrate a Class to Function Component.

1- Replace the `class` structure with a `function`.
2- Replace constructor statment to use `useState` hook.
3- Replace class lifecycle methods to `React.useEffect` hook.
4- Replace event handlers to use `useCallback` Hook to prevent unnecessary re-renders.
5- Replace refs, to use the `useRef` Hook to create the same refs in the Function component.
6- Return component instead call `render()` method. 
7- Test the functions to ensure the app is correctly working as Class component.

10. List a few ways styles can be used with components.

- You can style inline using libraries such as Styled Components, Emotion, and Material UI's makeStyles. These libraries provide a way to create reusable style components
 ``` 
 import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: '#FFFFFF';
`;

function MyComponent() {
  return <Button>Hello, world!</Button>;
}

 ``` 

- You can style inline using jsx element using the style prop (very similar css+js), for example:
```
<div style={{ backgroundColor: 'blue', color: 'white' }}>Hello, world!</div> 
 ``` 

 - You can style using modules
 ```  
import styles from './styles.module.css';

function MyComponent() {
  return <div className={styles.myClass}>Hello, world!</div>;
}

 ``` 

 - You can style using css
 ``` 
import './styles.css';

function MyComponent() {
  return <div className="my-class">Hello, world!</div>;
}
 ``` 

11. How to render an HTML string coming from the server.

- We can use `dangerouslySetInnerHTML` prop. This prop allows you to pass a string of HTML code directly into a component, which will be rendered as HTML and displayed on the page. It's important to note that the use of dangerouslySetInnerHTML can be dangerous if you're not careful, as it can allow arbitrary code to be executed on the page. Make sure to sanitize any HTML code that comes from external sources to prevent security vulnerabilities.

Here's an example:
``` 
function MyComponent(props) {
  return <div dangerouslySetInnerHTML={{ __html: props.html }} />;
}
``` 