import React from "react";

const AddExports = () => {
    const handleExportForm=(e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        const price = e.target.price.value
        const rating = e.target.rating.value
        const origin = e.target.Origin.value
        const quantity = e.target.quantity.value

        console.log(name,image,price,rating,origin,quantity)

        fetch('',{})
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })

    }
  return (
    <div>
      <form onSubmit={handleExportForm}>
        <fieldset className="fieldset w-8/12 mx-auto">
          
          <label className="label">Product Name</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Product Name"
            name="name"
          />

          <label className="label">Product Image</label>
          <input
            type="url"
            className="input"
            placeholder="Enter Product Image"
            name="image"
          />

          <label className="label">Price</label>
          <input
            type="text"
            className="input"
            placeholder="Enter price"
            name="price"
          />

          <label className="label">Rating</label>
          <input
            type="text"
            className="input"
            placeholder="Enter rating"
            name="rating"
          />

          <label className="label">Origin Country</label>
          <input
            type="text"
            className="input"
            placeholder="Enter Origin Country"
            name="Origin"
          />

          <label className="label">Quantity</label>
          <input
            type="text"
            className="input"
            placeholder="Enter available quantity"
            name="quantity"
          />

          <button className="btn w-full border-none bg-primary text-white hover:bg-primary/80">
            Add Export
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddExports;
