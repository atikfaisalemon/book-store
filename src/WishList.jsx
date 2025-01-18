import { useState, useEffect } from "react";
import DeleteWishlist from "./DeleteWishlist";

const WishList = () => {
  const [response, setResponse] = useState([]); // Default state as an empty array
  const [loading, setLoading] = useState(true); // Add loading state

  const getWishList = async () => {
    const userToken = localStorage.getItem("token");

    try {
      const response = await fetch(
        "http://localhost:3000/api/book/seewhitelist",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      const data = await response.json();
      setResponse(data.whitelist || []); // Ensure a default empty array if no data is returned
      setLoading(false); // Set loading to false after data is fetched
      console.log("wishlist", data);
    } catch (error) {
      console.error("Failed to fetch wishlist:", error);
      setLoading(false); // Set loading to false even if there's an error
    }
  };

  useEffect(() => {
    getWishList();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-500 text-lg">Loading Wishlist...</p>
    );
  }

  return (
    <div>
      <ul className="flex flex-row justify-center items-center flex-wrap gap-6 mt-12">
        {response.length > 0 ? (
          response.map((wishlist) => (
            <li
              key={wishlist.bookId._id}
              className="border border-gray-500 shadow-lg p-3 rounded-md"
            >
              <h2 className="text-xl font-bold mb-3">{wishlist.bookId.name}</h2>
              <p className="">
                <span className="font-semibold">Author :</span>{" "}
                {wishlist.bookId.author}
              </p>
              <p className="">
                <span className="font-semibold">Description :</span>{" "}
                {wishlist.bookId.description}
              </p>
              <p className="">
                <span className="font-semibold">Publish Date :</span>{" "}
                {wishlist.bookId.publisDate}
              </p>
              <div className="bg-red-400 rounded-lg flex flex-row justify-center items-center w-[50%] mt-3">
                <DeleteWishlist id={wishlist.bookId._id} />
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">Empty Wishlist</p>
        )}
      </ul>
    </div>
  );
};

export default WishList;
