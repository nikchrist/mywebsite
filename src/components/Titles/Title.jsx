function Title({ children }) {
  return (
    <div>
      <div className="pagetitles-wrapper text-center">
        <h1 className="pagetitles">{children}</h1>
      </div>
    </div>
  );
}

export default Title;
