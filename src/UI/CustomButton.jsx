export default function CButton({children, textOnly, className, ...props}){
    let Cssclasses = textOnly? 'text-button': 'button';
    Cssclasses += ' ' + className
    return (<button className={Cssclasses} {...props}>{children}</button>)
}