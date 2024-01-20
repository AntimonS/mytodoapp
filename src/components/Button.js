function Button({ children, ...props }) {
  let cssClasses = "outline rounded ml-3 text-xs font-medium";
  if (props.className) {
    cssClasses += "" + props.className;
  }
  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;
