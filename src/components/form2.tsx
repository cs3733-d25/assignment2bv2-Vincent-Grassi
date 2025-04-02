export function Form2() {
    // @ts-ignore
    return (
        <>
            <form>
                <label htmlFor="Fullname">Enter Your Full Name:</label>
                <input type="text" id="fullname"/>
                <br/><br/>
                <label htmlFor="Hike Name">Enter Hike Name:</label>
                <input type="text" id="hike name"/>
                <br/><br/>
                <label htmlFor="Hike Location">Enter Location:</label>
                <input type="text" id="hike location"/>
                <br/><br/>
                <label htmlFor="easy">Easy</label>
                <input type="radio" id="easy" name="difficulty" value="Easy"/>
                <br/><br/>
                <label htmlFor="moderate">Moderate</label>
                <input type="radio" id="moderate" name="difficulty" value="Moderate"/>
                <br/><br/>
                <label htmlFor="difficult">Difficult</label>
                <input type="radio" id="difficult" name="difficulty" value="Difficult"/>
                <br/><br/>
                <label htmlFor="bearSpray">Bear Spray Required?</label>
                <input type="checkbox" id="bearSpray" name="hikingGear" value="BearSpray"/>
                <br/><br/>
                <label htmlFor="hikingStick">Hiking Stick Recommended?</label>
                <input type="checkbox" id="hikingStick" name="hikingGear" value="HikingStick"/>
                <br/><br/>
                <label htmlFor="compass">Compass Recommended?</label>
                <input type="checkbox" id="compass" name="compass" value="compass"/>
                <br/><br/>
                <label htmlFor="hikeDuration">Timespan of Hike:</label>
                <select id="hikeDuration" name="hikeDuration">
                    <option value="1-2">1–2 hours</option>
                    <option value="2-4">2–4 hours</option>
                    <option value="4-8">4–8 hours</option>
                    <option value="8+">8+ hours</option>
                </select>
                <br/><br/>

                <label htmlFor="comments">Any Additional Comments:</label>
                <br/><br/>
                <textarea id="comments"></textarea>
                <br/><br/>
                <input type="submit" value="Submit" id="submitButton"/>
            </form>
        </>
    )
}