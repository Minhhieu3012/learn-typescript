const fetchUser = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    //   const data = (await res.json()) as IUser[];
    const data = await res.json();
    console.log(">>> check data:", data);
};
fetchUser();
export {};
