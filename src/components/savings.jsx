const Checkbox= (props) => {
    return(
    <div className="d-flex d-flex_align-center checkbox-wrapper">
        <div className="checkbox">
            <input type="checkbox"  name="savings" value={props.id} id={props.id}/>
        </div>
        <label htmlFor={props.label}>{props.label}<br/>{props.label2}</label>
    </div>
    )
}

const Savings = () => {
    return(
        <div className="savings">
            <h2>Tell us where you would like to save money</h2>
            <form>
                <div className="d-flex checkbox-container">
                    <div className="savings-row">
                        <Checkbox label="Fashion" id="fashion"/>
                        <Checkbox label="Healthcare" id="healthcare"/>
                        <Checkbox label="Childcare" id="childcare"/>
                        <Checkbox label="Beauty/" label2="Personal Care" id="beauty/personal-care"/>
                    </div>
                    <div className="savings-row">
                        <Checkbox label="Food" id="food"/>
                        <Checkbox label="Fun/Recreation" id="fun/recreation"/>
                        <Checkbox label="Transport" id="transport"/>
                        <Checkbox label="Work from home"  label2="essentials" id="work-from-home-essentials"/>
                    </div>
                    <div className="savings-row">
                        <Checkbox label="Housing" id="housing"/>
                        <Checkbox label="Internet/Data" id="internet/data"/>
                        <Checkbox label="Household supplies" id="household-supplies"/>
                        <Checkbox label="Other" label2="(Select to add more)" id="other"/>
                    </div>   
                </div>
                <button type="submit">Done</button>
            </form>
        </div>
    )
}
export default Savings;