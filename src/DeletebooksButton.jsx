const DeletebooksButton = ({ id }) => {
  const deleteBooksButton = async () => {
    const userToken = localStorage.getItem("token");
    console.log({ userToken });

    console.log("id", id);

    if (id) {
      const response = await fetch(
        `http://localhost:3000/api/book/deletebook/${id}`,
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
      <button
        className="bg-red-400 px-2 rounded-lg text-white hover:bg-red-500"
        onClick={deleteBooksButton}
      >
        Delete Book
      </button>
    </div>
  );
};

export default DeletebooksButton;
