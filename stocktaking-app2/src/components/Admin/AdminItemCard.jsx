import { Link } from 'react-router-dom'

function AdminItemCard({
    id,
    img,
    brand,
    type,
    size,
    available,
    price,
    deleteItem,
}) {
    return (
        <div className='card'>
            <div className='img-div'>
                <img
                    src={img}
                    alt=''
                />
            </div>
            <div className='card-details'>
                <p>Brand: {brand}</p>
                <p>Type: {type}</p>
                <p>Sizes: {size} </p>
                <p>Available: {available}</p>
                <p>Amount: {price}</p>
            </div>
            <div className='btn-div'>
                <Link to={`/edit/${id}`}>
                    <button className='edit-btn'>Edit</button>
                </Link>

                <button
                    onClick={() => {deleteItem(id)}}
                    className='delete-btn'
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default AdminItemCard
