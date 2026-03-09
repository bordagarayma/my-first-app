function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 16,
        background: "#fff",
      }}
    >
      {children}
    </div>
  );
}

export default Card;