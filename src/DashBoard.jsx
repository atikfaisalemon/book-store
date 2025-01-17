import { useState, useEffect } from "react";

function DashBoard() {
  const [response, setResponse] = useState("");

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
    getBooks();
  }, []);

  return (
    <div>
      <ul className="flex gap-6 mt-6">
        {response.length > 0 ? (
          response.map((book) => (
            <li
              key={book.id}
              className="border border-gray-500 shadow-lg p-3 rounded-md"
            >
              <h2 className="text-xl mb-6">Name: {book.name}</h2>
              <p className="">Author : {book.author}</p>
              <p className="">Description : {book.description}</p>
            </li>
          ))
        ) : (
          <p>Loading Books...</p>
        )}
      </ul>
    </div>
  );
}

export default DashBoard;
