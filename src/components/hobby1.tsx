import {List1} from "./list1.tsx";
import {Table1} from "./table1.tsx";
import {Form1} from "./form1.tsx";

export function Hobby1() {
    return (
        <>
            <img src={"../public/fastbondBanner.jpg"} alt={"Fastbond Banner"}></img>
            <p><strong>Some card types include:</strong></p>
            <List1></List1>
            <p><strong>Recent Set Releases:</strong></p>
            <Table1></Table1>
            <br/>
            <Form1></Form1>
        </>
    )
}