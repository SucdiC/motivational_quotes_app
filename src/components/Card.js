import React from 'react';

const Card = ({text, author}) => {
    if ({author}==null){
        return {author} = 'unknown'
    }else {

        return (
            <div className='tc bg-washed-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
                <div>
                    <p className='i'>{text}</p>
                    <h4 className='f6'>{author}</h4>
                </div>

            </div>

        );
    }
}
export default Card; 
