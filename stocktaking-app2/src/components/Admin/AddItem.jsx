

function AddItem({toggle}) {


    return (
      <div className='add-item' >
          
          <button onClick={toggle} className="btn-add">Add</button>
      </div>
    )
  }
  
  export default AddItem