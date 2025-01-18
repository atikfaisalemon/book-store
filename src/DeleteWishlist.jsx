const DeleteWishlist = ({ id }) => {
  const deleteWishList = async () => {
    const userToken = localStorage.getItem("token");
    console.log({ userToken });

    console.log("id", id);

    if (id) {
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
      console.log("response", data);
      alert(data.message);
      window.location.reload();
    }
  };
  return (
    <div>
      <button onClick={deleteWishList}>Remove</button>
    </div>
  );
};

export default DeleteWishlist;
