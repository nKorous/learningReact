# Learning React (As an Angular2 developer)




### Syntax differences

 - "Everything-is-javascript" (react) vs JavaScript IN HTML (Angular)
 - model (r) vs @ngModel() (A)
    - They mean very similar things, however react sets these variables up (so far) in the main entry file

 - Inline CSS for defining classes is className='', style is style={{cssStyle: 'value'}}
 - JSX not TypeScript (although you can use TypeScript)
 - {} (r) vs. {{}} (A)


 ### React tree

 Props and State

 render

 DOM

 model + component = DOM

 Once the DOM is rendered it can change the state and trigger another render.
  Virtual DOM is redrawn instead of the DOM, only making changes it needs.

### Components
 Fundamental unit of a react, components can be nested in other components => DOM nodes.
 Outer component OWNS the inner

 ##### Defining a function
 2 ways. 
 
 `function hello(props){
     return <h1>Hello at {props.now}</h1> 
 }`

  - single brackets are for interpolation
