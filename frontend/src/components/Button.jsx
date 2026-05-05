export function Button({ text, accent, onClick }) {
  return (
    <>
      {accent === "primary" ? (
        <button className="border border-gray-200 rounded py-1 w-full text-white bg-blue-600 hover:bg-blue-700" onClick={onClick}>
          {text}
        </button>
      ) : (
        <button className="border border-gray-200 rounded py-1 w-full text-white bg-green-600 hover:bg-green-700" onClick={onClick}>
          {text}
        </button>
      )}
    </>
  );
}
