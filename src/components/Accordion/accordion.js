import React from 'react';


export default class Accordion extends React.Component {
    state = {
        selectedId : null
    }
    goals = [
        {
            id: 1,
            title: 'make the bed',
            description: 'i will make my bed every day',
            points: 5,
            end_date: '2020-01-01',
            complete: false
        },
        {
            id: 2,
            title: 'take out trash',
            description: 'i will make my bed every day',
            points: 5,
            end_date: '2020-01-01',
            complete: false
        },
        {
            id: 3,
            title: 'mop the kitchen',
            description: 'i will make my bed every day',
            points: 5,
            end_date: '2020-01-01',
            complete: false
        }
        
    ] 

    selectedId = null;

    populate = (goals) => {
        let html = [];
        for(let goal of goals){
           if(goal.id === this.state.selectedId){
            html.push(
                <li key = {goal.id}>
                    <button onClick={() => {
                        this.setState({selectedId : goal.id})
                        console.log(this.state)
                    }}>{goal.title}</button>
                    <p>{goal.description}</p>
                    <p>{goal.points}</p>
                    <p>{goal.end_date}</p>
                    <p>{goal.complete}</p>
                </li>
            )
           } else {
            html.push(
                <li key = {goal.id}>
                    <button onClick={() => {
                        this.setState({selectedId : goal.id})
                        console.log(this.state)
                    }}>{goal.title}</button>
                </li>
            )
           }
        }
        return html;
    }

    render = () => {
        return(
            <ul>
                {this.populate(this.goals)}
            </ul>
        )
    }
}

