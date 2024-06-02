import useFetch from "./Index";

const Test = () => {
  const { data, error, loading } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  return (
    <>
      <h2>Test Component</h2>

      {loading ? <h4>Loading! Please wait.</h4> : null}
      {error ? <h4>{error} </h4> : null}

      {/* {data?.products?.length  ?  data.products.map(()=> {}) : null } */}
      {data && data.products && data.products.length
        ? data.products.map((items) => {
            return <h4 key={items.id}>{items?.title}</h4>;
          })
        : null}
    </>
  );
};

export default Test;
