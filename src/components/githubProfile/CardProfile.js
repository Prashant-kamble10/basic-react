const CardProfile = ({ user }) => {
  const { login, id, public_repos, html_url, followers, following, bio, 
    created_at
     } = user;

     const date = new Date(created_at)
     const joined = date.toDateString()
  return (
    <>
      <h2>Name : {login}</h2>
      <h2>id : {id}</h2>
      <h2>Public repos : {public_repos}</h2>
      <h2>Link : {html_url}</h2>
      <h2>Followers : {followers}</h2>
      <h2>Following : {following}</h2>
      <h2>Bio : {bio}</h2>
      <h2>Joined github : {joined}</h2>
    </>
  );
};

export default CardProfile;
