interface props {
    children?: any
    className?: string
}

function Container({ children, className }: props) {
    return (
        <div className={`mx-5 md:mx-14 lg:mx-40 xl:mx-52 2xl:mx-80 ${className}`}>
            {children}
        </div>
    );
}

export default Container;