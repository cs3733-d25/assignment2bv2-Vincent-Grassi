export function Table2() {
    return (
        <>
            <table className="collapse">
                <caption>Hike Ratings</caption>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Elevation</th>
                    <th>Difficulty</th>
                </tr>
                <tr>
                    <td>Grinnell Glacier Trail</td>
                    <td>Glacier National Park, Montana</td>
                    <td>1,600 ft</td>
                    <td>Difficult</td>
                </tr>
                <tr>
                    <td>Grand Canyon of the Yellowstone</td>
                    <td>Yellowstone National Park, Wyoming</td>
                    <td>400 ft</td>
                    <td>Moderate</td>
                </tr>
                <tr>
                    <td>Garfield Peak Trail</td>
                    <td>Yellowstone National Park, Wyoming</td>
                    <td>1010 ft</td>
                    <td>Moderate</td>
                </tr>
                <tr>
                    <td>Notch Trail</td>
                    <td>Badlands National Park, South Dakota</td>
                    <td>125 ft</td>
                    <td>Easy</td>
                </tr>
            </table>
        </>
    )
}