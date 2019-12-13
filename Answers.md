1. What problem does the context API help solve? Share specific forms of data across all levels of the application. PROP DRILLING
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? Action is what changed the application,
takes previous state and an action and returns the next state, store stores the whole state in an immutable spot.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other? State stored within a component and not accessible by other components. 
Use Component state when you don't want the application to have access to some state. Any component subscribed to the store can access the state values.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
write action creators that return functions instead of actions, delay dispatch of actions until a condition is met.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
Redux and Redux thunk, a lot easier to understand and we've spent more time using it so I don't really fully understand Context.