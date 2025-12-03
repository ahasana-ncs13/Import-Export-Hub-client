import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../ContextApi/AuthContext";
import { Helmet } from "react-helmet";

const MyImports = () => {
  const { user } = use(AuthContext);
  const [importedData, setImportedData] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://import-export-hub-server-phi.vercel.app/myimports?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setImportedData(data));
    }
  }, [user]);
  console.log(importedData);

  const handleRemoveImports = (id) => {
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
        fetch(`https://import-export-hub-server-phi.vercel.app/myimports/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = importedData.filter(
                (imports) => imports._id !== id
              );
              setImportedData(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mb-10">
      <Helmet>
        <title>My Imports - Import Export Hub</title>
      </Helmet>
      <div className="text-center max-w-160 mx-auto my-10">
        <h1 className="text-3xl text-primary font-semibold mb-3">
          My Import Orders
        </h1>
        <p className="text-gray-500">
          A complete overview of your import transactions. Monitor purchased
          items, quantities, prices, and order status to keep your import
          workflow smooth and efficient.
        </p>
      </div>
      <div className="overflow-x-auto w-11/12 mx-auto mt-20 bg-white">
        <table className="table ">
          {/* head */}
          <thead className="bg-primary text-secondary">
            <tr className="text-xl">
              <th>No.of Serials</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th> Price</th>
              <th> Origin Country</th>
              <th> Imported Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {importedData.map((data, index) => (
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
                <td className="text-center">{data.price}</td>
                <td className="text-center">{data.origin_country}</td>
                <td className="text-center">{data.Quantity}</td>
                <th>
                  <button
                    onClick={() => handleRemoveImports(data._id)}
                    className="btn bg-secondary p-5 text-primary font-bold border-none btn-xs"
                  >
                    Remove
                  </button>
                </th>
                <th>
                  <Link
                    to={`/productdetails/${data._id}`}
                    className="btn bg-primary p-5 text-secondary border-none font-bold btn-xs"
                  >
                    See Details
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

export default MyImports;
