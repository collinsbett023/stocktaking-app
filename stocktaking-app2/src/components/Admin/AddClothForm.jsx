import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddClothForm = ({close}) => {
    const [image, setImage] = useState("")
    const [brand, setBrand] = useState("")
    const [type, setType] = useState("")
    const [size, setSize] = useState("")
    const [available, setAvailable] = useState("")
    const [price, setPrice] = useState("")
    const navigate = useNavigate()
    
    function setDefaultImage(e) {
      if (image === '') {
          setImage('src/assets/No-image.jpg')
      } else {
          setImage(e.target.value)
      }
  }

    const handleSubmit = (e) => {
        e.preventDefault()
        const jsonData = JSON.stringify({
            image: image,
            brand: brand,
            type: type,
            size: size,
            available: available,
            price: price,
        })
        
        fetch(`https://inventory-data-6knk.onrender.com/clothes`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: jsonData,
        })

        alert('Cloth Item Added')
        navigate('/admin')
        window.location.reload()
    }
    return (
        <div id='form-div'>
            <form
                onSubmit={handleSubmit}
                id='form'
            >
                <div className='form-title'>
                    <h2>Add Cloth Item</h2>
                    <i
                        className='bx bxs-x-circle bx-sm bx-cancel'
                        onClick={close}
                    ></i>
                </div>
                <div>
                    <input
                        type='text'
                        value={image}
                        name='image'
                        placeholder='Image Link'
                        onChange={(e) => setDefaultImage(e)}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        value={brand}
                        name='brand'
                        placeholder='Brand'
                        onChange={(e) => setBrand(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        value={type}
                        name='type'
                        placeholder='Type'
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='text'
                        value={size}
                        name='size'
                        placeholder='Size'
                        onChange={(e) => setSize(e.target.value)}
                    />{' '}
                </div>
                <div>
                    <input
                        type='text'
                        value={available}
                        name='available'
                        placeholder='Available'
                        onChange={(e) => setAvailable(e.target.value)}
                    />{' '}
                </div>
                <div>
                    <input
                        type='text'
                        value={price}
                        name='price'
                        placeholder='Price'
                        onChange={(e) => setPrice(e.target.value)}
                    />{' '}
                </div>
                <div>
                    <button
                        type='submit'
                        className='add-cloth-btn'
                    >
                        Add Cloth
                    </button>{' '}
                </div>
            </form>
        </div>
    )
}

export default AddClothForm
