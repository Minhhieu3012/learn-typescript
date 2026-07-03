const a = { data: "ohito" };
const b = { data: 123 };
const fetcUsers = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const dataAPI = (await res.json());
    const result = {
        status: 200,
        data: dataAPI,
    };
    //   result.data.map(item=>item.author)
};
export {};
