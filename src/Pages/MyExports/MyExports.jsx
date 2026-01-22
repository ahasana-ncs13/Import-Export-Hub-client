import React, { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyExports = () => {
  const { user } = use(AuthContext);
const [currentUser, setCurrentUser] = useState(user);
  const [myexports, setMyExports] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const exportModalRef = useRef(null);


  useEffect(() => {
if (user.email) {
    // Fetch current user
  fetch(`https://import-export-hub-server-phi.vercel.app/currentuser/${user.email}`)
    .then(res => res.json())
    .then(userData => {
      setCurrentUser(userData);
    })
}
    if (user.email===currentUser.email) {
      fetch(`https://import-export-hub-server-phi.vercel.app/myexports?email=${currentUser.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyExports(data);
          // console.log(data);
        });
    }
  
  }, [user,currentUser]);

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
    <div className="mb-10 pt-26  text-base-content">
        <Helmet>
        <title>My Exports - Import Export Hub</title>
      </Helmet>
      <div className="text-center max-w-3xl mx-auto my-10">
    <h1 className="text-3xl font-semibold text-primary mb-3">
      My Export Orders
    </h1>
    <p className="opacity-70">
      View and manage all your exported products in one place including pricing,
      quantity, and origin details.
    </p>
  </div>

      <div className="overflow-x-auto w-11/12 mx-auto mt-20 bg-white">
        <div className="overflow-x-auto w-11/12 mx-auto my-16 bg-base-100 rounded-xl shadow">
  <table className="table table-zebra">
    <thead className="bg-primary text-primary-content">
      <tr className="text-sm md:text-base">
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th className="text-center">Min</th>
        <th className="text-center">Max</th>
        <th className="text-center">Origin</th>
        <th className="text-center">Rating</th>
        <th className="text-center">Qty</th>
        <th className="text-center">Delete</th>
        <th className="text-center">Update</th>
      </tr>
    </thead>

    <tbody>
      {myexports.map((data, index) => (
        <tr
          key={data._id}
          className="hover:bg-base-200 transition"
        >
          <td>{index + 1}</td>

          <td>
            <div className="avatar">
              <div className="mask mask-squircle w-16 h-16">
                <img src={data.product_images} alt={data.product_name} />
              </div>
            </div>
          </td>

          <td className="font-medium">{data.product_name}</td>
          <td className="text-center">{data.price_min}</td>
          <td className="text-center">{data.price_max}</td>
          <td className="text-center">{data.origin_country}</td>
          <td className="text-center">{data.rating}</td>
          <td className="text-center">{data.available_quantity}</td>

          <td className="text-center">
            <button
              onClick={() => handleRemoveExports(data._id)}
              className="btn btn-error btn-xs text-white"
            >
              Delete
            </button>
          </td>

          <td className="text-center">
            <button
              onClick={() => handleUpdateExports(data)}
              className="btn btn-primary btn-xs"
            >
              Update
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        <dialog ref={exportModalRef} className="modal">
  <div className="modal-box bg-base-100">
    <h3 className="font-semibold text-lg mb-4">
      Update Export Product
    </h3>

    {selectedProduct && (
      <form onSubmit={handleModalForm} className="space-y-3">
        <input className="input input-bordered w-full" defaultValue={selectedProduct._id} name="id" />
        <input className="input input-bordered w-full" defaultValue={selectedProduct.product_images} name="image" />
        <input className="input input-bordered w-full" defaultValue={selectedProduct.product_name} name="name" />
        <input className="input input-bordered w-full" defaultValue={selectedProduct.price_min} name="minprice" />
        <input className="input input-bordered w-full" defaultValue={selectedProduct.price_max} name="maxprice" />
        <input className="input input-bordered w-full" defaultValue={selectedProduct.rating} name="rating" />
        <input className="input input-bordered w-full" defaultValue={selectedProduct.origin_country} name="origin" />
        <input className="input input-bordered w-full" defaultValue={selectedProduct.available_quantity} name="quantity" />

        <button className="btn btn-primary w-full mt-3">
          Save Changes
        </button>
      </form>
    )}

    <form method="dialog" className="mt-4">
      <button className="btn btn-ghost w-full">Close</button>
    </form>
  </div>
</dialog>

      </div>
    </div>
  );
};

export default MyExports;
