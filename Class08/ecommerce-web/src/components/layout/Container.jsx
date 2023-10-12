export const Container = (props) => {
  return (
    <main
      style={{
        height: "100vh",
        margin: "0 4rem",
      }}
    >
      {props.children}
    </main>
  );
};
