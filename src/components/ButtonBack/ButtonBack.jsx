import { useNavigate } from 'react-router-dom';

import { Button } from './ButtonBack.styled';

const ButtonBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <Button type="button" onClick={goBack}>
      <span>&lArr;</span> Go back
    </Button>
  );
};

export default ButtonBack;
