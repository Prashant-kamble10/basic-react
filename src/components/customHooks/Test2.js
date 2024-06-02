import useFetch from "./Index";

const Test2 = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    {}
  );

  return (
    <>
      <h2>Test2 Component</h2>

      {loading ? <h4>Loading! Please wait.</h4> : null}
      {error ? <h4>{error} </h4> : null}

      {/* {data?.length ? data.map(()=>{}) : null} */}

      {data && data.length
        ? data.map((item) => {
            return <h4 key={item.id}>{item.email}</h4>;
          })
        : null}
    </>
  );
};

export default Test2;
