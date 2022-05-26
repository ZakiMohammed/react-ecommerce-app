const PageTitle = (prop: { title: string, children: any }) => {
    const { title, children } = prop
    return (
        !title ? <></> : <div className='pb-2 mb-4'>
            <div className="content">
                <h4 className='has-text-grey'>
                    {children}
                    {title}
                </h4>
            </div>
        </div>
    )
}

export default PageTitle