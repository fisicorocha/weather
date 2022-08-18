import WeatherApp from "./components/WeatherApp";

export const App = () => (
  <div style={styles.container}>
    <div style={styles.backdrop} />
    <WeatherApp />
  </div>
);

const styles = {
  backdrop: {
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    borderRadius: "50px 50px 50px 50px",
    height: 300,
    width: 500,
    marginLeft: -100,
    zIndex: -100,
    backgroundColor: "rgba(255, 160, 0, 0.2)",
    position: "absolute",
    alignSelf: "center",
    overflow: "auto"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    marginTop: 100,
    width: 800,
    height: 400
  }
};
