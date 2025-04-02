import {List2} from "./list2.tsx";
import {Table2} from "./table2.tsx";
import {Form2} from "./form2.tsx";

export function Hobby2() {
    return (
        <>
            <img src={"../public/hiking.jpeg"} alt={"Glacier National Park"}></img>
            <p><strong>Favorite National Parks:</strong></p>
            <List2></List2>
            <p><strong>Hike Ratings:</strong></p>
            <Table2></Table2>
            <br/>
            <p><strong>Rate Your Hikes:</strong></p>
            <Form2></Form2>
        </>
    )
}