import Modal from './components/Modal';
import ENUM from './enum';
import TodoModal from './components/TodoModal';

const registerModal = () => {
    Modal.registerComponentsPerType(ENUM.ObjectType.TODO,TodoModal)
}

export default registerModal;