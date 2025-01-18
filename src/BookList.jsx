import { useState, useEffect } from "react";
import WishListButton from "./WishListButton";

function BookList() {
  const [response, setResponse] = useState("");
  const [isWhitelistedUpdate, setisWhitelistedUpdate] = useState(false);

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
      <ul className="flex flex-row justify-center items-center flex-wrap gap-6 mt-12">
        {response.length > 0 ? (
          response.map((book) => (
            <li
              key={book._id}
              className="border border-gray-500 shadow-lg p-3 rounded-md"
            >
              <h2 className="text-xl font-bold mb-3">{book.name}</h2>
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
              <div className="flex flex-row ">
                <WishListButton
                  id={book._id}
                  isListed={book.isWhitelisted}
                  setisWhitelistedUpdate={setisWhitelistedUpdate}
                />
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
