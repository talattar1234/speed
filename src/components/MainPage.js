import React from 'react';
import ControlledInput from "../components/ControlledInput";
import ImageTest from "../components/ImageTest";
import Counter from "../components/Counter";
import TodosList from "../components/TodosList";
import Modal from "../components/Modal";
class MainPage extends React.Component {
    
    render(){
        return (
        <div>
            This is the main page
            <ControlledInput />
            <Counter />
            <ImageTest src="images/minion.jpg" />
            <TodosList />
            <Modal />
        </div>
    )}
}

export default MainPage;