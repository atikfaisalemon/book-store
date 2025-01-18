import { FaHeart } from "react-icons/fa"; // Importing a heart icon from react-icons
import { clsx } from "clsx";

function WishListButton({ id, isListed, setisWhitelistedUpdate }) {
  const postWishList = async () => {
    const userToken = localStorage.getItem("token");
    console.log({ userToken });

    console.log("id", id);

    if (!isListed) {
      const response = await fetch(
        `http://localhost:3000/api/book/addwhitelist/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      const data = await response.json();
      console.log("response", data.message);
      // alert(data.message);
      // window.location.reload();
    } else {
      const response = await fetch(
        `http://localhost:3000/api/book/deletewhitelist/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      const data = await response.json();
      console.log("response", data.message);
      // alert(data.message);
      // window.location.reload();
    }
    setisWhitelistedUpdate(true);
  };

  return (
    <button
      onClick={postWishList}
      className={clsx(
        "p-2 rounded-full",
        isListed
          ? "text-red-500 hover:text-red-700"
          : "text-gray-500 hover:text-gray-700"
      )}
      title="Add to Wish List"
    >
      <FaHeart size={20} />
    </button>
  );
}

export default WishListButton;
