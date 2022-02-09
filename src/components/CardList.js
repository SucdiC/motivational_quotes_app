import React from 'react';
import Card from './Card';


const CardList = ({quotes}) => {
    return (
        <div>
            {
                quotes.map((entry,i) => {
                    return (
                        <Card
                            key= {i}
                            text= {quotes[i].text}
                            author= {quotes[i].author} 
                        
                        />
                    );

                }

                )
        
            }
        </div>
    );
}

export default CardList;