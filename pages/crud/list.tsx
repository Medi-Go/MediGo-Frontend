import React, { useState } from 'react';
import { deleteById, putById, Item } from '../../utils/crud';
import { useMutation, useQueryClient } from 'react-query';
import { queryKeys } from '../../utils/crud';

const List = ({ listData }) => {
  const queryClient = useQueryClient();
  const [editable, setEditable] = useState(false);
  const [titleInputVal, setTitleInputVal] = useState<string>('');
  const [bodyInputVal, setBodyInputVal] = useState<string>('');
  const [clickedId, setClickedId] = useState<number>(1);
  const deleteItem = useMutation((id: number) => deleteById(id), {
    onSuccess: () => {
      console.log('delete');
      queryClient.invalidateQueries(queryKeys.posts);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  //   const editItem = useMutation((item: Item) => createItem(item), {
  //     onSuccess: (data) => {
  //       console.log(data);
  //       setEditable(!editable);
  //       queryClient.invalidateQueries(queryKeys.posts);
  //     },
  //     onError: (error) => {
  //       console.log(error);
  //     },
  //   });
  const putItem = useMutation((item: Item) => putById(item.id, item.body), {
    onSuccess: () => {
      console.log('put success');
      setEditable(!editable);
      queryClient.invalidateQueries(queryKeys.posts);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const patchItem = useMutation((item: Item) => putById(item.id, item.body), {
    onSuccess: () => {
      console.log('patch success');
      setEditable(!editable);
      queryClient.invalidateQueries(queryKeys.posts);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleDelete = (id: number) => {
    deleteItem.mutate(id);
  };
  const handlePut = (id: number, title: string, body: string) => {
    setEditable(true);
    setClickedId(id);
    setTitleInputVal(title);
    setBodyInputVal(body);
    const editObj = {
      id: clickedId,
      title: titleInputVal,
      body: bodyInputVal,
    };
    putItem.mutate(editObj);
  };

  const handlePatch = (id: number, title: string, body: string) => {
    setEditable(true);
    setClickedId(id);
    setTitleInputVal(title);
    setBodyInputVal(body);
    const editObj = {
      id: clickedId,
      title: titleInputVal,
      body: bodyInputVal,
    };
    patchItem.mutate(editObj);
  };

  return (
    <div>
      {listData?.map(({ id, title, body }) => (
        <ul key={id}>
          <li>id : {id}</li>
          {editable && clickedId === id ? (
            <div>
              <label>
                title :
                <input
                  value={titleInputVal}
                  placeholder="수정할 제목을 입력해주세요"
                  onChange={(e) => setTitleInputVal(e.target.value)}
                />
              </label>
              <label>
                body :
                <input
                  value={bodyInputVal}
                  placeholder="수정할 내용을 입력해주세요"
                  onChange={(e) => setBodyInputVal(e.target.value)}
                />
              </label>
            </div>
          ) : (
            <div>
              <li>title : {title}</li>
              <li>body: {body}</li>
            </div>
          )}

          <button onClick={() => handleDelete(id)}>삭제하기</button>
          <button onClick={() => handlePut(id, title, body)}>
            {editable && clickedId === id ? (
              <span>제출하기(put)</span>
            ) : (
              <span>수정하기(put)</span>
            )}
          </button>
          <button onClick={() => handlePatch(id, title, body)}>
            {editable && clickedId === id ? (
              <span>제출하기(patch)</span>
            ) : (
              <span>수정하기(patch)</span>
            )}
          </button>
        </ul>
      ))}
    </div>
  );
};

export default List;
