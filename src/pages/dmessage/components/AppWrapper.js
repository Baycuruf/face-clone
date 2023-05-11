





export const AppWrapper = ({ children }) => {
  

  return (
    <div className="App">
      <div className="app-header flex items-center justify-center text-center gap-4">
        <h1> Chat App </h1>
      </div>

      <div className="app-container text-black border border-black">{children}</div>
      
    </div>
  );
};
