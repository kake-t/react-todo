import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import TodoList from './TodoList';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

const TodoForm = () => {
  const classes = useStyles();

  // Todoの入力値
  const [todoValue, setTodoValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const newTodoList = () => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length,
        content: todoValue,
      },
    ]);
    setTodoValue('');
    console.log(todoList);
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={todoValue} onChange={(event) => setTodoValue(event.target.value)} />
        <Button variant="contained" onClick={newTodoList}>作成</Button>
      </form>
      <TodoList todoList={todoList} />
    </div>
  )
}

export default TodoForm
