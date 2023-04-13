import React from 'react';
import './Blog.css'

const Blogs = () => {
    return (
        <div>
            <div className='my-3 py-5' id='details-background'>
                <h2 className='text-center py-5'>Blog</h2>
            </div>
            <div className="question">
                <div className="q">
                    <h3 className='text-center'>When should you use context API?</h3>
                    <p className='text-justify'>Context API is a useful tool for managing state in large or complex React applications. It allows for sharing of data between multiple components, reducing the need for prop drilling and simplifying state management. This can lead to more streamlined code and a more efficient development process. Context API is particularly beneficial when dealing with multiple layers of components that require the same data, as it eliminates the need to pass data through each layer manually.</p>
                </div>
                <div className="q">
                    <h3 className='text-center'>What is a custom hook?</h3>
                    <p>
                        A custom hook is a function it allows to extract reusable logic from a component. Custom hooks create user own reusable hooks that encapsulate common functionality, such as state management, data fetching, or event handling. By separating logic into a custom hook,it helps components clean and focused on UI concerns while promoting code reuse across application. Custom hooks starting with "use" and can be used in functional components just like the built-in React hooks.
                    </p>

                </div>
                <div className="q">
                    <h3 className='text-center'>What is useRef?</h3>
                    <p>
                        useRef is a built-in React hook that returns a mutable object with a current property. This property can be assigned any value and persists between renders. useRef is commonly used to access the properties or methods of DOM elements, store values between renders, or trigger re-renders without changing the component's state. Unlike state or props, changes to the value of useRef do not cause a re-render of the component.
                    </p>

                </div>
                <div className="q">
                    <h3 className='text-center'>What is useMemo?</h3>
                    <p>
                        useMemo is a built-in React hook that memoizes the result of a function and returns the cached value unless its dependencies have changed. This optimization can improve the performance of expensive computations, such as complex data filtering or sorting. useMemo takes a function and an array of dependencies and returns the cached result of the function unless one of the dependencies has changed, in which case the function is re-evaluated.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Blogs;