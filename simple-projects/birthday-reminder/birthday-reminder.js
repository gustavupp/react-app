
import React, { useState } from "react";
import List from "./List";
import Data from "./Data";

function BirthdayReminder() {
const [people, setPeople] = useState(Data);
return (
    <main>
        <section className="container">
            <h3>{people.length} Birthdays Today</h3>
            <List props={people} />
            <button onClick={()=> setPeople([])}>Clear All</button>
        </section>
    </main>
);
}

export default BirthdayReminder;
