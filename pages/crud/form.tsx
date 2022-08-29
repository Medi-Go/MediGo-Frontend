import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { createItem, Item } from './service';
import { queryKeys } from './queryKeys';
import type { FC } from 'react';

interface IFormInput {
  title: string;
  body: string;
}

const Form: FC = () => {
  const queryClient = useQueryClient();
  const [id, setId] = useState(1);

  const addItem = useMutation((item: Item) => createItem(item), {
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(queryKeys.posts);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const Item = {
      id: id,
    };
    setId(id + 1);
    const newItem = Object.assign(Item, data);
    addItem.mutate(newItem);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        title
        <input type="text" placeholder="title" {...register('title')} />
      </label>
      <br />
      <label>
        body
        <input type="text" placeholder="body" {...register('body')} />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Form;
