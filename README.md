This project is only used as a sandbox so I can understand how to implement flux for my own projects in the future.

What I've learned so far.

Separation of Action and dispatcher logic is a nice idea. Keeping extra logic for changing application state far away from the components might seem unneeded, but it keeps things sane when handling simple components. Views never need to know about the dispatcher, only the actions they need.

Stores are where all logic should be managed if not component specific. Things missing from this generic sample might be transformations or endpoints for data.

KeyMirror is cool.

For my own record when I look this up again.

Component handler is ready to change application state, calls an application action ->
Application action is a dispatcher wrapper function around how to create the payload needed for that action ->
If an Action was register in a store, we call any appropriate function and emit a change to call any appropriate callbacks
If state changes, things will rerender.