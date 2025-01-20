import { useState, useEffect } from "react";
import WishListButton from "./WishListButton";
import { useNavigate } from "react-router";
import DeletebooksButton from "./DeletebooksButton";

function BookList() {
  const [response, setResponse] = useState("");
  const [isWhitelistedUpdate, setisWhitelistedUpdate] = useState(false);
  const navigate = useNavigate();

  const getBooks = async () => {
    const userToken = localStorage.getItem("token");
    console.log({ userToken });

    const response = await fetch("http://localhost:3000/api/book/booklist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    });

    const data = await response.json();
    setResponse(data.books);

    console.log("response", data.books);
  };

  useEffect(() => {
    if (isWhitelistedUpdate) {
      getBooks();
      setisWhitelistedUpdate(false);
    } else {
      getBooks();
    }
  }, [isWhitelistedUpdate]);

  return (
    <div>
      <ul className="flex flex-row justify-center items-center flex-wrap gap-6 mt-12  ">
        {response.length > 0 ? (
          response.map((book) => (
            <li
              key={book._id}
              className="border border-gray-500 shadow-lg p-3 rounded-md cursor-pointer hover:bg-gray-100 w-1/4"
            >
              <div className="flex flex-row justify-between rounded-xl">
                <h2 className="text-xl font-bold mb-3 ">{book.name}</h2>
                <p
                  className=" font-thin  mb-3 bg-green-200 hover:bg-green-300 hover:text-white px-2 rounded-lg flex justify-center items-center   "
                  onClick={() => navigate(`/book/${book._id}`)}
                >
                  view book...
                </p>
              </div>
              <p className="">
                <span className="font-semibold">Author :</span> {book.author}
              </p>
              <p className="">
                <span className="font-semibold">Description :</span>{" "}
                {book.description}
              </p>
              <p className="">
                <span className="font-semibold">Publish Date :</span>{" "}
                {book.publisDate}
              </p>
              <div className="flex flex-row items-center justify-between mt-6 border p-2 rounded-xl bg-gray-200 hover:bg-gray-300">
                <WishListButton
                  id={book._id}
                  isListed={book.isWhitelisted}
                  setisWhitelistedUpdate={setisWhitelistedUpdate}
                />
                <DeletebooksButton id={book._id} />
              </div>
            </li>
          ))
        ) : (
          <p>Loading Books...</p>
        )}
      </ul>
    </div>
  );
}

export default BookList;
