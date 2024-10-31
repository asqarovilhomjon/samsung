import "./Props.scss"
const MOBILE = ["Galaxy S24 Ultra", "Galaxy Z Fold6", "Galaxy Z Flip6", "Galaxy Tab S10 Series", "Galaxy Watch Ultra"]
const Props = (
    {
        title,
        brend,
        description,
        btntwo,
        btnone,
        image,
        back,
        bg,
        isWhiteText
    }
) => {
    const mobile = [
        MOBILE?.map((items) => (
            <li className="mobile_item">{items}</li>
        ))
    ]

    return (
        <section className={`mobile ${isWhiteText ? 'white-text' : ''}`}
            style={{
                background: bg,
                backgroundImage: ` url( ${back})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"

            }}>
            <h2 className="mobile_text">{title}</h2>
            <ul className="mobile_content">
                {mobile}
            </ul>
            <img className="mobile_img" src={image} alt="" />
            <h2 className="mobile_brend">{brend}</h2>
            <p className="mobile_description">{description}</p>
            <div className="btn_content">
                <button className="mobile_btn1">{btnone}</button>
                <button className="mobile_btn2">{btntwo}</button>
            </div>
        </section >
    )
}

export default Props