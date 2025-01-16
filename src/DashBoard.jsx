import { useState } from "react";

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

  return (
    <div>
      <button className="bg-blue-400 p-1 rounded-full" onClick={getBooks}>
        Get Books
      </button>
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
          <p>Click the button for ger book</p>
        )}
      </ul>
    </div>
  );
}

export default DashBoard;
