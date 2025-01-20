import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const BookDetails = () => {
  const [book, setBook] = useState("");

  const params = useParams();
  const getBooks = async () => {
    const userToken = localStorage.getItem("token");
    const response = await fetch(
      `http://localhost:3000/api/book/singlebook/${params.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    const data = await response.json();
    setBook(data);
    console.log("bookDEtails", data);
  };
  useEffect(() => {
    getBooks();
  }, []);
  console.log("params", params);
  if (!book && !book?.books) {
    return null;
  }
  return (
    <div className="max-w-3xl mx-auto p-6 mt-12 border border-gray-300 shadow-md rounded-md">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
        {book.books.name}
      </h1>
      <p className="text-lg mb-3">
        <span className="font-semibold">Author:</span> {book.books.author}
      </p>
      <p className="text-lg mb-3">
        <span className="font-semibold">Description:</span>
        {book.books.description}
      </p>
      <p className="text-lg mb-3">
        <span className="font-semibold">Publish Date:</span>
        {new Date(book.books.publisDate).toLocaleDateString()}
      </p>
      <div className="mt-6 flex justify-center"></div>
    </div>
  );
};
