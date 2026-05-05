export function Card({ children }) {
  return (
    <>
      <div className="shadow-md border border-gray-100">
        {children}
      </div>
    </>
  );
}
