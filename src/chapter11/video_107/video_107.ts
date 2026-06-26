export {};

interface IUser {
  id: number;
  title: string;
  author: string;
  content: string;
}

const fetchUser = async () => {
  const res = await fetch("http://localhost:8000/blogs");
  //   const data = (await res.json()) as IUser[];
  const data: IUser[] = await res.json();
  console.log(">>> check data:", data);
};

fetchUser();
