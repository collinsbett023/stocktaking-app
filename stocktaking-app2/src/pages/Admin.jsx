import { useState } from 'react'
import AddClothForm from '../components/Admin/AddClothForm'
import AddItem from '../components/Admin/AddItem'
import '../css/admin.css'
import AdminItemCard from '../components/Admin/AdminItemCard'
import Search from '../components/Admin/Search'

function Admin({ clothes, deleteCloth }) {
    const [openModal, setopenModal] = useState(false)

    const [query, setQuery] = useState('')

    // console.log(clothes[0])

    const filteredClothes = clothes.filter((item) => {
        const brandSearch = item.brand
            .toLowerCase()
            .includes(query.toLowerCase())
        const typeSearch = item.type.toLowerCase().includes(query.toLowerCase())

        return brandSearch || typeSearch
    })

    const clothItems = filteredClothes.map((item) => (
        <div
            className='item-div'
            key={item.id}
        >
            <AdminItemCard
                id={item.id}
                img={item.image}
                brand={item.brand}
                type={item.type}
                size={item.size}
                available={item.available}
                price={item.price}
                deleteItem={() => {
                    deleteCloth(item.id)
                }}
            />
        </div>
    ))

    const openForm = () => {
        return setopenModal(true)
    }

    const closeForm = () => {
        return setopenModal(false)
    }

    return (
        <>
            <div
                id='search-add'
                className={openModal ? 'blur-background' : ''}
            >
                <Search
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <div>
                    <AddItem toggle={openForm} />
                </div>
            </div>
            {openModal && <AddClothForm close={closeForm} />}
            <div className={openModal ? 'blur-background' : ''}>
                <div className='container'>
                    <div className='stock_items'>{clothItems}</div>
                </div>
            </div>
        </>
    )
}

export default Admin
