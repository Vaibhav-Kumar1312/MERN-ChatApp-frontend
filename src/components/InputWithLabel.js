import { styled } from "@mui/material";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
});

const Label = styled("p")({
  color: "#b9bbbe",
  textTransform: "uppercase",
  fontWeight: "600",
  fontSize: "16px",
});

const Input = styled("input")({
  flexGrow: 1,
  height: "40px",
  border: "1px solid black",
  borderRadius: "5px",
  color: "#dcddde",
  background: "#35393f",
  margin: 0,
  fontSize: "16px",
  padding: "0 5px",
});

export default function InputWithLabel(props) {
  const { label, value, setValue, type, placeholder } = props;
  function handleInputChange(event) {
    setValue(event.target.value);
  }
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={handleInputChange}
        type={type}
        placeholder={placeholder}
      />
    </Wrapper>
  );
}
