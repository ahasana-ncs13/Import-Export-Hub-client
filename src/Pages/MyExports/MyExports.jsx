import React, { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyExports = () => {
  const { user } = use(AuthContext);

  const [myexports, setMyExports] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const exportModalRef = useRef(null);
  //   console.log(myexports)

  useEffect(() => {
    if (user.email) {
      fetch(`https://import-export-hub-server-phi.vercel.app/myexports?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyExports(data);
          // console.log(data);
        });
    }
  }, [user]);

  const handleRemoveExports = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://import-export-hub-server-phi.vercel.app/myexports/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.result.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = myexports.filter(
                (exports) => exports._id !== id
              );
              setMyExports(remaining);
            }
          });
      }
    });
  };

  //   const {
  //     available_quantity,
  //     origin_country,
  //     price_max,
  //     price_min,
  //     product_images,
  //     product_name,
  //     _id,
  //     rating,
  //   } = myexports;

  const handleUpdateExports = (product) => {
    setSelectedProduct(product);
    exportModalRef.current.showModal();
  };

  const handleModalForm = (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const product_name = e.target.name.value;
    const product_images = e.target.image.value;
    const price_min = e.target.minprice.value;
    const price_max = e.target.maxprice.value;
    const origin_country = e.target.origin.value;
    const rating = e.target.rating.value;
    const available_quantity = parseInt(e.target.quantity.value);
    // console.log(
    //   available_quantity,
    //   origin_country,
    //   price_max,
    //   price_min,
    //   product_images,
    //   product_name,
    //   id,
    //   rating
    // );
    e.target.reset();
    exportModalRef.current.close();

    const updateProducts = {
      available_quantity,
      origin_country,
      price_max,
      price_min,
      product_images,
      product_name,
      id,
      rating,
    };

    fetch(`https://import-export-hub-server-phi.vercel.app/myexports/${selectedProduct._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProducts),
    })
      .then((res) => res.json())
      .then((data) => {
        setMyExports((prev) =>
          prev.map((item) =>
            item._id === selectedProduct._id
              ? { ...item, ...updateProducts }
              : item
          )
        );
        // console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
                      title: "Product Update Completed!",
                      text: "The product has been updated to your exports records",
                      icon: "success",
                    });
          data.id === selectedProduct._id;
          const newProducts = [...selectedProduct, updateProducts];
          setSelectedProduct(newProducts);
          
        }
      });
  };

  return (
    <div className="mb-10 pt-26">
        <Helmet>
        <title>My Exports - Import Export Hub</title>
      </Helmet>
      <div className="text-center max-w-160 mx-auto my-10">
        <h1 className="text-3xl text-primary font-semibold mb-3">
          My Export Orders
        </h1>
        <p className="text-gray-500">
          The My Export Orders page displays all the products you have exported
          through the platform. Here you can easily view order details, pricing,
          quantities, export status, and product information in one place.
        </p>
      </div>
      <div className="overflow-x-auto w-11/12 mx-auto mt-20 bg-white">
        <table className="table ">
          {/* head */}
          <thead className="bg-primary text-secondary">
            <tr className="text-xl">
              <th>No.</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>MinPrice</th>
              <th>MaxPrice</th>
              <th>Origin Country</th>
              <th>Rating</th>
              <th>Available Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {myexports.map((data, index) => (
              <tr key={index} className="text-lg">
                <td className="">{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-25 w-25">
                        <img src={data.product_images} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{data.product_name}</td>
                <td className="text-center">{data.price_min}</td>
                <td className="text-center">{data.price_max}</td>
                <td className="text-center">{data.origin_country}</td>
                <td className="text-center">{data.rating}</td>
                <td className="text-center">{data.available_quantity}</td>

                <th>
                  <button
                    onClick={() => handleRemoveExports(data._id)}
                    className="btn bg-secondary p-5 text-primary font-bold border-none btn-xs"
                  >
                    Delete
                  </button>
                </th>

                <th>
                  <button
                    onClick={() => handleUpdateExports(data)}
                    className="btn bg-primary p-5 text-secondary border-none font-bold btn-xs"
                  >
                    Update
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <dialog
          ref={exportModalRef}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Exports Products</h3>
            {selectedProduct && (
              <form onSubmit={handleModalForm}>
                <fieldset className="fieldset w-8/12 mx-auto">
                  <label className="label">Product Id</label>
                  <input
                    type="text"
                    className="input"
                    defaultValue={selectedProduct._id}
                    name="id"
                  />
                  <label className="label">Product Image</label>
                  <input
                    type="url"
                    className="input"
                    defaultValue={selectedProduct.product_images}
                    name="image"
                  />

                  <label className="label">Product Name</label>
                  <input
                    type="text"
                    className="input"
                    defaultValue={selectedProduct.product_name}
                    name="name"
                  />

                  <label className="label">Min Price</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter Min price"
                    defaultValue={selectedProduct.price_min}
                    name="minprice"
                  />
                  <label className="label">Max Price</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter Max price"
                    name="maxprice"
                    defaultValue={selectedProduct.price_max}
                  />

                  <label className="label">Rating</label>
                  <input
                    type="text"
                    className="input"
                    name="rating"
                    defaultValue={selectedProduct.rating}
                  />

                  <label className="label">Origin Country</label>
                  <input
                    type="text"
                    className="input"
                    name="origin"
                    defaultValue={selectedProduct.origin_country}
                  />

                  <label className="label">Available Quantity</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter available quantity"
                    name="quantity"
                    defaultValue={selectedProduct.available_quantity}
                  />

                  <div className="modal-action">
                    <button
                      className="btn w-full border-none
                                     bg-primary text-white hover:bg-primary/80"
                    >
                      Submit
                    </button>
                  </div>
                </fieldset>
              </form>
            )}
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyExports;
