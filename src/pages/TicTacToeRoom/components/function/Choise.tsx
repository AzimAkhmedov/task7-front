import React from 'react';
import ChoiceButton from './ChoiseButton'

const Choice = ({logo, onChoice}:any) => {
    return (
        <>
        <div className='choice-container'>
            <ChoiceButton onChoice={onChoice} type='primary' choice='new' label='Start New'/> 
            <ChoiceButton onChoice={onChoice} type='secondary' choice='join' label='Join Game'/> 
        </div>
        </>
    );
}

export default Choice;