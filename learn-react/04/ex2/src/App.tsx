import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import Input from "./components/Input";

export default function App() {
  return (
    <div className="center">
      <Button type="button" disabled>
        Add
      </Button>
      <Button className="bg-[#ed4848]">Cancel</Button>
      <Input type="text" placeholder="Enter Todo List" />
      <CheckBox type="checkbox">
        <span>
          I agree with <strong>terms</strong> and <strong>policied</strong>.
        </span>
      </CheckBox>
    </div>
  );
}
