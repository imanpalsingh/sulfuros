import Action from '../action';
import { FaRegTrashAlt as Icon } from 'react-icons/fa';

const Close = () => {
  return <Action Icon={Icon} onClick={() => false} />;
};

export default Close;
