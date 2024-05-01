

const CardProfile = ({ user }) => {
  const { login, id, public_repos, html_url, followers, following, bio, 
    created_at
     } = user;

     const date = new Date(created_at)
     const joined = date.toDateString()
  return (
    <>
      <h4>Name : {login}</h4>
      <h4>id : {id}</h4>
      <h4>Public repos : {public_repos}</h4>
      <h4>Link : <a href={html_url}>Github Repository Link</a></h4>
      <h4>Followers : {followers}</h4>
      <h4>Following : {following}</h4>
      <h4>Bio : {bio}</h4>
      <h4>Joined github : {joined}</h4>
    </>
  );
};

export default CardProfile;
