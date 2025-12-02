import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../ContextApi/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyExports = () => {
  const { user } = use(AuthContext);

  const [myexports, setMyExports] = useState([]);

  useEffect(() => {
    if(user.email){
    fetch(`http://localhost:3000/myexports?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyExports(data);
        console.log(data);
      });
    }
  }, [user]);

  const handleRemoveExports = (id) => {
    fetch(`http://localhost:3000/myexports/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
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

  return (
    <div className="mb-10">
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
                  <Link
                    to={`/productdetails/${data._id}`}
                    className="btn bg-primary p-5 text-secondary border-none font-bold btn-xs"
                  >
                    Update
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyExports;
