import { useParams } from 'react-router-dom'
 
function User() {
  const { id } = useParams();

  return <div>Hello user { id } !</div>;
}

export default User;
