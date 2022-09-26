import type { NextPage } from 'next';
import { useQuery } from 'react-query';
import { getItemAll } from '../../utils/crud';
import { queryKeys } from '../../utils/crud';
import Form from './form';
import List from './list';
import { useEffect } from 'react';

const Crud: NextPage = () => {
  const { data, status } = useQuery(queryKeys.posts, getItemAll);
  useEffect(() => {
    console.log(status);
    console.log(data);
  });
  return (
    <>
      <div>crud page</div>
      <Form />
      <div>post 정보</div>
      {status === 'loading' ? <div>loading...</div> : <List listData={data} />}
    </>
  );
};

export default Crud;
