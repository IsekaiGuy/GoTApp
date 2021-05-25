import React, {useState, useEffect} from 'react';
import './itemDetails.css';

export const Field = ({ item, field, label }) => {

    return (
        <li className="list-group-item justify-content-between">
            <span className="term">{label}</span>
            <span>   {item[field]}</span>
        </li>
    )
}

const ItemDetails = (props) => {
    const [item, setItem] = useState(null);
    const { getData } = props;

    useEffect(() => {
        const updateItem = () => {
            const { itemId } = props;
            if (!itemId) {
                return;
            }
            getData(itemId)
                .then((res) => setItem(res))
                .catch(error => { throw new Error("We have a problem:" + error) });
            }

        updateItem();
    }, [props]);

    
        
        if (item === null) {
            return <span className="select-error">Please select character</span>;
        }

        const {name} = item;

        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(props.children, (child) => {
                            return React.cloneElement(child, {item});
                        })
                    }
                </ul>
            </div>
        );
    
}

export default ItemDetails;