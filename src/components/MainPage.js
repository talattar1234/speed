import React from 'react';
import ControlledInput from "../components/ControlledInput";
import ImageTest from "../components/ImageTest";
import Counter from "../components/Counter";
import TodosList from "../components/TodosList";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import Modal from "../components/Modal";
import registerModalComponents from "../registerModalComponents";
class MainPage extends React.Component {
    componentDidMount (){
        registerModalComponents();
    }

    render(){
        return (
        <div>
            {/*
            <ControlledInput />
            <Counter />
            <ImageTest src="images/minion.jpg" />
            */}
            <Sort />
            <Filter filterTitle="Filter by description" />
            <TodosList title="All Items"/>
            <Modal />
        </div>
    )}
}

export default MainPage;