import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import ProductCard from './components/ProductCard';
import Todo, { FinishedTodo, CanceledTodo } from './components/Todo';
import ChildComponent from './components/ChildComponent';
import TodoCard from './components/NewTodo';

function App() {
  // const [messageFromParent, setMessageFromParent] = useState('Xin chào!? tao là tanhlucky');

  // const getTime = () => {
  //   setMessageFromParent(Math.random().toString());
  // }

  // const [listData, setListData] = useState([
  //   {
  //     id: 1,
  //     name: 'Giày Trainer Dropset 2.0 Eartch',
  //     price: 3500000,
  //     image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/b65a2dcc5e4140d09e3cbbaf9b886473_9366/gi%C3%A0y-trainer-dropset-2.0-earth.jpg',
  //     description: 'Đây là dataplaceholder của sản phẩm'
  //   },
  //   {
  //     id: 2,
  //     name: 'Giày Trainer Dropset 2',
  //     price: 3500000,
  //     image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/f574a527a4b74c20ba62ffada1df754a_9366/gi%C3%A0y-trainer-dropset-2.jpg',
  //     description: 'Đây là dataplaceholder của sản phẩm'
  //   },
  //   {
  //     id: 3,
  //     name: 'Giày Alphabounce+',
  //     price: 2400000,
  //     image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/304999ba3dd4461a8da35694b05f2be2_9366/gi%C3%A0y-alphabounce_-sustainable-bounce.jpg',
  //     description: 'Đây là dataplaceholder của sản phẩm'
  //   },
  //   {
  //     id: 4,
  //     name: 'Giày Galaxy 6',
  //     price: 1500000,
  //     image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/a5bc39ff24324facbd765c68a0a3c3e6_9366/gi%C3%A0y-galaxy-6.jpg',
  //     description: 'Đây là dataplaceholder của sản phẩm'
  //   },
  //   {
  //     id: 5,
  //     name: 'Giày GAZELLE',
  //     price: 2500000,
  //     image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d3948863a41405eb408674f0eb2b247_9366/gazelle.jpg',
  //     description: 'Đây là dataplaceholder của sản phẩm'
  //   },
  //   {
  //     id: 6,
  //     name: 'Giày Ultraboost 1.0',
  //     price: 4500000,
  //     image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/462311ac22f9422cbf0e9fa443fabfa2_9366/gi%C3%A0y-ultraboost-1.0.jpg',
  //     description: 'Đây là dataplaceholder của sản phẩm'
  //   }
  // ]);

  const [todos, setTodos] = useState([
    {
      id: 1,
      content: 'Lam BTVN',
      status_id: 1,
      created_at: new Date().toLocaleString(),
    },
    {
      id: 2,
      content: 'Tap Gym',
      status_id: 2,
      created_at: new Date().toLocaleString(),
    },
    {
      id: 3,
      content: 'Di Ia',
      status_id: 1,
      created_at: new Date().toLocaleString(),
    },
    {
      id: 4,
      content: 'Di An',
      status_id: 3,
      created_at: new Date().toLocaleString(),
    }
  ]);

  const [todoContent, setTodoContent] = useState('');

  // const [counter, setCounter] = useState(0); //counter la 1 bien dai dien cho gia tri cua state, setCounter la ham de thay doi gia tri cua state, 0 la gia tri khoi tao cua state
  // const increase = ()=>{
  //   setCounter(counter+1)
  // };
  // const decrease = ()=>{
  //   setCounter(counter-1)
  // };

  // const [newTodoContent, setNewTodoContent] = useState('');

  // const AddTodo = () => {
  //   if (newTodoContent.trim() !== '') {
  //     const newTodo = {
  //       id: todos.length + 1,
  //       content: newTodoContent,
  //       status_id: '1',
  //       created_at: new Date().toLocaleString(),
  //     };
  //     setTodos([...todos, newTodo]);
  //     setNewTodoContent('');
  //   }
  // };

  // const TodoChange = (event) => {
  //   setNewTodoContent(event.target.value);
  // };

  // const renderListData = () => {
  //   return listData.map((item) => (
  //     <ProductCard key={item.id} product={item} />
  //   ));
  // }

  // const renderTodos = (filteredTodos) => {
  //   return filteredTodos.map((todo) => {
  //     if (todo.status_id === '1') {
  //       return <Todo key={todo.id} todo={todo} onStatusChange={onStatusChange} />;
  //     } else if (todo.status_id === '2') {
  //       return <FinishedTodo key={todo.id} todo={todo} onStatusChange={onStatusChange} />;
  //     } else if (todo.status_id === '3') {
  //       return <CanceledTodo key={todo.id} todo={todo} onStatusChange={onStatusChange} />;
  //     }
  //     return null;
  //   });
  // };

  // const newTodos = todos.filter((item) => item.status_id === '1');
  // const finishedTodos = todos.filter((item) => item.status_id === '2');
  // const canceledTodos = todos.filter((item) => item.status_id === '3');

  // const onStatusChange = (id, newStatus) => {
  //   const updatedTodos = todos.map(todo => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //         status_id: newStatus,
  //       };
  //     }
  //     return todo;
  //   });
  //   setTodos(updatedTodos);
  // };


  const renderListData = (status_id) => {
    const matchStatusTask = todos.filter((task) => {
      return task.status_id === status_id;
    })

    const myArray = matchStatusTask.map(task => {
      return <TodoCard key={task.id} task={task} updatedStatus={updatedStatus}></TodoCard>
    });
    return myArray;
  }

  const updatedStatus = (task, status_id) => {
    const index = todos.findIndex((todo) => {
      return todo.id === task.id;
    });
    if (index === -1) {
      alert('khong co phan tu thoa man');
      return;
    }
    let obj = { ...todos[index] };
    obj.status_id = status_id;
    const newArray = [...todos];
    newArray.splice(index, 1, obj);
    setTodos(newArray);
  };

  const handleOnChange = event => {
    const target = event.target;
    const value = target.value;
    setTodoContent(value);
  }
  const submitTodo = () => {
    if (!todoContent.trim()) {
      alert('vui long nhap lai noi dung');
      return;
    }
    const newTodo = {
      id: todos.length + 1,
      content: todoContent,
      status_id: 1,
      created_at: new Date().toLocaleString(),
    }
    const newArray = [...todos, newTodo];
    setTodoContent('');
    setTodos(newArray);
  }

  return (
    <div className='App'>
      <div className='container'>
        <h1>Render List Data</h1>
        <div className="input-group input-group-lg mb-3 mt-3">
          <button type='button' className="btn btn-primary" onClick={submitTodo}>Them</button>
          <input type='text' className="form-control" onChange={handleOnChange} value={todoContent} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </div>
        <div className='row'>
          <div className='col-4'>
            <h3 className='bg-primary text-center text-white rounded py-1'>Moi</h3>
            {renderListData(1)}
          </div>
          <div className='col-4'>
            <h3 className='bg-success text-center text-white rounded py-1'>Hoan Thanh</h3>
            {renderListData(2)}
          </div>
          <div className='col-4'>
            <h3 className='bg-danger text-center text-white rounded py-1'>Huy</h3>
            {renderListData(3)}
          </div>
        </div>
      </div>
    </div>


    // <div className='App'>
    //   <div className='container'>
    //     <h1>Render List Data</h1>
    //     <h2>Day la counter cua phan tu cha: {counter}</h2>
    //     <div>
    //       {/* <button onClick={increase}>+</button> */}
    //       <button onClick={decrease}>-</button>
    //     </div>
    //     <ChildComponent number={counter} name='ABC' increase={increase}>
    //       <h4>Text nay tu component cha</h4>  
    //     </ChildComponent>
    //   </div>
    // </div>


    // <div className='App'>
    //   <div className='container'>
    //     <h1>Render List Data</h1>
    //     <div className='row'>
    //       {renderListData()}
    //     </div>
    //     <h1>Render List Todo</h1>
    //     <div className='row'>
    //       <div className="input-group input-group-lg mb-3 mt-3">
    //         <button type='button' class="btn btn-primary" onClick={AddTodo}>Add Todo</button>
    //         <input type='text' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={newTodoContent}
    //           onChange={TodoChange} />
    //       </div>
    //       <div className='col-4'>
    //         <h3 className='text-center bg-primary text-white rounded py-2'>Mới</h3>
    //         {renderTodos(newTodos)}
    //       </div>
    //       <div className='col-4'>
    //         <h3 className='text-center bg-success text-white rounded py-2'>Đã Hoàn Thành</h3>
    //         {renderTodos(finishedTodos)}
    //       </div>
    //       <div className='col-4'>
    //         <h3 className='text-center bg-danger text-white rounded py-2'>Đã Hủy</h3>
    //         {renderTodos(canceledTodos)}
    //       </div>
    //     </div>
    //   </div>
    // </div>



    // <div className='App'>
    //    <p className='{buttonCss.myComponent}'>{messageFromParent}</p>
    //   <Welcome text={messageFromParent} color="red" random={getTime}></Welcome>
    // </div>
    // <div className='App'>
    //   <h1>Hello World</h1>
    //   <Welcome></Welcome>
    //   <GoodBye></GoodBye>
    //   <button type='button' className='btn btn-success'
    //   style={styleButton}>
    //     success
    //   </button>
    // </div>
  );
}

export default App;
