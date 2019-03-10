const baseStyles = {
  lineHeight: "1.4",
  minHeight: "36px"
};

export const SIZES = {
  default: {
    ...baseStyles
  },
  small: {
    ...baseStyles,
    minWidth: "80px",
    fontSize: "10px"
  },
  big: {
    ...baseStyles,
    padding: "25px",
    fontSize: "16px"
  }
};
