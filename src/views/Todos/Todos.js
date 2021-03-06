import React from 'react';
import TodosList from "../../components/TodosList";
import Filter from "../../components/Filter";
import Sort from "../../components/Sort";
import Modal from "../../components/Modal";


import registerModalComponents from "../../registerModalComponents";
class Todos extends React.Component {
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

export default Todos;