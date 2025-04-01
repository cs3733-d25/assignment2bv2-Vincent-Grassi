export function Form1() {
    return (
        <>
            <form>
                <label htmlFor="fname">First Name</label>
                <br/>
                <input type="text" id="fname" name="firstname" placeholder="First Name"/>
                <br/><br/>
                <label htmlFor="lname">Last Name</label>
                <br/>
                <input type="text" id="lname" name="lastname" placeholder="Last Name"/>
                <br/>

                <p>What formats do you play?</p>
                <label htmlFor="standardCheckbox">Standard</label>
                <input type="checkbox" id="standardCheckbox" name="standardCheckbox"/>
                <br/>
                <label htmlFor="modernCheckbox">Modern</label>
                <input type="checkbox" id="modernCheckbox" name="modernCheckbox"/>
                <br/>
                <label htmlFor="commanderCheckbox">Commander</label>
                <input type="checkbox" id="commanderCheckbox" name="commanderCheckbox"/>
                <br/><br/>

                <p>Which is your favorite?</p>
                <label htmlFor="standardRadio">Standard</label>
                <input type="radio" id="standardRadio" name="formatRadio"/>
                <br/>
                <label htmlFor="modernRadio">Modern</label>
                <input type="radio" id="modernRadio" name="formatRadio"/>
                <br/>
                <label htmlFor="commanderRadio">Commander</label>
                <input type="radio" id="commanderRadio" name="formatRadio"/>
                <br/>
                <label htmlFor="otherRadio">Other</label>
                <input type="radio" id="otherRadio" name="formatRadio"/>
                <br/>

                <label htmlFor="playtimeDropdown">How long have you been playing?</label>
                <br/>
                <select id="playtimeDropdown" name="playtimeDropdown">
                    <option value="0">Less than a year</option>
                    <option value="1">1 year</option>
                    <option value="3">3 years</option>
                    <option value="5">5 years</option>
                    <option value="10">10+ years</option>
                </select>
                <br/>

                <label htmlFor="additionalComments">Additional Comments</label>
                <br/>
                <input type="text" id="additionalComments" name="additionalComments" placeholder="Additional Comments"/>
                <br/>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}