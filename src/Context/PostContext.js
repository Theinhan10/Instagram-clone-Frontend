import React, { createContext, useContext, useReducer } from 'react';

// Create a new context and store it in const
export const PostContext = createContext();

// Define the reducer function to manage post state
export const postReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        posts: action.payload,
      };
    case 'ADD_POST':
      return {
        posts: [action.payload, ...state.posts],
      };
    case 'DELETE_POST':
      return {
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };
    // Add other cases for different actions like updating or deleting posts
    default:
      return state;
  }
};

// Provide the context to our app component tree so that our components can access it
export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, {
    posts: [],
  });

  return (
    <PostContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

// Custom hook to use the post context
export const usePostContext = () => {
  return useContext(PostContext);
};