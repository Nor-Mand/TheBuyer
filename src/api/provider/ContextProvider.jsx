//
/* dummyjson.com
    
        1. /products
        2. /carts
        3. /users
        4. /posts
        5. /comments
        6. /quotes
        7. /todos
        8. /http
        9. /auth
    */

//

import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useEffect } from "react";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [todos, setTodos] = useState([]);

  // 1. Endpoint /Products
  const getProducts = async () => {
    try {
      const url = "https://dummyjson.com/products";
      const { data } = await axios(url);
      setProducts(data.products);
    } catch (error) {
      console.log(error.message);
    }
  };

  // 2. EndPoint /carts
  const getCarts = async () => {
    try {
      const url = "https://dummyjson.com/carts";
      const { data } = await axios(url);
      setCarts(data.carts);
    } catch (error) {
      console.log(error.message);
    }
  };

  // 3. Endpoint /users
  const getUsers = async () => {
    try {
      const url = "https://dummyjson.com/users";
      const { data } = await axios(url);
      setUsers(data.users);
    } catch (error) {
      console.log(error.message);
    }
  };

  // 4. Endpoint /posts
  const getPosts = async () => {
    try {
      const url = "https://dummyjson.com/posts";
      const { data } = await axios(url);
      setPosts(data.posts);
    } catch (error) {
      console.log(error.message);
    }
  };

  // 5. Endpoint /comments
  const getComments = async () => {
    try {
      const url = "https://dummyjson.com/comments";
      const { data } = await axios(url);
      setComments(data.comments);
    } catch (error) {
      console.log(error.message);
    }
  };

  // 6. Endpoint /quotes
  const getQuotes = async () => {
    try {
      const url = "https://dummyjson.com/quotes";
      const { data } = await axios(url);
      setQuotes(data.quotes);
    } catch (error) {
      console.log(error.message);
    }
  };

  // 7. Endpoint /todos
  const getTodos = async () => {
    try {
      const url = "https://dummyjson.com/todos";
      const { data } = await axios(url);
      setTodos(data.todos);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts();
    getCarts();
    getUsers();
    getPosts();
    getComments();
    getQuotes();
    getTodos();
  }, []);
  return (
    <StoreContext.Provider
      value={{
        products,
        carts,
        users,
        posts,
        comments,
        quotes,
        todos,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreProvider };

export default StoreContext;
