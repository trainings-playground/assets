import { r as react } from "./export.js";
import { j as jsx, P as PropTypes } from "./jsx-runtime.js";
var selectorData = [
  {
    id: 0,
    value: "CKA Kub cluster"
  },
  {
    id: 1,
    value: "Excoscale starter"
  }
];
function Selector({
  value,
  onChange
}) {
  const selectorDataWithNull = react.exports.useMemo(() => [{
    id: "",
    value: "-"
  }, ...selectorData], [selectorData]);
  const _onChange = ({
    target
  }) => onChange(Number(target.value));
  return /* @__PURE__ */ jsx("select", {
    value,
    onChange: _onChange,
    children: selectorDataWithNull.map((ex) => /* @__PURE__ */ jsx("option", {
      value: ex.id,
      children: ex.value
    }, ex.id))
  });
}
Selector.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func
};
Selector.defaultProps = {
  value: "",
  onChange: () => {
  }
};
export { Selector as default };
