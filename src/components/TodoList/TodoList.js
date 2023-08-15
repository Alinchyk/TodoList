import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from 'redux/operations';
import { getTasks } from 'redux/selectors';
import Loader from 'components/Loader/Loader';

const TodoList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (!tasks) {
    return <Loader />;
  }

  return (
    <div>
      <ul>
        {tasks.map(({ id, task }) => (
          <li key={id}>
            {task}
            <button type="button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
