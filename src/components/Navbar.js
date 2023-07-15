import "../components/Nav.css"
let Navbar=()=>{
    return(
        <div className="Nav">
            <div className="NavName">
            <div className="img"></div>            
            <div>Product</div>
            <div>Solutions</div>
            <div>Open Source</div>
            <div>Pricing</div>
            </div>
            <div className="input">
                <i class="fa-solid fa-magnifying-glass"></i><input className="field" type="text"     placeholder="Search or jump to..." />
                <div>Sign in</div>
                <div>Sign up</div>
            </div>

        </div>
    )
}
export default Navbar