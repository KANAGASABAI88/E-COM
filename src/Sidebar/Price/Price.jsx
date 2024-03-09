import Input from "../../components/Input";
import "./price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={400}
          title="RS.300-400"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={500}
          title="RS.400-500"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={600}
          title="RS.500-600"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={700}
          title="Over 600"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;