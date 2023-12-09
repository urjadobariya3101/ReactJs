import axios from "axios";
import { useEffect, useRef, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [updateData, setUpdatedata] = useState([]);

  const title = useRef();
  const author = useRef();

  const getData = () => {
    axios.get("http://localhost:3001/posts").then((res) => {
      setData(res.data || []);
    });
  };

  const addData = () => {
    const result = {
      title: title.current.value,
      author: author.current.value,
    };
    axios.post("http://localhost:3001/posts", result).then((res) => {
      console.log(res.data);
      setData([...data, res.data]);
      title.current.value = "";
      author.current.value = "";
    });
  };

  const deleteData = (id) => {
    console.log(id);

    axios.delete(`http://localhost:3001/posts/${id}`).then((res) => {
      const deleteData = data.filter((item) => item.id !== id);
      setData(deleteData);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const finalUpdate = (e) => {
    setUpdatedata({...updateData,[e.target.name]:e.target.value});
  }
  console.log(updateData);
  const updateData_ = (id,ind_) => {
    const old_data = data[ind_]
    setUpdatedata(old_data)
  }
  const final = () => {
    axios.put(`http://localhost:3001/posts/${updateData.id}`,updateData).then((res)=>{
      console.log(res.status);
    })
    getData()
  }

  return (
    <div>
      <input type="text" name="title" ref={title} />
      <input type="text" name="author" ref={author} />
      <button onClick={addData}>Submit</button>
      <br />

      <input
        type="text"
        name="title"
        value={updateData.title}
        onChange={finalUpdate}
    />
      <input
        type="text"
        name="author"
        value={updateData.author}
        onChange={finalUpdate}
      />
      <button onClick={final}>Update</button>
      <button>Cancel</button>

      <div>
        {data?.map((val, ind) => (
          <div key={ind}>
            <h1>{val.id}</h1>
            <h2>{val.title}</h2>
            <h3>{val.author}</h3>
            <button onClick={() => deleteData(val.id)}>Delete</button>
            <button onClick={() => updateData_(val.id, ind)}>Update</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
