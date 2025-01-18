import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

const CreateBook = () => {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [response, setResponse] = useState(null);
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBook = {
      name: bookName,
      author: author,
      description: description,
    };

    try {
      const userToken = localStorage.getItem("token");
      const res = await fetch("http://localhost:3000/api/book/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(newBook),
      });

      const data = await res.json();
      setResponse(data);
      console.log("Book created:", data);
      setBookName("");
      setAuthor("");
      setDescription("");
      Navigate("/dashBoard");
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Book Name</label>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter book name"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter author name"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg"
            placeholder="Enter book description"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Create Book
        </button>
      </form>

      {response && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
          <p>{response.message || "Book created successfully!"}</p>
        </div>
      )}
    </div>
  );
};

export default CreateBook;
