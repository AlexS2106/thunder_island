import React, { useReducer, createContext } from "react";

export const StateContext = createContext();
export const DispatchContext = createContext();


const initialState = {
  lastPage: "",
  views: [],
  posts: [],
 
};

function reducer ( state, action ) {
   console.log( action.payload );
  switch ( action.type ) {
    case "toggle_views": {
      return {
        ...state,
        views: action.payload,
      };
    } 
    case "select_posts": {
      const newPosts = state.posts.indexOf( action.payload ) === -1 ? [ ...state.posts, action.payload ] : state.posts.filter( post => post !== action.payload ? post : null );
      return {
        ...state,
        posts: newPosts,
      };
    }
    default:
      throw new Error( "Bad action in context" );
  }
}

const ContextProvider = ( { children } ) => {

  const [ state, dispatch ] = useReducer( reducer, initialState );

  return (
    <StateContext.Provider value={ state }>
      <DispatchContext.Provider value={ dispatch }>
        { children }
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default ContextProvider;
