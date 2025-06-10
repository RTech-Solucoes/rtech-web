export const FAB = (props) => {

  return (
    <a
      target="_blank"
      {...props}
      className={"fixed bottom-12 right-12 z-50 p-4 rounded-full bg-accent hover:shadow-accent hover:shadow-md transition-all duration-200 " + props?.className}
    >
      <props.icon
        {...props?.iconProps}
        className={"h-8 w-8 fill-foreground " + props?.iconProps?.className}
      />
    </a>
  );
};