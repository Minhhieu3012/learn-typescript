export {};

interface IDataString {
  data: string;
}

interface IDataNumber {
  data: number;
}

interface IData<T> {
  data: T;
}

const a: IData<string> = { data: "ohito" };

const b: IData<number> = { data: 123 };

interface IAPIResponse<T> {
  status: number;
  data: T;
}

interface IUser {
  id: number;
  title: string;
  author: string;
  content: string;
}

const fetcUsers = async () => {
  const res = await fetch("http://localhost:8000/blogs");
  const dataAPI = (await res.json()) as IUser[];

  const result: IAPIResponse<IUser[]> = {
    status: 200,
    data: dataAPI,
  };

  //   result.data.map(item=>item.author)
};
