import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productGet } from "./redux/productSlice";
import "./App.css";
import Add from "./components/Add";
const App = () => {
  const { isLoading, isError, data } = useSelector((state) => state.product);
  console.log(isLoading, isError, data);
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false);
  const handleAdd = () => {
    setAdd(true);
  };
  useEffect(() => {
    dispatch(productGet());
  }, []);
  return (
    <div>
      {isLoading ? <h1>Loading . . . . .</h1> : null}
      {isError ? isError : null}
      {add ? <Add setAdd={setAdd} /> : null}
      <button className="btn" onClick={handleAdd}>
        Create Product
      </button>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img
                    src={item.image}
                    width={"80px"}
                    height={"85px"}
                    alt={item.name}
                  />
                </td>
                <td>{item.name}</td>
                <td>Price: {item.price}</td>
                <td>{item.category}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
