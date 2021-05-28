import React, { useState } from 'react'
import './_categorybar.scss'


const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh',
 ]
const CategoryBar = () => {
const [activeElement, setActiveElement] = useState('All')

const handleClick=(value)=>{
    setActiveElement(value)

}

    return (
        <div className='categoriesBar'>
            {keywords.map((value, i) => (
            <span   key={i}
            onClick={()=> handleClick(value)} 
            className={ activeElement === value ? 'active' : ''}> 
               
               {value}
            </span>
         ))}
            
        </div>
    )
}

export default CategoryBar
