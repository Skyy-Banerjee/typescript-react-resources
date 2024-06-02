//Omit - Takes an Object{} type and removes the specified properties
type BtnProps = {
    variant: 'primary' | 'secondary';
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export function CustomButton({variant, children, ...rest}: BtnProps) {
  return (
    <button className={`class-with-${variant}`} {...rest}>
     {children}
    </button>
  )
}

