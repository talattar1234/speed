import ENUM from './enum';
import TodoModal from './components/TodoModal';
import {registerComponentsPerType} from './logics/modalLogic';

const registerModal = () => {
    registerComponentsPerType(ENUM.ObjectType.TODO,TodoModal)
}

export default registerModal;