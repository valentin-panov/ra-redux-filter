import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { save, reset, setFilter } from '../reducers/SliceServiceList';

export default function ServiceEditor() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.serviceList);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [id, setId] = useState('');

  const onNewServiceSubmitHandler = ({ event, payload }) => {
    event.preventDefault();
    dispatch(save(payload));
    formReset();
  };

  const formReset = () => {
    setName('');
    setPrice('');
    setId('');
    dispatch(reset());
  };

  useEffect(() => {
    const editItem = store.editItem;
    if (editItem) {
      setName(store.editItem.name);
      setPrice(store.editItem.price);
      setId(store.editItem.id);
    } else {
      setName('');
      setPrice('');
      setId('');
    }
  }, [store.editItem]);

  useEffect(() => {
    dispatch(setFilter({ name, price }));
  }, [dispatch, name, price]);

  return (
    <div className='card'>
      <form
        className={'new-post-input'}
        noValidate
        autoComplete='off'
        onSubmit={(event) => {
          onNewServiceSubmitHandler({ event, payload: { id, name, price } });
        }}
      >
        <div className='input-holder'>
          <TextField
            value={name}
            onInput={(e) => setName(e.target.value)}
            id='name'
            label='Имя сервиса'
            variant='outlined'
            style={{ width: '50%' }}
          />
          <TextField
            value={price}
            onInput={(e) => setPrice(e.target.value)}
            id='price'
            label='Стоимость сервиса'
            variant='outlined'
            style={{ width: '50%' }}
          />
        </div>
        <div className='btn-holder'>
          <Button variant='contained' color='primary' type='submit'>
            Save
          </Button>
          {(name || price) && (
            <Button
              variant='contained'
              color='secondary'
              onClick={() => formReset()}
            >
              Cancel
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
