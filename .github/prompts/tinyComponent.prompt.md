Your goal is to generate a new React component.

Ask for the name of the component if not provided.
Ask if the component needs any props.
Ask what the HTML element should be rendered as the root.

Requirements for the component:

- The component should be a functional component.
- Do not destruct the props in the function signature.
  - Destructure them in the function body.
- The component should render a div
- On the root element add a the className attribute use clsx.
