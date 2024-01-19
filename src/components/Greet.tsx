// There is an error in props that says there is no type defined in props
// Build types for web applications and interfaces built for libraries
type GreetProps = {
  name: string;
  // The question mark is optional for this prop to be passed. Fixes error if there is no prop that is being passed in
  messageCount?: number;
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  // This is optional if we want a default in the props
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name} you have ${messageCount} Messages`
          : `Welcome Guest`}
        {/* Welcome {props.name} You have {props.messageCount} Messages */}
      </h2>
    </div>
  );
};
