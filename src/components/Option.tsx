import type { OptionProps } from "../types/type";

export default function Option({ answer, onClick, style }: OptionProps) {
  return (
    <button
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: answer }}
      style={{
        display: "block",
        margin: "10px 0",
        padding: "10px",
        width: "100%",
        cursor: "pointer",
        ...style,
      }}
    />
  );
}
